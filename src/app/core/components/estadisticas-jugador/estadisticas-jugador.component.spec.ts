import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasJugadorComponent } from './estadisticas-jugador.component';

describe('EstadisticasJugadorComponent', () => {
  let component: EstadisticasJugadorComponent;
  let fixture: ComponentFixture<EstadisticasJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticasJugadorComponent]
    });
    fixture = TestBed.createComponent(EstadisticasJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
