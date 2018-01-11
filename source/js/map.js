import styles from './mapstyle'
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY = 'AIzaSyBVE2BPmabi29Aw4w3gZmc4pZ8FPw5p5Fs';

const image = './../images/icons/map_marker.svg';

GoogleMapsLoader.load(function(google) {
    new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 55.706070, lng: 37.756561},
        mapTypeControl: false,
        disableDefaultUI: true,
        styles: styles.night,
    }),
        new google.maps.Marker({position: {lat: 55.706070, lng: 37.756561}, icon: image});
});