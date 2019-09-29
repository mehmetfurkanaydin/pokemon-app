import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { PokeViewComponent } from '../poke-view/poke-view.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { FilterPipe } from '../poke-list/filter.pipe';
import { PokeDetailComponent } from '../poke-detail/poke-detail.component';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
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
        { provide: APP_BASE_HREF, useValue : '/' }
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
    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list pokemons', () => {
    const expectedPokemons = [
      {
        name: 'pokemon1'
      },
      {
        name: 'pokemon2'
      }
    ];
    const mockPokemons = {
      results: [
        {
          name: 'pokemon1',
          url: '/url'
        },
        {
          name: 'pokemon2',
          url: '/ur2'
        }
      ]
    };

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000'
    );

    req.flush(mockPokemons);
    expect(component.pokeButtonList).toEqual(expectedPokemons);
  });

  it('should handle errors', () => {
    const expectedError = 'Not Found';
    const emsg = 'Not Found';

    const req = httpTestingController.expectOne(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000'
    );

    req.flush(emsg, { status: 404, statusText: 'Not Found' });
    expect(component.error).toEqual(expectedError);
  });
});
