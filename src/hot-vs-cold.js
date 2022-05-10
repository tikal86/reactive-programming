import { of, interval, zip } from "../node_modules/rxjs/esm/es5/rxjs.min.js";
import { publish } from "../node_modules/rxjs/esm/es5/rxjs-operators.min.js";
import {chart1, chart2, chart3, chart4} from './linechart.js';

const interval$ = interval(100);
const range$ = of(2,4,6,8,2,4,6,8,2,4,6,8);
const numberRange$ = zip(interval$, range$, (interval, number) => {return {"index": interval, "number": number}});
const hotObservable$ = numberRange$.pipe(publish());
const chart1Data = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]];
let interval1 = setInterval(() => {
    chart1.updateSeries([{name: 'Observed values', data: chart1Data}]);
}, 50);
numberRange$
    .subscribe(
        data => {
            console.log(`appending data  ${data.number} to chart 1 on index: ${data.index}`);
            chart1Data[data.index] = [data.index, data.number];
        },
        error => console.error(error),
        () => {
            console.log('Completed chart 1 data');
            clearInterval(interval1);
        }
    );

const chart2Data = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]];
let interval2 = setInterval(() => {
    chart2.updateSeries([{name: 'Observed values', data: chart2Data}]);
}, 50);
setTimeout(() => {
    numberRange$
        .subscribe(
            data => {
                console.log(`appending data  ${data.number} to chart 2 on index: ${data.index}`);
                chart2Data[data.index] = [data.index, data.number];
            },
            error => console.error(error),
            () => {
                console.log('Completed chart 2 data');
                clearInterval(interval2);
            }
        );
}, 2000)

const chart3Data = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]];
let interval3 = setInterval(() => {
    chart3.updateSeries([{name: 'Observed values', data: chart3Data}]);
}, 50);
hotObservable$
    .subscribe(data => {
            console.log(`appending data  ${data.number} to chart 3 on index: ${data.index}`);
            chart3Data[data.index] = [data.index, data.number];
        },
        error => console.error(error),
        () => {
            console.log('Completed chart 3 data');
            clearInterval(interval3);
        }
    );

const chart4Data = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0], [11,0], [12,0]];
let interval4 = setInterval(() => {
    chart4.updateSeries([{name: 'Observed values', data: chart4Data}]);
}, 50);
setTimeout(() => {
    hotObservable$
        .subscribe(
            data => {
                console.log(`appending data  ${data.number} to chart 4 on index: ${data.index}`);
                chart4Data[data.index] = [data.index, data.number];
            },
            error => console.error(error),
            () => {
                console.log('Completed chart 4 data');
                clearInterval(interval4);
            }
        );
}, 3000)
hotObservable$.connect();