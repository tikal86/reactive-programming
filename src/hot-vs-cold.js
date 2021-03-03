import { range, interval, zip } from "rxjs";
import { map, delay, filter } from "rxjs/operators";
import {chart} from './linechart';

const interval$ = interval(2000);
const range$ = range(2, 18);
const delayedrange$ = zip(interval$, range$, (interval, number) => number);
const series = [];
delayedrange$.subscribe(data => {
    console.log(`appending data: ${data}`);
    chart.appendData([{
        data: [data]
      }]);
});
chart.showSeries('Desktops');
console.log(`type of chart: ${chart}`);
