import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Range } from './multi-range-input.model';

@Component({
  selector: 'app-multi-range-input',
  templateUrl: './multi-range-input.component.html',
  styleUrls: ['./multi-range-input.component.css'],
})
export class MultiRangeInputComponent implements OnInit, OnChanges {
  @Input()
  minValue = 0;
  @Input()
  maxValue = 100;

  @Input()
  step = 1;

  @Input()
  ranges: Range[] = [];

  @Input()
  valueFormatter: (value: number) => string = (value) => `${value}`;

  @Input()
  selectedRange: Range = null;

  @Input()
  isReadOnly = false;

  @Output()
  selectedRangeChange: EventEmitter<Range> = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
  }

  ngOnInit(): void {}

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
  }

  getOverlappingRanges(range: Range): Range[] {
    return this.ranges.filter(
      (r) => r !== range && r.start < range.end && r.end > range.start
    );
  }

  selectRange(range: Range) {
    this.selectedRange = range;
    this.selectedRangeChange.emit(this.selectedRange);
  }

  getLeftPercent(range: Range) {
    return (
      (100 / (this.maxValue - this.minValue)) * (range.start - this.minValue)
    );
  }
  getRightPercent(range: Range) {
    return (
      (100 / (this.maxValue - this.minValue)) * (range.end - this.minValue)
    );
  }
}
