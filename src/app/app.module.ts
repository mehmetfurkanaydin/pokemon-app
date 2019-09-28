import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { FilterPipe } from './poke-list/filter.pipe';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeViewComponent,
    PokeListComponent,
    FilterPipe,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
