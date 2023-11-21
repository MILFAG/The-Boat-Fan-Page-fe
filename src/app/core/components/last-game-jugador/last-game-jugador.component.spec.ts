import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastGameJugadorComponent } from './last-game-jugador.component';

describe('LastGameJugadorComponent', () => {
  let component: LastGameJugadorComponent;
  let fixture: ComponentFixture<LastGameJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastGameJugadorComponent]
    });
    fixture = TestBed.createComponent(LastGameJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
