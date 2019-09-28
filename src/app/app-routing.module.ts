import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeViewComponent } from './poke-view/poke-view.component';


const routes: Routes = [
  { path: '', component: PokeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
