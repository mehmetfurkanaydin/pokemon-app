import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.less']
})
export class PokeListComponent implements OnInit {
  pokeListSub: Subscription;
  pokeButtonList: String[];
  searchText: String;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemonList();
   }

  ngOnInit() {
    this.pokeListSub = this.pokemonService.getPokemonListListener()
    .subscribe((pokeList) => {
      this.pokeButtonList = pokeList;
    });
  }

}
