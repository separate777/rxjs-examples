import { Observable, Subscription, filter } from 'rxjs';
import { logOutput, interval2SecondsGreen$ } from '../../helpers';

// filter
// Selectively passes items emitted by an observable stream that satisfy a specified condition, discarding those that do not.
// https://rxmarbles.com/#filter

const sourceObservable$: Observable<number> = interval2SecondsGreen$(5); // emits 0, 1, 2, 3, 4 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = sourceObservable$
    .pipe(
      filter((value) => {
        const remainder = value % 2;
        return remainder === 0;
      })
    )
    .subscribe(logOutput);
}
