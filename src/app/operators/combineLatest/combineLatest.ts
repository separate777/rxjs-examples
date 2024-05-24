import { Observable, Subscription, combineLatest } from 'rxjs';
import {
  logOutput,
  interval5SecondsGreen$,
  interval2SecondsWithDelayBlue$,
} from '../../helpers';

// combineLatest
// combines multiple observables to create an observable that emits an array containing the latest values from each input observable whenever any of them emits. Each has to emit at least once!
// https://angularindepth.com/reference/rxjs/operators/combine-latest
// https://rxmarbles.com/#combineLatest

const source1$: Observable<number> = interval5SecondsGreen$(); // emits 0, 1, 2 then completes
const source2$: Observable<number> = interval2SecondsWithDelayBlue$(); // emits 0, 1 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = combineLatest([
    source1$,
    source2$,
  ]).subscribe(logOutput);
}
