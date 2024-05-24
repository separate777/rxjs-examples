import { Observable, Subscription, combineLatest, startWith } from 'rxjs';
import { logOutput, interval2SecondsWithDelayBlue$ } from '../../helpers';

// startWith
// prepends specified values to the beginning of an observable sequence, emitting them immediately upon subscription before any other values.
// https://rxjs-visualize.explosionpills.com/startWith

const source1$: Observable<number> = interval2SecondsWithDelayBlue$(); // emits 0, 1 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = source1$
    .pipe(startWith(10))
    .subscribe(logOutput);
}
