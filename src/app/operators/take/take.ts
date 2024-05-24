import { Observable, Subscription, take } from 'rxjs';
import { logOutput, interval2SecondsGreen$ } from '../../helpers';

// take
// Used to limit the number of emissions from an observable stream to a specified number, automatically completing the stream after reaching that count.
// https://rxmarbles.com/#take

const source1$: Observable<number> = interval2SecondsGreen$(10); // emits 0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = source1$
    .pipe(take(3))
    .subscribe(logOutput);
}
