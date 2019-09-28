import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeListComponent } from './poke-list/poke-list.component';


const routes: Routes = [
  { path: '', component: PokeViewComponent },
  { path: 'pokemon', component: PokeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
