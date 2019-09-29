import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokemonListFetched = new Subject<any>();
  private pokemonFetched = new Subject<any>();

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
      }, (err) => {
        this.pokemonListFetched.next(err);
      });
  }

  getPokemonListListener() {
    return this.pokemonListFetched.asObservable();
  }

  getPokemon(name: string) {
    this.http
      .get<any>(
        'https://pokeapi.co/api/v2/pokemon/' + name
      )
      .subscribe(pokemon => {
        this.pokemonFetched.next(pokemon);
      }, (err) => {
        this.pokemonFetched.next(err);
      });
  }

  getPokemonListener() {
    return this.pokemonFetched.asObservable();
  }

}
