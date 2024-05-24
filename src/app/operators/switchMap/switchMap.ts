import { Observable, Subscription, map, switchMap } from 'rxjs';
import { logOutput, interval5SecondsGreen$, interval2SecondsYellow$ } from '../../helpers';

// switchMap
// Uses the emissions of a source observable to trigger subscriptions on an inner observable and cancel the last subscription on the inner observable.
// https://angularindepth.com/reference/rxjs/operators/switch-map

const sourceObservable$: Observable<number> = interval5SecondsGreen$(); // emits 0, 1, 2 then completes
const innerObservable$: Observable<number> = interval2SecondsYellow$(); // emits 0, 1 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = sourceObservable$
    .pipe(
      switchMap((sourceObservableValue: number) => {
        return innerObservable$;
      })
    )
    .subscribe(logOutput);
}
