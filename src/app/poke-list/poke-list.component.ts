import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.less']
})
export class PokeListComponent implements OnInit, OnDestroy {
  pokeListSub: Subscription;
  pokeButtonList: object[];
  searchText: String;
  error: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemonList();
   }

  ngOnInit() {
    // listen pokemon list fetch and display list on page
    this.pokeListSub = this.pokemonService.getPokemonListListener()
    .subscribe((pokeList) => {
      if (pokeList.error) {
        this.error = pokeList.error;
      } else {
        this.pokeButtonList = pokeList;
      }
    });
  }

  ngOnDestroy() {
    this.pokeListSub.unsubscribe();
  }

}
