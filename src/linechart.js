// gekozen voor ApexCharts
// Andere opties: 
// https://www.chartjs.org/docs/latest/charts/line.html
// http://gionkunz.github.io/chartist-js/
// https://canvasjs.com/javascript-charts/
// https://canvasjs.com/html5-javascript-line-chart/

import ApexCharts from '../node_modules/apexcharts/dist/apexcharts.esm.js';

const chartHeight = 200;
const series = [{
    name: "Observed values",
    data: []
}];
const gridDefinition = {
    row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
    },
};
const categories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const chartDefinition = {
    height: chartHeight,
    type: 'line',
    zoom: {
      enabled: false
    }
};

const options = {
    series: series,
    chart: chartDefinition,
    dataLabels: {
        enabled: false
    },
    colors: ["#8B5CF6"],
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Cold observable, immediately subscribed',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: categories,
    }
};

const chart1 = new ApexCharts(document.querySelector("#chart1"), options);
chart1.id = 'chart-1';
chart1.group = 'social1';
chart1.animations = false;
chart1.render();

const options2 = {
    series: [{
        name: "Observed values",
        data: []
    }],
    chart: chartDefinition,
    dataLabels: {
        enabled: false
    },
    colors: ["#8B5CF6"],
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Cold observable, subscribed after 1 second',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: categories,
    }
};

const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.id = 'chart-2';
chart2.group = 'social2';
chart2.render();

const options3 = {
    series: [{
        name: "Observed values",
        data: []
    }],
    chart: chartDefinition,
    dataLabels: {
        enabled: false
    },
    colors: ["#8B5CF6"],
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Hot observable, immediately subscribed',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: categories,
    }
};

const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.id = 'chart-3';
chart3.group = 'social3';
chart3.render();

const options4 = {
    series: [{
        name: "Observed values",
        data: [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]]
    }],
    chart: chartDefinition,
    dataLabels: {
        enabled: false
    },
    colors: ["#8B5CF6"],
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Hot observable, subscribed after 0.5 second',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: categories,
    }
};

const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.id = 'chart-4';
chart4.group = 'hot2';
chart4.render();

export {
    chart1,
    chart2,
    chart3,
    chart4
}