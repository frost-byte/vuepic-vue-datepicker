export type DatePeriod = 'day' | 'week' | 'month' | 'quarter' | 'year';

export default interface DateExtentInterface {
  period: DatePeriod;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  hideWeekend?: boolean | false;
}

export class DateExtent implements DateExtentInterface {
  period: DatePeriod;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;
  hideWeekend?: boolean = false;

  constructor(
    period: DatePeriod,
    minDate: Date,
    maxDate: Date,
    startDate: Date,
    endDate: Date,
    hideWeekend: boolean = false
  ) {
    this.period = period;
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hideWeekend = hideWeekend;
  }
}

export type DateExtentArray = {
  [index in DatePeriod]: DateExtentInterface;
};

export const extents: Map<string, DateExtent> = new Map([
  [
    'day',
    new DateExtent(
      'day',
      new Date('2023-02-05'),
      new Date('2023-02-11'),
      new Date('2023-02-11'),
      new Date('2023-02-11'),
      true
    ),
  ],
  [
    'week',
    new DateExtent(
      'week',
      new Date('2019-06-16'),
      new Date('2023-02-04'),
      new Date('2023-01-29'),
      new Date('2023-02-04')
    ),
  ],
  [
    'month',
    new DateExtent(
      'month',
      new Date('2019-06-02'),
      new Date('2023-02-25'),
      new Date('2023-01-29'),
      new Date('2023-02-25')
    ),
  ],
]);
