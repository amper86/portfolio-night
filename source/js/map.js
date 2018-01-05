export default function initMap() {
  var kuzminki = {lat: 55.706070, lng: 37.756561};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: kuzminki,
    mapTypeControl: false,
    disableDefaultUI: true,
  });
  var image = require('../images/icons/map_marker.svg');
  var marker = new google.maps.Marker({position: kuzminki, map: map, icon: image});

  map.setOptions({styles: styles.night});

}

var styles = {
  default: null,
  night: [
    {
      elementType: 'geometry',
      stylers: [{color: '#f5f5f5'}],
    },
    {
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{color: '#f5f5f5'}],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#bdbdbd'}],
    },
    {
      featureType: 'man_made',
      elementType: 'geometry.stroke',
      stylers: [{color: '#bdbdbd'}],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#ffffff'}],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#dadada'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#5368a9'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}],
    },
  ],
};
//todo: после добавления карт возникла проблема с вебпаком!!! автоматически не перезагружается и ругается на гугл
// global.initMap = initMap;
//window.initMap = initMap();

/*window.initMap = function () {
  var uluru = { lat: 46.4707519, lng: 47.91051 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru,
  });

  //var image = 'assets/images/svg/map_marker.svg';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    //icon: image
  });
};*/
