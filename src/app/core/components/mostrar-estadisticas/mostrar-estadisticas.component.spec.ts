import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEstadisticasComponent } from './mostrar-estadisticas.component';

describe('MostrarEstadisticasComponent', () => {
  let component: MostrarEstadisticasComponent;
  let fixture: ComponentFixture<MostrarEstadisticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEstadisticasComponent]
    });
    fixture = TestBed.createComponent(MostrarEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
