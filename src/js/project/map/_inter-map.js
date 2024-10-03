import * as ymaps3 from 'ymaps3';
import styles from './_styles.json';

let center = [37.65080999999997, 55.758412068983525];

async function initMap() {
    await ymaps3.ready;
    await ymaps3.import.registerCdn(
        'https://cdn.jsdelivr.net/npm/{package}',
        '@yandex/ymaps3-default-ui-theme@0.0.2',
        '@yandex/ymaps3-controls@0.0.1',
    );

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapControls, YMapScaleControl } = ymaps3;
    const { YMapDefaultMarker, YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-default-ui-theme');

    // создание карты
    const map = new YMap(
        document.querySelector('.contacts__map'),
        {
            location: {
                center,
                zoom: 15
            },
        }
    );

    map.addChild(new YMapDefaultFeaturesLayer({}))


    // Добавление масштаба
    const controls = new YMapControls({ position: 'bottom left' }, [new YMapScaleControl({})]);
    map.addChild(controls);

    // Добавление кнопок + и -
    map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));


    // Настройка маркера
    // Документация: https://yandex.ru/dev/jsapi30/doc/ru/ref/packages/markers/
    // Пример: https://yandex.ru/dev/jsapi30/doc/ru/examples/cases/create-default-marker
    const marker = new YMapDefaultMarker(
        {
            coordinates: center, 
            title: 'Подсосенский переулок, 5стр1',
            color: 'green',
            size: 'normal',
            iconName: 'fallback',
        },
    );

    map.addChild(marker);

    // Карта с кастомными стилями
    map.addChild(new YMapDefaultSchemeLayer({
        customization: styles
    }));

    // Карта с обычными стилями
    // map.addChild(new YMapDefaultSchemeLayer());
};

initMap();
