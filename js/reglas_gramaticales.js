// Reglas gramaticales para la traducción de español a Alto Valyrio

const reglasGramaticales = {
    // Orden de las palabras en Alto Valyrio (SOV - Sujeto-Objeto-Verbo)
    ordenPalabras: function(palabras) {
        // Identificar sujeto, objeto y verbo (simplificado)
        let sujeto = [];
        let objeto = [];
        let verbo = [];
        let otros = [];
        
        // Análisis básico de la estructura de la oración
        let encontradoVerbo = false;
        
        // Conjunto para rastrear verbos ya procesados y evitar duplicados
        const verbosYaProcesados = new Set();
        
        for (let i = 0; i < palabras.length; i++) {
            const palabra = palabras[i];
            
            // Identificar verbos (simplificado)
            if (palabra.tipo === 'verbo') {
                // Evitar duplicar verbos
                if (!verbosYaProcesados.has(palabra.valyrio)) {
                    verbo.push(palabra);
                    verbosYaProcesados.add(palabra.valyrio);
                    encontradoVerbo = true;
                }
            }
            // Identificar sujeto (antes del verbo, simplificado)
            else if (!encontradoVerbo && (palabra.tipo === 'pronombre' || palabra.tipo === 'sustantivo')) {
                sujeto.push(palabra);
            }
            // Identificar objeto (después del sujeto, antes del verbo, simplificado)
            else if (encontradoVerbo && (palabra.tipo === 'sustantivo' || palabra.tipo === 'pronombre')) {
                objeto.push(palabra);
            }
            // Otras palabras
            else {
                otros.push(palabra);
            }
        }
        
        // Reordenar según SOV
        return [...sujeto, ...objeto, ...otros, ...verbo];
    },
    
    // Concordancia de género y número
    concordancia: function(palabras) {
        // En Alto Valyrio, los adjetivos concuerdan con los sustantivos en género y número
        // Esta es una implementación simplificada
        
        for (let i = 0; i < palabras.length - 1; i++) {
            if (palabras[i].tipo === 'adjetivo' && palabras[i+1].tipo === 'sustantivo') {
                // Ajustar terminación del adjetivo según el género del sustantivo
                // (Simplificado, en realidad dependería del género específico del sustantivo)
                palabras[i].valyrio = palabras[i].valyrio + 'e';
            }
        }
        
        return palabras;
    },
    
    // Conjugación verbal básica
    conjugarVerbo: function(verbo, persona, numero, tiempo) {
        // Esta es una implementación simplificada de la conjugación verbal
        
        if (!verbo || !verbo.valyrio) return verbo;
        
        const raiz = verbo.valyrio.replace('agon', '');
        let conjugado = '';
        
        // Conjugación en presente (simplificada)
        if (tiempo === 'presente') {
            if (persona === 1 && numero === 'singular') {
                conjugado = raiz + 'an';
            } else if (persona === 2 && numero === 'singular') {
                conjugado = raiz + 'as';
            } else if (persona === 3 && numero === 'singular') {
                conjugado = raiz + 'a';
            } else if (persona === 1 && numero === 'plural') {
                conjugado = raiz + 'i';
            } else if (persona === 2 && numero === 'plural') {
                conjugado = raiz + 'atis';
            } else if (persona === 3 && numero === 'plural') {
                conjugado = raiz + 'is';
            }
        }
        // Conjugación en pasado (simplificada)
        else if (tiempo === 'pasado') {
            if (persona === 1 && numero === 'singular') {
                conjugado = raiz + 'in';
            } else if (persona === 2 && numero === 'singular') {
                conjugado = raiz + 'is';
            } else if (persona === 3 && numero === 'singular') {
                conjugado = raiz + 'i';
            } else if (persona === 1 && numero === 'plural') {
                conjugado = raiz + 'ī';
            } else if (persona === 2 && numero === 'plural') {
                conjugado = raiz + 'ītis';
            } else if (persona === 3 && numero === 'plural') {
                conjugado = raiz + 'īs';
            }
        }
        // Conjugación en futuro (simplificada)
        else if (tiempo === 'futuro') {
            if (numero === 'singular') {
                conjugado = raiz + 'inna';
            } else if (numero === 'plural' && persona === 1) {
                conjugado = raiz + 'inni';
            } else if (numero === 'plural' && persona === 2) {
                conjugado = raiz + 'innoti';
            } else if (numero === 'plural' && persona === 3) {
                conjugado = raiz + 'inni';
            }
        }
        // Si no se puede determinar, usar infinitivo
        else {
            conjugado = verbo.valyrio;
        }
        
        return {
            ...verbo,
            valyrio: conjugado
        };
    },
    
    // Detectar tiempo verbal basado en palabras clave
    detectarTiempoVerbal: function(palabras) {
        // Palabras que indican tiempo pasado
        const indicadoresPasado = ['ayer', 'anteayer', 'hace', 'pasado', 'anterior', 'fue', 'era', 'había'];
        
        // Palabras que indican tiempo futuro
        const indicadoresFuturo = ['mañana', 'próximo', 'siguiente', 'futuro', 'será', 'habrá', 'después'];
        
        // Buscar indicadores de tiempo
        for (const palabra of palabras) {
            const palabraLower = palabra.toLowerCase();
            
            if (indicadoresPasado.some(ind => palabraLower.includes(ind))) {
                return 'pasado';
            }
            
            if (indicadoresFuturo.some(ind => palabraLower.includes(ind))) {
                return 'futuro';
            }
        }
        
        // Por defecto, asumir presente
        return 'presente';
    },
    
    // Detectar persona gramatical basada en pronombres
    detectarPersona: function(palabras) {
        const primeraPersonaSingular = ['yo', 'me', 'mi', 'conmigo'];
        const segundaPersonaSingular = ['tú', 'te', 'ti', 'contigo', 'usted'];
        const terceraPersonaSingular = ['él', 'ella', 'lo', 'la', 'le', 'se', 'consigo'];
        const primeraPersonaPlural = ['nosotros', 'nosotras', 'nos'];
        const segundaPersonaPlural = ['vosotros', 'vosotras', 'os', 'ustedes'];
        const terceraPersonaPlural = ['ellos', 'ellas', 'los', 'las', 'les'];
        
        for (const palabra of palabras) {
            const palabraLower = palabra.toLowerCase();
            
            if (primeraPersonaSingular.includes(palabraLower)) {
                return { persona: 1, numero: 'singular' };
            }
            
            if (segundaPersonaSingular.includes(palabraLower)) {
                return { persona: 2, numero: 'singular' };
            }
            
            if (terceraPersonaSingular.includes(palabraLower)) {
                return { persona: 3, numero: 'singular' };
            }
            
            if (primeraPersonaPlural.includes(palabraLower)) {
                return { persona: 1, numero: 'plural' };
            }
            
            if (segundaPersonaPlural.includes(palabraLower)) {
                return { persona: 2, numero: 'plural' };
            }
            
            if (terceraPersonaPlural.includes(palabraLower)) {
                return { persona: 3, numero: 'plural' };
            }
        }
        
        // Por defecto, asumir tercera persona singular
        return { persona: 3, numero: 'singular' };
    },
    
    // Aplicar casos gramaticales (simplificado)
    aplicarCasos: function(palabras) {
        // En Alto Valyrio, los sustantivos cambian según su función en la oración
        // Esta es una implementación muy simplificada
        
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i].tipo === 'sustantivo') {
                // Si es objeto directo, aplicar caso acusativo (simplificado)
                if (i > 0 && palabras[i-1].tipo === 'verbo') {
                    palabras[i].valyrio = palabras[i].valyrio + 'o';
                }
                // Si es objeto indirecto, aplicar caso dativo (simplificado)
                else if (i > 0 && ['a', 'para'].includes(palabras[i-1].original.toLowerCase())) {
                    palabras[i].valyrio = palabras[i].valyrio + 'ot';
                }
                // Si indica posesión, aplicar caso genitivo (simplificado)
                else if (i > 0 && ['de'].includes(palabras[i-1].original.toLowerCase())) {
                    palabras[i].valyrio = palabras[i].valyrio + 'o';
                }
            }
        }
        
        return palabras;
    },
    
    // Manejar negaciones
    manejarNegacion: function(palabras) {
        // En Alto Valyrio, la negación se expresa con "daor" después del verbo
        
        for (let i = 0; i < palabras.length; i++) {
            if (['no', 'nunca', 'jamás', 'ni'].includes(palabras[i].original.toLowerCase())) {
                // Encontrar el verbo más cercano
                let indiceVerbo = -1;
                
                for (let j = i + 1; j < palabras.length; j++) {
                    if (palabras[j].tipo === 'verbo') {
                        indiceVerbo = j;
                        break;
                    }
                }
                
                if (indiceVerbo !== -1) {
                    // Añadir "daor" después del verbo
                    palabras.splice(indiceVerbo + 1, 0, {
                        original: 'no',
                        valyrio: 'daor',
                        pronunciacion: 'DAOR',
                        tipo: 'negacion'
                    });
                    
                    // Eliminar la negación original
                    palabras.splice(i, 1);
                    i--; // Ajustar el índice
                }
            }
        }
        
        return palabras;
    },
    
    // Manejar preguntas
    manejarPreguntas: function(palabras) {
        // Detectar si es una pregunta
        const esPregunta = palabras.some(p => 
            p.original.toLowerCase().match(/^(qué|quién|dónde|cuándo|cómo|por qué|cuánto)/) ||
            p.original.endsWith('?')
        );
        
        if (esPregunta) {
            // En Alto Valyrio, las preguntas mantienen el mismo orden pero con entonación diferente
            // Aquí simplemente marcamos que es una pregunta
            return {
                esPregunta: true,
                palabras: palabras
            };
        }
        
        return {
            esPregunta: false,
            palabras: palabras
        };
    }
};

// Exportar las reglas gramaticales
const reglasTraduccion = reglasGramaticales;
