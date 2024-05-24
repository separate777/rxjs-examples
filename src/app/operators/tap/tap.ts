import { Observable, Subscription, tap } from 'rxjs';
import { logOutput, interval5SecondsGreen$, infoLog } from '../../helpers';

// tap
// allows you to perform side effects, such as logging or debugging without altering the values themselves.
// https://angularindepth.com/reference/rxjs/operators/tap

const source$: Observable<number> = interval5SecondsGreen$(); // emits 0, 1, 2 then completes
const enabled: boolean = false;
if (enabled) {
  const subscription: Subscription = source$
    .pipe(
      tap((sourceObservableValue: number) => {
        infoLog('I am a side effect');
        infoLog('Current value', sourceObservableValue);
      })
    )
    .subscribe(logOutput);
}
