import { Observable, Subscription, takeUntil } from 'rxjs';
import { logOutput, interval2SecondsGreen$, timerPink$ } from '../../helpers';

// takeUntil
// Lets you listen to an observable stream until a separate "signal" observable emits, stopping the flow and cleaning up the subscription.
// https://rxmarbles.com/#takeUntil

const source1$: Observable<number> = interval2SecondsGreen$(10); // emits 0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 then completes
const innerObservable$: Observable<number> = timerPink$(5000); // emits 0, then completes;
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = source1$
    .pipe(takeUntil(innerObservable$))
    .subscribe(logOutput);
}
