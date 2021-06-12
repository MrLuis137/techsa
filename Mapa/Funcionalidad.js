var Datos = [{
    name: 'San_Jose',
    data: [84.2, 65.1, 90.4, 25.8, 91.8, 57.7, 41.3, 33.1, 43.2]

}, {
    name: 'Alajuela',
    data: [76.3, 55.7, 86.9, 18.1, 89.8, 39.5, 30.2, 24.2, 28.9]

}, {
    name: 'Cartago',
    data: [86.2, 62.1, 89.7, 21.1, 93.6, 41.3, 37.8, 27.1, 34.8]

}, {
    name: 'Heredia',
    data: [83.5, 67.2, 90.6, 29.3, 91.1, 55.6, 43.3, 36.9, 47.7]

}, {
    name: 'Guanacaste',
    data: [68.9, 48.8, 82.3, 12.7, 85.7, 40.6, 18, 21.7, 21.4]

}, {
    name: 'Puntarenas',
    data: [67.6, 45.9, 81.4, 12.7, 84.9, 37.9, 17.7, 19, 19.2]

}, {
    name: 'Limon',
    data: [68.2, 41, 80, 12, 85.3, 23.8, 18, 14.1, 16.3]

}];

var data = [
    ['cr-pu', 50],
    ['cr-sj', 100],
    ['cr-al', 100],
    ['cr-gu', 50],
    ['cr-li', 1],
    ['cr-ca', 100],
    ['cr-he', 100]
];

// Create the chart
Highcharts.mapChart('mapa-container', {
    chart: {
        map: 'countries/cr/cr-all',
        backgroundColor: '#9caea9'
    },

    title: {
        text: 'Zonas de cobertura a lo largo y ancho Costa Rica'
    },

    subtitle: {
        text: 'Cantidad mostrada por porcentaje'
    },

    mapNavigation: {
        enabled: true,
        enableDoubleClickZoomTo: true
    },

    colorAxis: {
        min: 100,
        type: 'logarithmic',
        minColor: '#95d5b2',
        maxColor: '#2d6a4f',
        lineWidth: 10
    },

    series: [{
        data: data,
        name: 'Cobertura',
        states: {
            hover: {
                color: '#0096c7'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
                fontSize: "12pt"
            }
        }
    }]
});