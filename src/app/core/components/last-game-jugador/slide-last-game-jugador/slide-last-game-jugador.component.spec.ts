import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLastGameJugadorComponent } from './slide-last-game-jugador.component';

describe('SlideLastGameJugadorComponent', () => {
  let component: SlideLastGameJugadorComponent;
  let fixture: ComponentFixture<SlideLastGameJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideLastGameJugadorComponent]
    });
    fixture = TestBed.createComponent(SlideLastGameJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
