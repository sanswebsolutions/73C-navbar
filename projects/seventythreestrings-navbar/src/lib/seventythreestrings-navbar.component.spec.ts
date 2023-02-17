import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventythreestringsNavbarComponent } from './seventythreestrings-navbar.component';

describe('SeventythreestringsNavbarComponent', () => {
  let component: SeventythreestringsNavbarComponent;
  let fixture: ComponentFixture<SeventythreestringsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventythreestringsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventythreestringsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
