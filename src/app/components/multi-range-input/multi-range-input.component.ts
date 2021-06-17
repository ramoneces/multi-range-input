import { Component, OnInit } from '@angular/core';

export interface Range {
  start: number;
  end: number;
  leftPercent?: number;
  rightPercent?: number;
}

@Component({
  selector: 'app-multi-range-input',
  templateUrl: './multi-range-input.component.html',
  styleUrls: ['./multi-range-input.component.css'],
})
export class MultiRangeInputComponent implements OnInit {
  maxRange: Range = { start: 0, end: 100 };

  step = 10;

  ranges: Range[] = [
    { start: 10, end: 50 },
    { start: 60, end: 90 },
  ];

  selectedRange: Range = null;

  constructor() {}

  ngOnInit(): void {
    this.ranges.forEach((range) => {
      this.startOnInput(null, range);
      this.endOnInput(null, range);
    });
  }

  formatValue(value: number): string {
    return `${value}`;
  }

  startOnInput(event: any, range: Range) {
    range.start = Math.min(range.start, range.end - this.step);
    range.leftPercent =
      (100 / (this.maxRange.end - this.maxRange.start)) * range.start -
      (100 / (this.maxRange.end - this.maxRange.start)) * this.maxRange.start;
  }

  endOnInput(event: any, range: Range) {
    range.end = Math.max(range.end, range.start + this.step);
    range.rightPercent =
      (100 / (this.maxRange.end - this.maxRange.start)) * range.end -
      (100 / (this.maxRange.end - this.maxRange.start)) * this.maxRange.start;
  }
}
