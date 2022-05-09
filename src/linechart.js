// gekozen voor ApexCharts
// Andere opties: 
// https://www.chartjs.org/docs/latest/charts/line.html
// http://gionkunz.github.io/chartist-js/
// https://canvasjs.com/javascript-charts/
// https://canvasjs.com/html5-javascript-line-chart/

import ApexCharts from '../node_modules/apexcharts/dist/apexcharts.esm.js';

const chartHeight = 200;
const series = [{
    name: "Desktops",
    data: []
}];
const gridDefinition = {
    row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
    },
};
const chartDefinition = {
    height: chartHeight,
    type: 'line',
    zoom: {
      enabled: false
    }
};
const annotations = {
    xaxis: [
      {
        x: 'Apr',
        borderColor: '#775DD0',
        label: {
          style: {
            color: '#7c3aed',
          },
          text: 'X-axis annotation - Apr'
        }
      },
      {
        x: 'Aug',
        borderColor: '#775DD0',
        label: {
          style: {
            color: '#7c3ced',
          },
          text: 'X-axis annotation - Aug'
        }
      },
      {
        x: 'Dec',
        borderColor: '#775DD0',
        label: {
          style: {
            color: '#7c3ced',
          },
          text: 'X-axis annotation - Dec'
        }
      }
    ]
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
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    annotations: annotations
};

const chart1 = new ApexCharts(document.querySelector("#chart1"), options);
chart1.id = 'chart-1';
chart1.group = 'social1',
chart1.render();

const options2 = {
    series: [{
        name: "Desktops",
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
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    annotations: annotations
};

const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.id = 'chart-2';
chart2.group = 'social2',
chart2.render();

const options3 = {
    series: [{
        name: "Desktops",
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
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    annotations: annotations
};

const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.id = 'chart-3';
chart3.group = 'social3',
chart3.render();

const options4 = {
    series: [{
        name: "Desktops",
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
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: gridDefinition,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    annotations: annotations
};

const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.id = 'chart-4';
chart4.group = 'social3',
    chart4.render();

export {
    chart1,
    chart2,
    chart3,
    chart4
}