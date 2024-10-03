import * as ymaps3 from 'ymaps3';
import styles from './_styles.json';

let center = [55.758412068983525, 37.65080999999997];

async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(
        document.querySelector('.contacts__map'),
        {
            location: {
                center,
                zoom: 15
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer({
        customization: styles
    }));
}

initMap();
