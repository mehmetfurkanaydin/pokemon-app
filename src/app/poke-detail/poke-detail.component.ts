import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.less']
})
export class PokeDetailComponent implements OnInit, OnDestroy {
  pokeSub: Subscription;
  pokemon: object;
  loading: boolean;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.pokemonService.getPokemon(this.route.snapshot.paramMap.get('name'));
    this.loading = true;
   }

   ngOnInit() {
    this.pokeSub = this.pokemonService.getPokemonListener()
    .subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.pokeSub.unsubscribe();
  }

}
