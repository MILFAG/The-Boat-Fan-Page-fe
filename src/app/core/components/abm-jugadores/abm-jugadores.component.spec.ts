import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmJugadoresComponent } from './abm-jugadores.component';

describe('AbmJugadoresComponent', () => {
  let component: AbmJugadoresComponent;
  let fixture: ComponentFixture<AbmJugadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmJugadoresComponent]
    });
    fixture = TestBed.createComponent(AbmJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
