// Diccionario Español-Alto Valyrio
const diccionario = {
    // Pronombres personales
    "yo": { valyrio: "nyke", pronunciacion: "NIK-e" },
    "tú": { valyrio: "ao", pronunciacion: "AO" },
    "él": { valyrio: "ziry", pronunciacion: "ZIR-i" },
    "ella": { valyrio: "ziry", pronunciacion: "ZIR-i" },
    "nosotros": { valyrio: "īlva", pronunciacion: "IIL-va" },
    "vosotros": { valyrio: "jeme", pronunciacion: "JEM-e" },
    "ellos": { valyrio: "pōnta", pronunciacion: "POON-ta" },
    "ellas": { valyrio: "pōnta", pronunciacion: "POON-ta" },
    
    // Saludos y expresiones comunes
    "hola": { valyrio: "rytsas", pronunciacion: "RIT-sas" },
    "adiós": { valyrio: "geros ilas", pronunciacion: "GER-os IL-as" },
    "gracias": { valyrio: "kirimvose", pronunciacion: "kir-im-VOS-e" },
    "muchas gracias": { valyrio: "kirimvose valȳti", pronunciacion: "kir-im-VOS-e val-II-ti" },
    "por favor": { valyrio: "kostilus", pronunciacion: "kos-TIL-us" },
    "perdón": { valyrio: "gīmigon jemot sytilībagon", pronunciacion: "GIIM-ig-on JEM-ot sit-il-IIB-ag-on" },
    "lo siento": { valyrio: "yn gōntan", pronunciacion: "in GOON-tan" },
    "sí": { valyrio: "kessa", pronunciacion: "KES-sa" },
    "no": { valyrio: "daor", pronunciacion: "DAOR" },
    "buenos días": { valyrio: "sȳz bantis", pronunciacion: "SIIZ BAN-tis" },
    "buenas tardes": { valyrio: "sȳz jelmāzma", pronunciacion: "SIIZ jel-MAAZ-ma" },
    "buenas noches": { valyrio: "sȳz prūmia", pronunciacion: "SIIZ PRUUM-ia" },
    "hasta luego": { valyrio: "jemēle", pronunciacion: "jem-EEL-e" },
    "hasta pronto": { valyrio: "sȳrio jorrāelagon", pronunciacion: "SIIR-io jor-RAEL-ag-on" },
    "bienvenido": { valyrio: "jemot hae gaomagon", pronunciacion: "JEM-ot hae GAO-mag-on" },
    
    // Preguntas comunes
    "qué": { valyrio: "skoros", pronunciacion: "SKOR-os" },
    "quién": { valyrio: "skorys", pronunciacion: "SKOR-is" },
    "dónde": { valyrio: "skoriot", pronunciacion: "SKOR-iot" },
    "cuándo": { valyrio: "skorī", pronunciacion: "skor-II" },
    "cómo": { valyrio: "skorkydoso", pronunciacion: "skor-ki-DOS-o" },
    "por qué": { valyrio: "skoro syt", pronunciacion: "SKOR-o sit" },
    "cuánto": { valyrio: "skorion", pronunciacion: "SKOR-ion" },
    
    // Familia
    "padre": { valyrio: "kepa", pronunciacion: "KEP-a" },
    "madre": { valyrio: "muña", pronunciacion: "MUÑ-a" },
    "hijo": { valyrio: "trēsy", pronunciacion: "TREES-i" },
    "hija": { valyrio: "tala", pronunciacion: "TAL-a" },
    "hermano": { valyrio: "hāedar", pronunciacion: "HAE-dar" },
    "hermana": { valyrio: "hāedri", pronunciacion: "HAE-dri" },
    "esposo": { valyrio: "dārilaros", pronunciacion: "daar-IL-ar-os" },
    "esposa": { valyrio: "dārilaros", pronunciacion: "daar-IL-ar-os" },
    "niño": { valyrio: "taoba", pronunciacion: "TAO-ba" },
    "niña": { valyrio: "riña", pronunciacion: "RIÑ-a" },
    "hombre": { valyrio: "vala", pronunciacion: "VAL-a" },
    "mujer": { valyrio: "ābra", pronunciacion: "AAB-ra" },
    "familia": { valyrio: "lentor", pronunciacion: "LEN-tor" },
    
    // Números
    "uno": { valyrio: "mēre", pronunciacion: "MEER-e" },
    "dos": { valyrio: "lanta", pronunciacion: "LAN-ta" },
    "tres": { valyrio: "hāre", pronunciacion: "HAAR-e" },
    "cuatro": { valyrio: "izula", pronunciacion: "iz-UL-a" },
    "cinco": { valyrio: "tōma", pronunciacion: "TOOM-a" },
    "seis": { valyrio: "bȳre", pronunciacion: "BIIR-e" },
    "siete": { valyrio: "sīkuda", pronunciacion: "siik-UD-a" },
    "ocho": { valyrio: "jēnqa", pronunciacion: "JEENK-a" },
    "nueve": { valyrio: "vōre", pronunciacion: "VOOR-e" },
    "diez": { valyrio: "ampa", pronunciacion: "AMP-a" },
    "veinte": { valyrio: "lantēpsa", pronunciacion: "lan-TEEPS-a" },
    "treinta": { valyrio: "hārēpsa", pronunciacion: "haar-EEPS-a" },
    "cien": { valyrio: "gār", pronunciacion: "GAAR" },
    "mil": { valyrio: "pyrys", pronunciacion: "PIR-is" },
    
    // Tiempo
    "hoy": { valyrio: "tubis", pronunciacion: "TUB-is" },
    "mañana": { valyrio: "mōris", pronunciacion: "MOOR-is" },
    "ayer": { valyrio: "qringōntan", pronunciacion: "krin-GOON-tan" },
    "día": { valyrio: "jelmāzmo", pronunciacion: "jel-MAAZ-mo" },
    "noche": { valyrio: "prūmia", pronunciacion: "PRUUM-ia" },
    "semana": { valyrio: "jēda", pronunciacion: "JEED-a" },
    "mes": { valyrio: "jēntos", pronunciacion: "JEENT-os" },
    "año": { valyrio: "sōnar", pronunciacion: "SOON-ar" },
    "hora": { valyrio: "keliton", pronunciacion: "kel-IT-on" },
    
    // Clima y naturaleza
    "sol": { valyrio: "vēzos", pronunciacion: "VEEZ-os" },
    "luna": { valyrio: "ēlī", pronunciacion: "EEL-ii" },
    "estrella": { valyrio: "qēlos", pronunciacion: "KEEL-os" },
    "cielo": { valyrio: "sōna", pronunciacion: "SOON-a" },
    "agua": { valyrio: "jelmio", pronunciacion: "JEL-mio" },
    "fuego": { valyrio: "perzys", pronunciacion: "PER-zis" },
    "tierra": { valyrio: "dōron", pronunciacion: "DOOR-on" },
    "aire": { valyrio: "suvion", pronunciacion: "SUV-ion" },
    "lluvia": { valyrio: "qēlos", pronunciacion: "KEEL-os" },
    "nieve": { valyrio: "sōna", pronunciacion: "SOON-a" },
    "viento": { valyrio: "suvion", pronunciacion: "SUV-ion" },
    "montaña": { valyrio: "dōron egrio", pronunciacion: "DOOR-on EG-rio" },
    "río": { valyrio: "qēlbar", pronunciacion: "KEEL-bar" },
    "mar": { valyrio: "dōron naejon", pronunciacion: "DOOR-on NAE-jon" },
    "bosque": { valyrio: "qintir", pronunciacion: "KIN-tir" },
    
    // Comida y bebida
    "comida": { valyrio: "prūmio", pronunciacion: "PRUUM-io" },
    "bebida": { valyrio: "sōvion", pronunciacion: "SOOV-ion" },
    "agua": { valyrio: "jelmio", pronunciacion: "JEL-mio" },
    "pan": { valyrio: "havon", pronunciacion: "HAV-on" },
    "carne": { valyrio: "qogror", pronunciacion: "KOG-ror" },
    "pescado": { valyrio: "qrinqirose", pronunciacion: "krin-kir-OS-e" },
    "fruta": { valyrio: "jēdar", pronunciacion: "JEED-ar" },
    "verdura": { valyrio: "rōbir", pronunciacion: "ROOB-ir" },
    "vino": { valyrio: "sōvion", pronunciacion: "SOOV-ion" },
    "cerveza": { valyrio: "qrinqāzma", pronunciacion: "krin-KAAZ-ma" },
    
    // Lugares
    "casa": { valyrio: "lenton", pronunciacion: "LEN-ton" },
    "ciudad": { valyrio: "qrinuntys", pronunciacion: "krin-UN-tis" },
    "mercado": { valyrio: "jelmāzmiot", pronunciacion: "jel-MAAZ-miot" },
    "taberna": { valyrio: "qogrōpor", pronunciacion: "kog-ROOP-or" },
    "escuela": { valyrio: "āegenkon", pronunciacion: "ae-GENK-on" },
    "castillo": { valyrio: "tyvaros", pronunciacion: "tiv-AR-os" },
    "templo": { valyrio: "septor", pronunciacion: "SEP-tor" },
    "camino": { valyrio: "tubis", pronunciacion: "TUB-is" },
    "puente": { valyrio: "ēngos", pronunciacion: "EENG-os" },
    "muro": { valyrio: "dōros", pronunciacion: "DOOR-os" },
    
    // Direcciones
    "aquí": { valyrio: "ilō", pronunciacion: "il-OO" },
    "allí": { valyrio: "tolvio", pronunciacion: "TOL-vio" },
    "arriba": { valyrio: "jelmot", pronunciacion: "JEL-mot" },
    "abajo": { valyrio: "naejon", pronunciacion: "NAE-jon" },
    "izquierda": { valyrio: "jēlior", pronunciacion: "JEEL-ior" },
    "derecha": { valyrio: "dāez", pronunciacion: "DAEZ" },
    "norte": { valyrio: "jelmāzma", pronunciacion: "jel-MAAZ-ma" },
    "sur": { valyrio: "prūmior", pronunciacion: "PRUUM-ior" },
    "este": { valyrio: "vēzos", pronunciacion: "VEEZ-os" },
    "oeste": { valyrio: "ēlī", pronunciacion: "EEL-ii" },
    
    // Adjetivos comunes
    "bueno": { valyrio: "valyre", pronunciacion: "val-IR-e" },
    "malo": { valyrio: "qopsa", pronunciacion: "KOP-sa" },
    "grande": { valyrio: "zōbrie", pronunciacion: "ZOOB-rie" },
    "pequeño": { valyrio: "kēli", pronunciacion: "KEEL-i" },
    "alto": { valyrio: "jelmio", pronunciacion: "JEL-mio" },
    "bajo": { valyrio: "naejot", pronunciacion: "NAE-jot" },
    "fuerte": { valyrio: "qrīdrossa", pronunciacion: "kriid-ROS-sa" },
    "débil": { valyrio: "naejot", pronunciacion: "NAE-jot" },
    "rápido": { valyrio: "gevives", pronunciacion: "gev-IV-es" },
    "lento": { valyrio: "qrīdrughagon", pronunciacion: "kriid-rug-HAG-on" },
    "caliente": { valyrio: "āeksio", pronunciacion: "aek-SIO" },
    "frío": { valyrio: "sōnar", pronunciacion: "SOON-ar" },
    "nuevo": { valyrio: "nēdenka", pronunciacion: "need-ENK-a" },
    "viejo": { valyrio: "qrīdrughagon", pronunciacion: "kriid-rug-HAG-on" },
    "feliz": { valyrio: "sȳz", pronunciacion: "SIIZ" },
    "triste": { valyrio: "qopsa", pronunciacion: "KOP-sa" },
    "rico": { valyrio: "āeksio", pronunciacion: "aek-SIO" },
    "pobre": { valyrio: "naejot", pronunciacion: "NAE-jot" },
    "joven": { valyrio: "riña", pronunciacion: "RIÑ-a" },
    "viejo": { valyrio: "qrīdrughagon", pronunciacion: "kriid-rug-HAG-on" },
    
    // Colores
    "rojo": { valyrio: "āeksion", pronunciacion: "aek-SION" },
    "azul": { valyrio: "jelmion", pronunciacion: "JEL-mion" },
    "verde": { valyrio: "dōrenkon", pronunciacion: "door-ENK-on" },
    "amarillo": { valyrio: "qēlossion", pronunciacion: "keel-OS-sion" },
    "negro": { valyrio: "zōbrie", pronunciacion: "ZOOB-rie" },
    "blanco": { valyrio: "timpa", pronunciacion: "TIM-pa" },
    "gris": { valyrio: "qrīdrogon", pronunciacion: "kriid-ROG-on" },
    "marrón": { valyrio: "dōron", pronunciacion: "DOOR-on" },
    "púrpura": { valyrio: "āegenkon", pronunciacion: "ae-GENK-on" },
    "naranja": { valyrio: "qrinuntysion", pronunciacion: "krin-un-TIS-ion" },
    
    // Verbos comunes
    "ser": { valyrio: "sagon", pronunciacion: "SAG-on" },
    "estar": { valyrio: "sagon", pronunciacion: "SAG-on" },
    "tener": { valyrio: "emagon", pronunciacion: "EM-ag-on" },
    "hacer": { valyrio: "rughagon", pronunciacion: "rug-HAG-on" },
    "ir": { valyrio: "jagon", pronunciacion: "JAG-on" },
    "venir": { valyrio: "māzigon", pronunciacion: "MAAZ-ig-on" },
    "ver": { valyrio: "udiliot", pronunciacion: "ud-IL-iot" },
    "mirar": { valyrio: "udiliot", pronunciacion: "ud-IL-iot" },
    "oír": { valyrio: "gīmigon", pronunciacion: "GIIM-ig-on" },
    "escuchar": { valyrio: "gīmigon", pronunciacion: "GIIM-ig-on" },
    "hablar": { valyrio: "ȳdragon", pronunciacion: "IID-rag-on" },
    "decir": { valyrio: "ȳdragon", pronunciacion: "IID-rag-on" },
    "comer": { valyrio: "pryjagon", pronunciacion: "pri-JAG-on" },
    "beber": { valyrio: "sōvegon", pronunciacion: "SOOV-eg-on" },
    "dormir": { valyrio: "prūmagon", pronunciacion: "PRUUM-ag-on" },
    "despertar": { valyrio: "glaesagon", pronunciacion: "GLAE-sag-on" },
    "caminar": { valyrio: "ilagon", pronunciacion: "IL-ag-on" },
    "correr": { valyrio: "gevives ilagon", pronunciacion: "gev-IV-es IL-ag-on" },
    "saltar": { valyrio: "jelmagon", pronunciacion: "JEL-mag-on" },
    "nadar": { valyrio: "jelmiot ilagon", pronunciacion: "JEL-miot IL-ag-on" },
    "volar": { valyrio: "sōvegon", pronunciacion: "SOOV-eg-on" },
    "dar": { valyrio: "tepagon", pronunciacion: "TEP-ag-on" },
    "tomar": { valyrio: "pryjagon", pronunciacion: "pri-JAG-on" },
    "comprar": { valyrio: "jelmāzmagho", pronunciacion: "jel-MAAZ-mag-ho" },
    "vender": { valyrio: "jelmāzmagho", pronunciacion: "jel-MAAZ-mag-ho" },
    "abrir": { valyrio: "nektogon", pronunciacion: "NEK-tog-on" },
    "cerrar": { valyrio: "nektogon daor", pronunciacion: "NEK-tog-on DAOR" },
    "comenzar": { valyrio: "jemagon", pronunciacion: "JEM-ag-on" },
    "terminar": { valyrio: "gaomagon", pronunciacion: "GAO-mag-on" },
    "vivir": { valyrio: "glaesagon", pronunciacion: "GLAE-sag-on" },
    "morir": { valyrio: "morghon", pronunciacion: "MOR-gon" },
    "matar": { valyrio: "morghuljagon", pronunciacion: "mor-gul-JAG-on" },
    "luchar": { valyrio: "qringontan", pronunciacion: "krin-GON-tan" },
    "ganar": { valyrio: "jorrāelagon", pronunciacion: "jor-RAEL-ag-on" },
    "perder": { valyrio: "nektogon", pronunciacion: "NEK-tog-on" },
    "amar": { valyrio: "jorrāelagon", pronunciacion: "jor-RAEL-ag-on" },
    "odiar": { valyrio: "qrinuntagon", pronunciacion: "krin-UN-tag-on" },
    "pensar": { valyrio: "pendagon", pronunciacion: "PEN-dag-on" },
    "saber": { valyrio: "gīmigon", pronunciacion: "GIIM-ig-on" },
    "aprender": { valyrio: "iderēbagon", pronunciacion: "id-er-EEB-ag-on" },
    "enseñar": { valyrio: "iderēbagon", pronunciacion: "id-er-EEB-ag-on" },
    "leer": { valyrio: "qrīdrughagon", pronunciacion: "kriid-rug-HAG-on" },
    "escribir": { valyrio: "rughagon", pronunciacion: "rug-HAG-on" },
    
    // Frases célebres
    "todos los hombres deben morir": { valyrio: "valar morghulis", pronunciacion: "VAL-ar mor-GUL-is" },
    "todos los hombres deben servir": { valyrio: "valar dohaeris", pronunciacion: "VAL-ar do-HAE-ris" },
    "la noche es oscura y llena de terrores": { valyrio: "bantis zōbrie issa se ossȳngnoti lēdys", pronunciacion: "BAN-tis ZOOB-rie IS-sa se os-SIING-not-i LEED-is" },
    "un dragón no es un esclavo": { valyrio: "zaldrīzes buzdari iksos daor", pronunciacion: "zal-DRIIZ-es buz-DAR-i IK-sos DAOR" },
    "fuego de dragón": { valyrio: "dracarys", pronunciacion: "dra-KAR-is" },
    "te amo": { valyrio: "avy jorrāelan", pronunciacion: "AV-i jor-RAEL-an" },
    "luna de mi vida": { valyrio: "ñuho glaeso hūrus", pronunciacion: "ÑU-ho GLAE-so HUUR-us" },
    "mi sol y estrellas": { valyrio: "shekh ma shieraki anni", pronunciacion: "shekh ma shier-AK-i AN-ni" },
    "no sabes nada": { valyrio: "daoruni gīmī", pronunciacion: "daor-UN-i GIIM-ii" }
};

