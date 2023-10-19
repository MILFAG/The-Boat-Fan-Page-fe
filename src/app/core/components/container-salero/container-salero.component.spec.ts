import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSaleroComponent } from './container-salero.component';

describe('ContainerSaleroComponent', () => {
  let component: ContainerSaleroComponent;
  let fixture: ComponentFixture<ContainerSaleroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerSaleroComponent]
    });
    fixture = TestBed.createComponent(ContainerSaleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
