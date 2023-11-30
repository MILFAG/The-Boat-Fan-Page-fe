import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastGameComponent } from './last-game.component';

describe('LastGameComponent', () => {
  let component: LastGameComponent;
  let fixture: ComponentFixture<LastGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastGameComponent]
    });
    fixture = TestBed.createComponent(LastGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
