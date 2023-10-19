import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorListadoComponent } from './sponsor-listado.component';

describe('SponsorListadoComponent', () => {
  let component: SponsorListadoComponent;
  let fixture: ComponentFixture<SponsorListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorListadoComponent]
    });
    fixture = TestBed.createComponent(SponsorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
