import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const POKE_API_ROOT_POKEMON = 'https://pokeapi.co/api/v2/pokemon';
const POKE_LIST_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const DEFAULT_LIMIT = 50;

type pokeEntry = {
  name: string;
  url: string;
};

type pokeApiResponse = {
  count: number;
  next: 'string';
  previous: 'string';
  results: pokeEntry[];
};
@Injectable()
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  public getPokemon$(limit: number = DEFAULT_LIMIT): Observable<string[]> {
    const httpRequest$ = this.httpClient.get<pokeApiResponse>(POKE_LIST_BASE, {
      params: { limit: limit },
    }); // cold observable, starts working on subscribe

    return httpRequest$.pipe(
      map((val) => {
        if (limit == 70) {
          throw new Error('There was a problem fetching the pokeList');
        }
        return val;
      }),
      map((pokeApiResponse) =>
        pokeApiResponse.results.map(
          (pokeEntry: { name: any }) => pokeEntry.name
        )
      )
    );
  }
}
