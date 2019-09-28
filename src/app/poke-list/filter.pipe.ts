import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(pokemons: any[], searchText: string): any[] {
        if (!pokemons) return [];
        if (!searchText) return pokemons;
        searchText = searchText.toLowerCase();
        return pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchText);
        });
    }
}