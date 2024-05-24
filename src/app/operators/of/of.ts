import { Observable, Subscription, map, of } from 'rxjs';
import { logOutput, interval5SecondsGreen$ } from '../../helpers';

// of
// Creates an observable that emits a sequence of provided values in order and then completes.
// https://rxmarbles.com/#of

const enabled: boolean = true;
if (enabled) {
  const subscription: Subscription = of(1, 2, 3, 4, 5).subscribe(logOutput);
}
