import { of, interval, zip } from "../node_modules/rxjs/esm/es5/rxjs.min.js";
import { map, delay, filter, skip, publish } from "../node_modules/rxjs/esm/es5/rxjs-operators.min.js";
import {chart1, chart2, chart3} from './linechart.js';

const interval$ = interval(100);
const range$ = of(2,4,6,8,2,4,6,8,2,4,6,8);
const hotObservableSource = () => {

}
const delayedrange$ = zip(interval$, range$, (interval, number) => number);
delayedrange$.subscribe(data => {
    console.log(`appending data to chart 1: ${data}`);
    chart1.appendData([{
        data: [data]
      }]);
});
chart1.showSeries('Desktops');

console.log(`type of chart: ${chart1}`);
delayedrange$
    .pipe(delay(1000))
    .subscribe(data => {
        console.log(`appending data to chart 2: ${data}`);
        chart2.appendData([{
            data: [data]
        }]);
    });
chart2.showSeries('Desktops');

delayedrange$
    .pipe(delay(2000))
    .subscribe(data => {
        console.log(`appending data to chart 3: ${data}`);
        chart3.appendData([{
            data: [data]
        }]);
    });
chart3.showSeries('Desktops');
