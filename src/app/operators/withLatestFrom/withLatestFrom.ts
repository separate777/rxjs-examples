import { Observable, Subscription, combineLatest, withLatestFrom } from 'rxjs';
import {
  logOutput,
  interval5SecondsGreen$,
  interval2SecondsYellow$,
} from '../../helpers';

// combineLatest
// Combines each value from the source observable with the latest values from inner observables only when the source emits, effectively enriching each emission with the latest additional context. (Similar to combineLatest)
// https://rxmarbles.com/#withLatestFrom

const sourceObservable$: Observable<number> = interval5SecondsGreen$(); // emits 0, 1, 2 then completes
const innerObservable$: Observable<number> = interval2SecondsYellow$(); // emits 0, 1 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = sourceObservable$
    .pipe(withLatestFrom(innerObservable$))
    .subscribe(logOutput);
}
