import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemonListFetched = new Subject<any>();

  constructor(private http: HttpClient) { }

  getPokemonList() {
    this.http
      .get<any>(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000'
      ).pipe(map((response) => {
        return response.results.map(pokemon => {
          return {
            name: pokemon.name,
          };
        });
      }))
      .subscribe(pokemonList => {
        this.pokemonListFetched.next(pokemonList);
      });
  }

  getPokemonListListener() {
    return this.pokemonListFetched.asObservable();
  }

}