// Palabras de conexión y artículos
const palabrasConexion = {
    "y": { valyrio: "se", pronunciacion: "se" },
    "o": { valyrio: "yn", pronunciacion: "in" },
    "pero": { valyrio: "yn", pronunciacion: "in" },
    "porque": { valyrio: "skoro syt", pronunciacion: "SKOR-o sit" },
    "si": { valyrio: "hae", pronunciacion: "hae" },
    "cuando": { valyrio: "skorī", pronunciacion: "skor-II" },
    "como": { valyrio: "hae", pronunciacion: "hae" },
    "que": { valyrio: "bisa", pronunciacion: "BIS-a" },
    "de": { valyrio: "hen", pronunciacion: "hen" },
    "en": { valyrio: "lī", pronunciacion: "lii" },
    "con": { valyrio: "lȳ", pronunciacion: "lii" },
    "por": { valyrio: "syt", pronunciacion: "sit" },
    "para": { valyrio: "naejot", pronunciacion: "NAE-jot" },
    "a": { valyrio: "va", pronunciacion: "va" },
    "desde": { valyrio: "hen", pronunciacion: "hen" },
    "hasta": { valyrio: "naejot", pronunciacion: "NAE-jot" },
    "entre": { valyrio: "mijegon", pronunciacion: "MIJ-eg-on" },
    "sin": { valyrio: "daor", pronunciacion: "DAOR" },
    "el": { valyrio: "", pronunciacion: "" },
    "la": { valyrio: "", pronunciacion: "" },
    "los": { valyrio: "", pronunciacion: "" },
    "las": { valyrio: "", pronunciacion: "" },
    "un": { valyrio: "", pronunciacion: "" },
    "una": { valyrio: "", pronunciacion: "" },
    "unos": { valyrio: "", pronunciacion: "" },
    "unas": { valyrio: "", pronunciacion: "" }
};

// Exportar el diccionario para su uso en el traductor
const diccionarioCompleto = {
    palabras: diccionario,
    conexion: palabrasConexion
};
