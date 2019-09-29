import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';


const routes: Routes = [
  { path: '', component: PokeViewComponent },
  { path: 'pokemon', component: PokeListComponent },
  { path: 'pokemon/:name', component: PokeDetailComponent },
  { path: '**', redirectTo: '' } // redirect to home page if url is invalid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
