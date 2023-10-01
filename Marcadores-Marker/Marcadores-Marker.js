// Juan Manuel Fernandez
// https://github.com/juanmfer/
// Para que funcione se necesitara tener habilitado la API de GOOGLE MAPS JAVASCRIPT
// https://developers.google.com/maps?hl=es-419

function initMap() {
    // Marcadores como constantes
    const marcadorbsas = { lat: -34.60286907260642, lng: -58.381370076086085};// Marcador Buenos Aires
    const marcadormza = { lat: -32.91023272635606, lng: -68.69569720477247};  // Marcador Mendoza
    const marcadorctes = { lat: -28.617965510530862, lng: -58.28000923093033};// Marcador Corrientes

    // la constante map, es la que crea el mapa, y lo ubica en el elemento map, de la pagina html.
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4, // si el zoom es mayor, mas se acercara al marcador del center.
      center: marcadorbsas, // center  es donde se centrara el mapa, puede ser una constante, variable, o directamente latitud y longitud.
      // center: { lat: -34.60286907260642, lng: -58.381370076086085},
    });

    new google.maps.Marker({ // Creamos el marcador
      position: marcadorbsas, // asignamos la posicion del marcador, sera nuestra constante.
      map: map,  // donde mostraremos el marcador, el mapa esta creado en la constante map.
                 // se puede crear como solo "map,"  o  "map: map,", aqui el ejemplo.
      title: "Marcador en Buenos Aires - Argentina",
    });
    // Seguimos creando marcadores, ahora con otras latitudes y longitudes
    new google.maps.Marker({
        position: marcadormza,
        map,
        title: "Marcador en Mendoza - Argentina",
    });
    new google.maps.Marker({
        position: marcadorctes,
        map,
        title: "Marcador en Corrientes - Argentina",
    });
}
window.initMap = initMap;