import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSponsorComponent } from './editar-sponsor.component';

describe('EditarSponsorComponent', () => {
  let component: EditarSponsorComponent;
  let fixture: ComponentFixture<EditarSponsorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSponsorComponent]
    });
    fixture = TestBed.createComponent(EditarSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
