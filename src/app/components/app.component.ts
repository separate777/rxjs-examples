import { Component } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  debounceTime,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = new BehaviorSubject(true);
  error$ = new Subject();
  limit = new FormControl<number>(10);

  pokeList$ = this.limit.valueChanges.pipe(
    startWith(this.limit.value),
    debounceTime(500),
    tap(() => this.isLoading.next(true)),
    switchMap((limit) =>
      typeof limit !== 'number'
        ? of('please enter a valid number')
        : this.pokeService.getPokemon$(limit)
    ),
    tap(() => this.isLoading.next(false)),
    catchError((error) => {
      this.isLoading.next(false);
      this.error$.next(String(error));
      return of(EMPTY);
    })
  );

  constructor(private pokeService: PokeService) {}
}
