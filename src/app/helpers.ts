import {
  Observable,
  concat,
  delay,
  delayWhen,
  finalize,
  interval,
  map,
  startWith,
  take,
  tap,
  timer,
} from 'rxjs';

function getColoredConsole(style: string, prefix?: string, endWith?: string) {
  prefix = prefix ?? '';
  endWith = endWith ?? '';
  return (...values: any[]) => {
    values = values.map(String);
    console.log('%c' + prefix + values.join(' ') + endWith, style);
  };
}
export function greenLog(...values: any[]) {
  getColoredConsole('color:green; font-size:15px', 's1## ')(...values);
}
export function yellowLog(...values: any[]) {
  getColoredConsole('color: yellow; font-size:15px', 's2### ')(...values);
}
export function blueLog(...values: any[]) {
  getColoredConsole('color: blue; font-size:15px', 's3### ')(...values);
}

export function pinkLog(...values: any[]) {
  getColoredConsole('color: pink; font-size:15px', 's3### ')(...values);
}
export function bigRedLog(...values: any[]) {
  getColoredConsole('color: red; font-size:20px', 'RS#### ', '\n\n')(...values);
}

export function infoLog(...values: any[]) {
  getColoredConsole('color: grey; font-size: 15px', 'INFO## ')(...values);
}

export const logOutput = {
  next: (result: any) => {
    bigRedLog(result);
  },
  error: () => {
    bigRedLog('ERROR');
  },
  complete: () => {
    bigRedLog('COMPLETE');
  },
};

export function interval5SecondsGreen$(emissions?: number): Observable<number> {
  return interval(5000).pipe(
    map((val) => val + 1),
    startWith(0),
    take(emissions ?? 3),
    tap(greenLog),
    finalize(() => greenLog('COMPLETE'))
  );
}

export function interval2SecondsGreen$(emissions?: number): Observable<number> {
  return interval(2000).pipe(
    map((val) => val + 1),
    startWith(0),
    take(emissions ?? 2),
    tap(greenLog),
    finalize(() => greenLog('COMPLETE'))
  );
}

export function interval2SecondsYellow$(
  emissions?: number
): Observable<number> {
  return interval(2000).pipe(
    map((val) => val + 1),
    startWith(0),
    take(emissions ?? 2),
    tap(yellowLog),
    finalize(() => yellowLog('COMPLETE'))
  );
}

export function interval2SecondsWithDelayBlue$(
  emissions?: number
): Observable<number> {
  return interval(2000).pipe(
    take(emissions ?? 2),
    tap(blueLog),
    finalize(() => blueLog('COMPLETE'))
  );
}

export function timerPink$(milliseconds?: number): Observable<number> {
  return timer(milliseconds ?? 10000).pipe(
    tap(pinkLog),
    finalize(() => pinkLog('COMPLETE'))
  );
}
