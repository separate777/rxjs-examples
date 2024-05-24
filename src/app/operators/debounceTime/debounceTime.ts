import {
  Observable,
  Subscription,
  combineLatest,
  debounceTime,
  take,
} from 'rxjs';
import {
  logOutput,
  interval5SecondsGreen$,
  interval2SecondsYellow$,
} from '../../helpers';

// debounceTime
// debounceTime operator in RxJS delays the emission of an item from an observable until a specified time period has passed without another item being emitted.
// https://rxmarbles.com/#debounceTime

const sourceObservable$: Observable<number> = interval5SecondsGreen$(5); // emits 0, 1, 2, 3, 4 then completes
const source2Observable$: Observable<number> = interval2SecondsYellow$(2); // emits 0, 1 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = combineLatest([
    sourceObservable$,
    source2Observable$,
  ])
    .pipe(debounceTime(2100))
    .subscribe(logOutput);
}
