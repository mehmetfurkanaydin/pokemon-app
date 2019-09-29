import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { PokeViewComponent } from '../poke-view/poke-view.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { FilterPipe } from '../poke-list/filter.pipe';
import { PokeDetailComponent } from '../poke-detail/poke-detail.component';

describe('PokeDetailComponent', () => {
  let component: PokeDetailComponent;
  let fixture: ComponentFixture<PokeDetailComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreadcrumbComponent,
        PokeViewComponent,
        PokeListComponent,
        FilterPipe,
        PokeDetailComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map([['name', 'pikachu']])
            }
          }
        }
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve pokemon', async () => {
    const expectedPokemon =
    {
      name: 'pikachu'
    }
    const mockPokemons = {
      name: 'pikachu'
    };

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );

    req.flush(mockPokemons);
    expect(component.pokemon).toEqual(expectedPokemon);
  });

  it('should handle errors', async () => {
    const expectedError = 'Not Found';
    const emsg = 'Not Found';
    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );

    req.flush(emsg, { status: 404, statusText: 'Not Found' });
    expect(component.error).toEqual(expectedError);
  });
});
