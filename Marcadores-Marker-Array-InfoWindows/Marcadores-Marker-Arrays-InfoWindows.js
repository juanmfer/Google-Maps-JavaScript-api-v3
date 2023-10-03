// Juan Manuel Fernandez
// https://github.com/juanmfer/
// Marcadores Marker Arrays Info Windows
// Para que funcione se necesitara tener habilitado la API de GOOGLE MAPS JAVASCRIPT
// https://developers.google.com/maps?hl=es-419

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, // si el zoom es mayor, mas se acercara al marcador del center.
        center: { lat:-34.60286907260642, lng:-58.381370076086085 }, // center  es donde se centrara el mapa, puede ser una constante, variable, o directamente latitud y longitud.
    });

    let latlongArray = [ // array con nuestros puntos de interes
        { nombre: "Marcador Buenos Aires", lat:-34.60286907260642, lng:-58.381370076086085, pais:"Argentina" ,prov:"Buenos Aires"}, // objetos del arreglo
        { nombre: "Marcador Mendoza", lat: -32.91023272635606, lng: -68.69569720477247, pais:"Argentina" ,prov:"Mendoza"},
        { nombre: "Marcador Corrientes", lat: -28.617965510530862, lng: -58.28000923093033, pais:"Argentina" ,prov:"Corrientes"},
        { nombre: "Marcador Santa Fe", lat: -30.248337131013084, lng: -60.78359929344065, pais:"Argentina" ,prov:"Santa Fe"},
        { nombre: "Marcador Chubut", lat:-43.60375699786849, lng: -69.34895036813789, pais:"Argentina" ,prov:"Chubut"}
    ]

    for(let enarray of latlongArray) { // recorremos el array
        let marcador = new google.maps.Marker({ // Creamos el marcador en la posicion enarray
            position: { lat: enarray.lat, lng: enarray.lng }, // asignamos la posicion del marcador.
            map: map,  // donde mostraremos el marcador, el mapa esta creado en la constante map.
                       // se puede crear como solo "map,"  o  "map: map,", aqui el ejemplo.
            title: enarray.nombre, // asignamos el objeto nombre de nuestro array.
        });
        let contenidoInfoWin = '<div class="info-container">' +
        '<div><strong>Pais:</strong> ' + enarray.pais + '</div>' +
        '<div><strong>Provincia:</strong> ' + enarray.prov + '</div>' +
        '<div><strong>Coordenadas:</strong> ' + enarray.lat + ', ' + enarray.lng + '</div>' +
        '</div>';
        let infowindow = new google.maps.InfoWindow({
            content: contenidoInfoWin
        });
        marcador.addListener('click', function() {
            infowindow.open(map, marcador); // Abre el infoWindow en el mapa y en el marcador
        });



    }
}
window.initMap = initMap;