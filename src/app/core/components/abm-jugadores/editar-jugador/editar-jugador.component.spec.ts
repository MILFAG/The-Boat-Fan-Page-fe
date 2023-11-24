import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJugadorComponent } from './editar-jugador.component';

describe('EditarJugadorComponent', () => {
  let component: EditarJugadorComponent;
  let fixture: ComponentFixture<EditarJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarJugadorComponent]
    });
    fixture = TestBed.createComponent(EditarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
