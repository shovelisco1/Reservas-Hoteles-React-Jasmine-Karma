const hoteles = [
    {
        id: "hotel1",
        nombre: "Hotel Bidasoa",
        region: "Metropolitana",
        calificacion: 5,
        precio: 144000,
        direccion: "Av. Vitacura 4873, Vitacura, Santiago",
        descripcion: "Hotel de lujo luminoso y moderno, decorado con muebles de madera y servicio a la habitación, ubicado cerca del Museo Nacional de Bellas Artes.",
        imagen: [
            "/img/bidasoa2.jpg",
            "/img/bidasoa3.jpg"
        ],
    },
    {
        id: "hotel2",
        nombre: "Hillside Hotel",
        region: "Metropolitana",
        calificacion: 4,
        precio: 110000,
        direccion: "Camino a Farellones 15201, Lo Barnechea, Santiago",
        descripcion: "Hotel boutique en la precordillera con vistas panorámicas a Santiago y acceso a zonas de montaña.",
        imagen: [
            "/img/hillside1.jpg",
            "/img/hillside2.jpg",
            "/img/hillside3.jpg"
        ],
    },
    {
        id: "hotel3",
        nombre: "Carmenere Hotel",
        region: "Metropolitana",
        calificacion: 5,
        precio: 94000,
        direccion: "María Luisa Santander 0292, Providencia, Santiago",
        descripcion: "Hotel eco-boutique en Barrio Italia, ideal para quienes buscan tranquilidad, diseño y cercanía a Costanera Center.",
        imagen: [
            "/img/carmenere1.jpg",
            "/img/carmenere2.jpg",
            "/img/carmenere3.jpg"
        ],
    },
    {
        id: "hotel4",
        nombre: "Hotel Foresta",
        region: "Metropolitana",
        calificacion: 3,
        precio: 77978,
        direccion: "Victoria Subercaseaux 353, Santiago Centro",
        descripcion: "Clásico hotel familiar en Barrio Lastarria, cerca del Cerro Santa Lucía y del Museo de Bellas Artes.",
        imagen: [
            "/img/foresta1.jpg",
            "/img/foresta2.jpg",
            "/img/foresta3.jpg"
        ],
    },
    {
        id: "hotel5",
        nombre: "Hotel Bonaparte Boutique",
        region: "Metropolitana",
        calificacion: 4,
        precio: 94613,
        direccion: "Mar del Plata 2171, Providencia, Santiago",
        descripcion: "Boutique romántico en Providencia, con piscina y terraza, a pasos de Costanera Center y zonas bohemias.",
        imagen: [
            "/img/bonaparte1.jpg",
            "/img/bonaparte2.jpg",
            "/img/bonaparte3.jpg"
        ],
    },
    {
        id: "hotel6",
        nombre: "Hotel ibis Santiago Providencia",
        region: "Metropolitana",
        calificacion: 3,
        precio: 71222,
        direccion: "Avenida Providencia 1187, Providencia, Santiago",
        descripcion: "Hotel funcional a metros del metro Manuel Montt, ideal para viajeros urbanos que buscan comodidad y buena conectividad.",
        imagen: [
            "/img/ibis1.jpg",
            "/img/ibis2.jpg",
            "/img/ibis3.jpg"
        ],
    },
    {
        id: "hotel7",
        nombre: "Hotel Luciano K",
        region: "Metropolitana",
        calificacion: 4,
        precio: 149255,
        direccion: "Merced 84, Barrio Lastarria, Santiago",
        descripcion: "Boutique con estilo Art Déco en Lastarria, con terraza y piscina, ubicado cerca del Parque Forestal y plazas culturales.",
        imagen: [
            "/img/luciano1.jpg",
            "/img/luciano2.jpg",
            "/img/luciano3.jpg"
        ],
    },
    {
        id: "hotel8",
        nombre: "Hotel Noi Vitacura",
        region: "Metropolitana",
        calificacion: 5,
        precio: 265124,
        direccion: "Av. Nueva Costanera 3736, Vitacura, Santiago",
        descripcion: "Hotel boutique moderno en Alonso de Córdova, con spa, terraza y acceso cercano al Parque Bicentenario.",
        imagen: [
            "/img/noi1.jpg",
            "/img/noi2.jpg",
            "/img/noi3.jpg"
        ],
    },
    {
        id: "hotel9",
        nombre: "Hotel Pullman Santiago Vitacura",
        region: "Metropolitana",
        calificacion: 5,
        precio: 104037,
        direccion: "Av Vitacura 3201, Vitacura, Santiago",
        descripcion: "Hotel de lujo con gimnasio y piscina, ubicado en Vitacura, cerca de Parque Arauco y Costanera Center.",
        imagen: [
            "/img/pullman1.jpg",
            "/img/pullman2.jpg",
            "/img/pullman3.jpg"
        ],
    },
    {
        id: "hotel10",
        nombre: "Hotel Plaza San Francisco",
        region: "Metropolitana",
        calificacion: 5,
        precio: 124757,
        direccion: "Alameda 999, Santiago Centro",
        descripcion: "Hotel elegante frente a Plaza San Francisco, con arquitectura clásica y excelente ubicación en el centro.",
        imagen: [
            "/img/francisco1.jpg",
            "/img/francisco2.jpg",
            "/img/francisco3.jpg"
        ],
    },
    {
        id: "hotel11",
        nombre: "Hotel Sheraton Miramar",
        region: "Valparaíso",
        calificacion: 5,
        precio: 322010,
        direccion: "Av. La Marina, Viña del Mar, Valparaíso",
        descripcion: "Gran hotel frente al mar en Viña del Mar, a pasos del Reloj de Flores, con piscina y amplio centro de convenciones.",
        imagen: [
            "/img/sheraton1.jpg",
            "/img/sheraton2.jpg",
            "/img/sheraton3.jpg"
        ],
    },
    {
        id: "hotel12",
        nombre: "Hotel Casamata Poshtel",
        region: "Valparaíso",
        calificacion: 5,
        precio: 87878,
        direccion: "Valparaíso centro histórico",
        descripcion: "Poshtel moderno en el centro patrimonial de Valparaíso, con ambiente juvenil y buena conectividad a cerros y paseo marítimo.",
        imagen: [
            "/img/casamata1.jpg",
            "/img/casamata2.jpg",
            "/img/casamata3.jpg"
        ],
    },
    {
        id: "hotel13",
        nombre: "Hotel Pullman Viña del Mar",
        region: "Valparaíso",
        calificacion: 4,
        precio: 114000,
        direccion: "Av. San Martín, Viña del Mar",
        descripcion: "Hotel moderno con vista al mar en Viña del Mar, cerca del borde costero y centros comerciales.",
        imagen: [
            "/img/pullmanvina1.jpg",
            "/img/pullmanvina2.jpg",
            "/img/pullmanvina3.jpg"
        ],
    },
    {
        id: "hotel14",
        nombre: "Hotel La Blanca",
        region: "Valparaíso",
        calificacion: 4,
        precio: 85000,
        direccion: "Viña del Mar centro",
        descripcion: "Acogedor hotel en Viña del Mar, cerca del centro y playas, con trato familiar y buena relación precio-calidad.",
        imagen: [
            "/img/blanca1.jpg",
            "/img/blanca2.jpg"   
        ],
    },
    {
        id: "hotel15",
        nombre: "Columba Hotel",
        region: "Valparaíso",
        calificacion: 3,
        precio: 31000,
        direccion: "Valparaíso centro económico",
        descripcion: "Opción económica en Valparaíso, cercana a ascensores y sitios históricos populares.",
        imagen: [
            "/img/columba1.jpg",
            "/img/columba2.jpg",
            "/img/columba3.jpg"
        ],
    },
    {
        id: "hotel16",
        nombre: "Hotel Vista Hermosa",
        region: "Valparaíso",
        calificacion: 3,
        precio: 44000,
        direccion: "Valparaíso vistas panorámicas",
        descripcion: "Hotel modesto con vistas agradables de Valparaíso, ideal para estancia sencilla y céntrica.",
        imagen: [
            "/img/hermosa1.jpg",
            "/img/hermosa2.jpg"
        ],
    },
    {
        id: "hotel17",
        nombre: "Hotel Valle Hermoso",
        region: "Valparaíso",
        calificacion: 4,
        precio: 21000,
        direccion: "Valparaíso valle interior",
        descripcion: "Hotel sencillo y confortable ubicado en zona tranquila de Valparaíso, ideal para estancias cortas.",
        imagen: [
            "/img/hermoso1.jpg",
            "/img/hermoso2.jpg"
        ],
    },
    {
        id: "hotel18",
        nombre: "Hotel CasaMoro",
        region: "Valparaíso",
        calificacion: 5,
        precio: 65000,
        direccion: "Valparaíso casco antiguo",
        descripcion: "Hotel con carácter patrimonial en el casco histórico, con vistas marítimas y encanto arquitectónico.",
        imagen: [
            "/img/casamoro1.jpg",
            "/img/casamoro2.jpg",
            "/img/casamoro3.jpg"
        ],
    },
]

export default hoteles;