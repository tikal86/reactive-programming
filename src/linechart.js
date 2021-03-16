// gekozen voor ApexCharts
// Andere opties: 
// https://www.chartjs.org/docs/latest/charts/line.html
// http://gionkunz.github.io/chartist-js/
// https://canvasjs.com/javascript-charts/
// https://canvasjs.com/html5-javascript-line-chart/

import ApexCharts from 'apexcharts';

var options = {
    series: [{
      name: "Desktops",
      data: []
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
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
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  annotations: {
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
  }
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
  chart1.render();
  
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
  chart2.render();

  var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
  chart3.render();

  module.exports = {
    chart1: chart1,
    chart2: chart2,
    chart3: chart3
  }