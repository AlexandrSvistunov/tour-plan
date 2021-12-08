// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
 
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            center: [55.74136, 37.67425],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,

            // Элементы управления

            controls: [
 
                'zoomControl', // Ползунок масштаба
                'rulerControl', // Линейка
                'typeSelector', // Переключатель слоев карты
                'fullscreenControl', // Полноэкранный режим
 
            ]
        });
 
        // Добавление метки
        var myPlacemark = new ymaps.Placemark([55.74136, 37.67425], {
            // Хинт показывается при наведении мышкой на иконку метки.
            hintContent: 'Hampton by Hilton Moscow',
            // Балун откроется при клике по метке.
            balloonContent: 'Bldg. 10, Rogozhski Val st., Moscow'
        });
 
        // После того как метка была создана, добавляем её на карту.
        myMap.geoObjects.add(myPlacemark);
 
    }