import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { PokeViewComponent } from '../poke-view/poke-view.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { FilterPipe } from '../poke-list/filter.pipe';
import { PokeDetailComponent } from '../poke-detail/poke-detail.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let router: Router;

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
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create breadcrumb correctly', async () => {
    await router.navigate(['']).then(() => {
      expect(component.breadcrumbList.length).toBe(1);
      expect(component.breadcrumbList[0]).toBe('');
    });

    await router.navigate(['/pokemon']).then(() => {
      expect(component.breadcrumbList.length).toBe(2);
      expect(component.breadcrumbList[0]).toBe('');
      expect(component.breadcrumbList[1]).toBe('pokemon');
    });

    await router.navigate(['/pokemon/pikachu']).then(() => {
      expect(component.breadcrumbList.length).toBe(3);
      expect(component.breadcrumbList[0]).toBe('');
      expect(component.breadcrumbList[1]).toBe('pokemon');
      expect(component.breadcrumbList[2]).toBe('pikachu');
    });
  });
});
