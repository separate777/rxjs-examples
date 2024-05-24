import { Observable, Subscription, map } from 'rxjs';
import { logOutput, interval5SecondsGreen$ } from '../../helpers';

// map
// transforms each value emitted by an observable into a new value
// https://angularindepth.com/reference/rxjs/operators/map

const source$: Observable<number> = interval5SecondsGreen$(); // emits 0, 1, 2 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = source$
    .pipe(
      map((sourceObservableValue: number) => {
        return sourceObservableValue * 2;
      })
    )
    .subscribe(logOutput);
}
