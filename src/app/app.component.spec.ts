import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { FilterPipe } from './poke-list/filter.pipe';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: PokeViewComponent
          },
          {
            path: 'pokemon',
            component: PokeListComponent
          },
          {
            path: 'pokemon/:name',
            component: PokeDetailComponent
          }]),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ],
      declarations: [
        AppComponent,
        PokeViewComponent,
        PokeListComponent,
        FilterPipe,
        PokeDetailComponent,
        BreadcrumbComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokemon-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pokemon-app');
  });
});
