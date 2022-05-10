import { of, interval, zip } from "../node_modules/rxjs/esm/es5/rxjs.min.js";
import { publish } from "../node_modules/rxjs/esm/es5/rxjs-operators.min.js";
import {chart1, chart2, chart3, chart4} from './linechart.js';

const interval$ = interval(100);
const range$ = of(2,4,6,8,2,4,6,8,2,4,6,8);
const delayedRange$ = zip(interval$, range$, (interval, number) => number);
const hotObservable$ = delayedRange$.pipe(publish());
delayedRange$
    .subscribe(
        data => {
        console.log(`appending data to chart 1: ${data}`);
        chart1.appendData([{
            data: [data]
          }]);
        },
        error => console.error(error),
        () => console.log('Completed chart 1 data')
    );
chart1.showSeries('Observed values');

console.log(`type of chart: ${chart1}`);
setTimeout(() => {
    delayedRange$
        .subscribe(
            data => {
                console.log(`appending data to chart 2: ${data}`);
                chart2.appendData([{
                    data: [data]
                }]);
            },
            error => console.error(error),
            () => console.log('Completed chart 2 data')
        );
}, 1000)
chart2.showSeries('Observed values');

hotObservable$
    .subscribe(data => {
        console.log(`appending data to chart 3: ${data}`);
        chart3.appendData([{
            data: [data]
        }]);
        },
        error => console.error(error),
        () => console.log('Completed chart 3 data')
    );
chart3.showSeries('Observed values');

setTimeout(() => {
    hotObservable$
        .subscribe(data => {
                console.log(`appending data to chart 4: ${data}`);
                chart4.appendData([{
                    data: [data]
                }]);
            },
            error => console.error(error),
            () => console.log('Completed chart 4 data')
        );
}, 500)
chart4.showSeries('Observed values');
hotObservable$.connect();