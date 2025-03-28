// Funcionalidad del traductor Español-Alto Valyrio

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const textoEspanol = document.getElementById('texto-espanol');
    const btnTraducir = document.getElementById('btn-traducir');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const resultadoTraduccion = document.getElementById('resultado-traduccion');
    const traduccionTexto = resultadoTraduccion.querySelector('.traduccion-texto');
    const traduccionPronunciacion = resultadoTraduccion.querySelector('.traduccion-pronunciacion');
    const btnGuardarFavorito = document.getElementById('btn-guardar-favorito');
    const listaFavoritos = document.getElementById('lista-favoritos');

    // Cargar favoritos guardados
    cargarFavoritos();

    // Event listeners
    btnTraducir.addEventListener('click', traducir);
    btnLimpiar.addEventListener('click', limpiar);
    btnGuardarFavorito.addEventListener('click', guardarFavorito);
    textoEspanol.addEventListener('input', function() {
        btnGuardarFavorito.disabled = true;
    });

    // Función principal de traducción
    function traducir() {
        const texto = textoEspanol.value.trim();
        
        if (!texto) {
            mostrarMensaje('Por favor, ingresa un texto para traducir.');
            return;
        }
        
        // Realizar la traducción
        const resultado = traducirTexto(texto);
        
        // Mostrar el resultado
        traduccionTexto.textContent = resultado.valyrio;
        traduccionPronunciacion.textContent = resultado.pronunciacion;
        
        // Habilitar el botón de guardar favorito
        btnGuardarFavorito.disabled = false;
    }

    // Función para traducir texto de español a Alto Valyrio
    function traducirTexto(texto) {
        // Normalizar el texto (quitar acentos, convertir a minúsculas)
        const textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        
        // Dividir el texto en palabras
        const palabrasEspanol = textoNormalizado.split(/\s+/);
        
        // Verificar si es una frase completa en el diccionario
        const fraseCompleta = diccionarioCompleto.palabras[texto.toLowerCase()];
        if (fraseCompleta) {
            return {
                valyrio: fraseCompleta.valyrio,
                pronunciacion: fraseCompleta.pronunciacion
            };
        }
        
        // Procesar cada palabra
        let palabrasProcesadas = [];
        
        for (const palabra of palabrasEspanol) {
            // Limpiar la palabra de signos de puntuación
            const palabraLimpia = palabra.replace(/[.,;:!?¿¡()]/g, '');
            
            // Buscar en el diccionario
            const traduccion = buscarEnDiccionario(palabraLimpia);
            
            if (traduccion) {
                palabrasProcesadas.push({
                    original: palabra,
                    valyrio: traduccion.valyrio,
                    pronunciacion: traduccion.pronunciacion,
                    tipo: determinarTipoPalabra(palabraLimpia)
                });
            } else {
                // Si no se encuentra, mantener la palabra original
                palabrasProcesadas.push({
                    original: palabra,
                    valyrio: palabra,
                    pronunciacion: palabra,
                    tipo: 'desconocido'
                });
            }
        }
        
        // Aplicar reglas gramaticales
        palabrasProcesadas = aplicarReglasGramaticales(palabrasProcesadas, texto);
        
        // Construir la traducción final
        const traduccionFinal = palabrasProcesadas.map(p => p.valyrio).join(' ');
        const pronunciacionFinal = palabrasProcesadas.map(p => p.pronunciacion).join(' ');
        
        return {
            valyrio: traduccionFinal,
            pronunciacion: pronunciacionFinal
        };
    }

    // Función para buscar una palabra en el diccionario
    function buscarEnDiccionario(palabra) {
        // Buscar en palabras principales
        if (diccionarioCompleto.palabras[palabra]) {
            return diccionarioCompleto.palabras[palabra];
        }
        
        // Buscar en palabras de conexión
        if (diccionarioCompleto.conexion[palabra]) {
            return diccionarioCompleto.conexion[palabra];
        }
        
        // Si no se encuentra, intentar con formas plurales o singulares
        if (palabra.endsWith('s')) {
            const singular = palabra.slice(0, -1);
            if (diccionarioCompleto.palabras[singular]) {
                const traduccion = diccionarioCompleto.palabras[singular];
                // Pluralizar (simplificado)
                return {
                    valyrio: traduccion.valyrio + 'i',
                    pronunciacion: traduccion.pronunciacion + '-i'
                };
            }
        }
        
        // Intentar con verbos conjugados (simplificado)
        for (const [clave, valor] of Object.entries(diccionarioCompleto.palabras)) {
            if (clave.endsWith('ar') || clave.endsWith('er') || clave.endsWith('ir')) {
                const raiz = clave.slice(0, -2);
                if (palabra.startsWith(raiz)) {
                    return valor;
                }
            }
        }
        
        return null;
    }

    // Función para determinar el tipo de palabra
    function determinarTipoPalabra(palabra) {
        // Pronombres personales
        const pronombres = ['yo', 'tu', 'el', 'ella', 'nosotros', 'vosotros', 'ellos', 'ellas', 'me', 'te', 'se', 'nos', 'os', 'les'];
        if (pronombres.includes(palabra)) {
            return 'pronombre';
        }
        
        // Verbos (mejorado para detectar formas conjugadas)
        // Infinitivos
        if (palabra.endsWith('ar') || palabra.endsWith('er') || palabra.endsWith('ir')) {
            return 'verbo';
        }
        
        // Formas conjugadas comunes
        const terminacionesVerbales = [
            'o', 'as', 'a', 'amos', 'áis', 'an',  // Presente
            'é', 'aste', 'ó', 'amos', 'asteis', 'aron',  // Pretérito
            'aba', 'abas', 'ábamos', 'abais', 'aban',  // Imperfecto -ar
            'ía', 'ías', 'íamos', 'íais', 'ían',  // Imperfecto -er/-ir
            'aré', 'arás', 'ará', 'aremos', 'aréis', 'arán',  // Futuro -ar
            'eré', 'erás', 'erá', 'eremos', 'eréis', 'erán',  // Futuro -er
            'iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'   // Futuro -ir
        ];
        
        // Verbos irregulares comunes y sus formas
        const verbosIrregulares = {
            'soy': 'ser', 'eres': 'ser', 'es': 'ser', 'somos': 'ser', 'sois': 'ser', 'son': 'ser',
            'estoy': 'estar', 'estás': 'estar', 'está': 'estar', 'estamos': 'estar', 'estáis': 'estar', 'están': 'estar',
            'voy': 'ir', 'vas': 'ir', 'va': 'ir', 'vamos': 'ir', 'vais': 'ir', 'van': 'ir',
            'tengo': 'tener', 'tienes': 'tener', 'tiene': 'tener', 'tenemos': 'tener', 'tenéis': 'tener', 'tienen': 'tener',
            'hago': 'hacer', 'haces': 'hacer', 'hace': 'hacer', 'hacemos': 'hacer', 'hacéis': 'hacer', 'hacen': 'hacer',
            'digo': 'decir', 'dices': 'decir', 'dice': 'decir', 'decimos': 'decir', 'decís': 'decir', 'dicen': 'decir',
            'vengo': 'venir', 'vienes': 'venir', 'viene': 'venir', 'venimos': 'venir', 'venís': 'venir', 'vienen': 'venir',
            'pongo': 'poner', 'pones': 'poner', 'pone': 'poner', 'ponemos': 'poner', 'ponéis': 'poner', 'ponen': 'poner',
            'salgo': 'salir', 'sales': 'salir', 'sale': 'salir', 'salimos': 'salir', 'salís': 'salir', 'salen': 'salir',
            'quiero': 'querer', 'quieres': 'querer', 'quiere': 'querer', 'queremos': 'querer', 'queréis': 'querer', 'quieren': 'querer',
            'puedo': 'poder', 'puedes': 'poder', 'puede': 'poder', 'podemos': 'poder', 'podéis': 'poder', 'pueden': 'poder',
            'sé': 'saber', 'sabes': 'saber', 'sabe': 'saber', 'sabemos': 'saber', 'sabéis': 'saber', 'saben': 'saber',
            'doy': 'dar', 'das': 'dar', 'da': 'dar', 'damos': 'dar', 'dais': 'dar', 'dan': 'dar',
            'llamo': 'llamar', 'llamas': 'llamar', 'llama': 'llamar', 'llamamos': 'llamar', 'llamáis': 'llamar', 'llaman': 'llamar',
            'camino': 'caminar', 'caminas': 'caminar', 'camina': 'caminar', 'caminamos': 'caminar', 'camináis': 'caminar', 'caminan': 'caminar'
        };
        
        // Verificar si es un verbo irregular conocido
        if (verbosIrregulares[palabra]) {
            return 'verbo';
        }
        
        // Verificar terminaciones verbales comunes
        for (const terminacion of terminacionesVerbales) {
            if (palabra.endsWith(terminacion) && palabra.length > terminacion.length + 1) {
                // Asegurarse de que no sea una coincidencia casual (ej. "casa" no es verbo aunque termine en "a")
                return 'verbo';
            }
        }
        
        // Adjetivos comunes (simplificado)
        const adjetivos = ['bueno', 'malo', 'grande', 'pequeño', 'alto', 'bajo', 'fuerte', 'debil', 'rapido', 'lento', 'caliente', 'frio', 'nuevo', 'viejo', 'feliz', 'triste'];
        if (adjetivos.includes(palabra)) {
            return 'adjetivo';
        }
        
        // Palabras de conexión
        if (diccionarioCompleto.conexion[palabra]) {
            return 'conexion';
        }
        
        // Por defecto, asumir sustantivo
        return 'sustantivo';
    }

    // Función para aplicar reglas gramaticales
    function aplicarReglasGramaticales(palabras, textoOriginal) {
        // Detectar si es una pregunta
        const resultadoPregunta = reglasTraduccion.manejarPreguntas(palabras);
        palabras = resultadoPregunta.palabras;
        
        // Detectar tiempo verbal
        const tiempo = reglasTraduccion.detectarTiempoVerbal(textoOriginal.split(' '));
        
        // Detectar persona gramatical
        const { persona, numero } = reglasTraduccion.detectarPersona(textoOriginal.split(' '));
        
        // Conjugar verbos
        palabras = palabras.map(palabra => {
            if (palabra.tipo === 'verbo') {
                return reglasTraduccion.conjugarVerbo(palabra, persona, numero, tiempo);
            }
            return palabra;
        });
        
        // Aplicar concordancia
        palabras = reglasTraduccion.concordancia(palabras);
        
        // Aplicar casos gramaticales
        palabras = reglasTraduccion.aplicarCasos(palabras);
        
        // Manejar negaciones
        palabras = reglasTraduccion.manejarNegacion(palabras);
        
        // Eliminar verbos duplicados y verbos auxiliares innecesarios
        const verbosEncontrados = new Set();
        palabras = palabras.filter(palabra => {
            // Si no es un verbo, mantenerlo
            if (palabra.tipo !== 'verbo') {
                return true;
            }
            
            // Si es un verbo auxiliar (ser, estar, ir) y no está en el texto original, eliminarlo
            const esVerboAuxiliar = ['ser', 'estar', 'ir'].includes(palabra.original);
            const estaEnTextoOriginal = textoOriginal.toLowerCase().includes(palabra.original);
            
            if (esVerboAuxiliar && !estaEnTextoOriginal) {
                // Verificar si hay formas conjugadas de estos verbos en el texto original
                const conjugacionesAuxiliares = {
                    'ser': ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
                    'estar': ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
                    'ir': ['voy', 'vas', 'va', 'vamos', 'vais', 'van']
                };
                
                const tieneConjugacionEnTexto = conjugacionesAuxiliares[palabra.original].some(
                    conj => textoOriginal.toLowerCase().includes(conj)
                );
                
                if (!tieneConjugacionEnTexto) {
                    return false;
                }
            }
            
            // Eliminar duplicados del mismo verbo
            if (verbosEncontrados.has(palabra.valyrio)) {
                return false;
            }
            
            verbosEncontrados.add(palabra.valyrio);
            return true;
        });
        
        // Reordenar palabras según SOV
        palabras = reglasTraduccion.ordenPalabras(palabras);
        
        // Si es pregunta, añadir signo de interrogación
        if (resultadoPregunta.esPregunta) {
            // En Alto Valyrio no hay signos de interrogación, pero podemos indicarlo en la pronunciación
        }
        
        return palabras;
    }

    // Función para limpiar el formulario
    function limpiar() {
        textoEspanol.value = '';
        traduccionTexto.textContent = '';
        traduccionPronunciacion.textContent = '';
        btnGuardarFavorito.disabled = true;
    }

    // Función para guardar un favorito
    function guardarFavorito() {
        const textoEsp = textoEspanol.value.trim();
        const textoVal = traduccionTexto.textContent;
        const textoPron = traduccionPronunciacion.textContent;
        
        if (!textoEsp || !textoVal) return;
        
        // Crear objeto favorito
        const favorito = {
            espanol: textoEsp,
            valyrio: textoVal,
            pronunciacion: textoPron,
            id: Date.now() // ID único basado en timestamp
        };
        
        // Obtener favoritos existentes
        let favoritos = JSON.parse(localStorage.getItem('favoritos_alto_valyrio') || '[]');
        
        // Añadir nuevo favorito
        favoritos.push(favorito);
        
        // Guardar en localStorage
        localStorage.setItem('favoritos_alto_valyrio', JSON.stringify(favoritos));
        
        // Actualizar la lista de favoritos
        mostrarFavoritos(favoritos);
        
        // Mostrar mensaje de confirmación
        mostrarMensaje('Frase guardada en favoritos.');
    }

    // Función para cargar favoritos guardados
    function cargarFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos_alto_valyrio') || '[]');
        mostrarFavoritos(favoritos);
    }

    // Función para mostrar favoritos en la lista
    function mostrarFavoritos(favoritos) {
        // Limpiar lista actual
        listaFavoritos.innerHTML = '';
        
        if (favoritos.length === 0) {
            listaFavoritos.innerHTML = '<p class="no-favoritos">No tienes frases favoritas guardadas.</p>';
            return;
        }
        
        // Añadir cada favorito a la lista
        favoritos.forEach(fav => {
            const favItem = document.createElement('div');
            favItem.className = 'favorito-item';
            favItem.innerHTML = `
                <p class="espanol">${fav.espanol}</p>
                <p class="valyrio">${fav.valyrio}</p>
                <p class="pronunciacion">${fav.pronunciacion}</p>
                <button class="eliminar-favorito" data-id="${fav.id}">×</button>
            `;
            
            listaFavoritos.appendChild(favItem);
            
            // Añadir evento para eliminar favorito
            favItem.querySelector('.eliminar-favorito').addEventListener('click', function() {
                eliminarFavorito(fav.id);
            });
            
            // Añadir evento para cargar favorito en el traductor
            favItem.addEventListener('click', function(e) {
                if (!e.target.classList.contains('eliminar-favorito')) {
                    cargarFavoritoEnTraductor(fav);
                }
            });
        });
    }

    // Función para eliminar un favorito
    function eliminarFavorito(id) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos_alto_valyrio') || '[]');
        favoritos = favoritos.filter(fav => fav.id !== id);
        localStorage.setItem('favoritos_alto_valyrio', JSON.stringify(favoritos));
        mostrarFavoritos(favoritos);
        mostrarMensaje('Frase eliminada de favoritos.');
    }

    // Función para cargar un favorito en el traductor
    function cargarFavoritoEnTraductor(favorito) {
        textoEspanol.value = favorito.espanol;
        traduccionTexto.textContent = favorito.valyrio;
        traduccionPronunciacion.textContent = favorito.pronunciacion;
        btnGuardarFavorito.disabled = true; // Deshabilitar para evitar duplicados
    }

    // Función para mostrar mensajes temporales
    function mostrarMensaje(mensaje) {
        // Crear elemento de mensaje
        const mensajeEl = document.createElement('div');
        mensajeEl.className = 'mensaje-temporal';
        mensajeEl.textContent = mensaje;
        
        // Añadir al DOM
        document.body.appendChild(mensajeEl);
        
        // Mostrar con animación
        setTimeout(() => {
            mensajeEl.classList.add('mostrar');
        }, 10);
        
        // Eliminar después de 3 segundos
        setTimeout(() => {
            mensajeEl.classList.remove('mostrar');
            setTimeout(() => {
                document.body.removeChild(mensajeEl);
            }, 300);
        }, 3000);
    }

    // Añadir estilos para mensajes temporales
    const style = document.createElement('style');
    style.textContent = `
        .mensaje-temporal {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            opacity: 0;
            transition: transform 0.3s, opacity 0.3s;
        }
        
        .mensaje-temporal.mostrar {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
