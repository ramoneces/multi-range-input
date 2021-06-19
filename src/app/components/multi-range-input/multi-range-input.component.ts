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
      this.applyRangeStartChange(range);
      this.applyRangeEndChange(range);
    });
  }

  formatValue(value: number): string {
    return `${value}`;
  }

  validateRangeStart(range: Range) {
    const overlappingRanges = this.getOverlappingRanges(range);
    if (overlappingRanges.length > 0) {
      range.start = Math.max(
        range.start,
        Math.max.apply(
          this,
          overlappingRanges.map((r) => r.end)
        )
      );
    }
    range.start = Math.min(range.start, range.end - this.step);
    this.applyRangeStartChange(range);
  }
  applyRangeStartChange(range: Range) {
    range.leftPercent =
      (100 / (this.maxRange.end - this.maxRange.start)) * range.start -
      (100 / (this.maxRange.end - this.maxRange.start)) * this.maxRange.start;
  }

  validateRangeEnd(range: Range) {
    const overlappingRanges = this.getOverlappingRanges(range);
    if (overlappingRanges.length > 0) {
      range.end = Math.min(
        range.end,
        Math.min.apply(
          this,
          overlappingRanges.map((r) => r.start)
        )
      );
    }
    range.end = Math.max(range.end, range.start + this.step);
    this.applyRangeEndChange(range);
  }
  applyRangeEndChange(range: Range) {
    range.rightPercent =
      (100 / (this.maxRange.end - this.maxRange.start)) * range.end -
      (100 / (this.maxRange.end - this.maxRange.start)) * this.maxRange.start;
  }
  getOverlappingRanges(range: Range): Range[] {
    return this.ranges.filter(
      (r) => r !== range && r.start < range.end && r.end > range.start
    );
  }
}
