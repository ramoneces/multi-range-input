import { Component } from '@angular/core';
import { Range } from './components/multi-range-input/multi-range-input.model';

interface MyRange extends Range {
  myData: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multi-range-input';

  //#region demo 1
  demo1Ranges: MyRange[] = [
    { start: 0, end: 30, myData: 'data 1' },
    { start: 40, end: 60, myData: 'data 2' },
  ];

  demo1AddRange() {
    const lastRange = this.demo1Ranges[this.demo1Ranges.length - 1];
    if (lastRange.end < 100) {
      this.demo1Ranges.push({
        start: lastRange.end,
        end: 100,
        myData: 'new data',
      });
    }
  }

  //#endregion

  //#region demo 2
  demo2Ranges: Range[] = [
    {
      start: new Date(2021, 0, 1).getTime(),
      end: new Date(2021, 1, 1).getTime(),
    },
    {
      start: new Date(2021, 7, 1).getTime(),
      end: new Date(2021, 8, 1).getTime(),
    },
  ];
  demo2MinValue = new Date(2021, 0, 1).getTime();
  demo2MaxValue = new Date(2022, 0, 1).getTime();
  demo2Step = 1000 * 60 * 60 * 24;
  //#endregion

  //#region demo 3
  demo3Ranges: Range[] = [
    {
      start: new Date(2021, 7, 1, 6, 0, 0).getTime(),
      end: new Date(2021, 7, 8, 6, 0, 0).getTime(),
    },
    {
      start: new Date(2021, 7, 17, 6, 0, 0).getTime(),
      end: new Date(2021, 7, 18, 6, 0, 0).getTime(),
    },
  ];
  demo3MinValue = new Date(2021, 7, 1, 6, 0, 0).getTime();
  demo3MaxValue = new Date(2021, 8, 1, 6, 0, 0).getTime();
  demo3Step = 1000 * 60 * 60 * 8;
  //#endregion

  dateValueFormatter(value: number): string {
    return new Date(value).toLocaleDateString();
  }

  dateTimeValueFormatter(value: number): string {
    return new Date(value).toLocaleString();
  }
}
