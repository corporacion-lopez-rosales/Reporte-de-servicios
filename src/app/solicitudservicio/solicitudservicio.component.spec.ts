import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudservicioComponent } from './solicitudservicio.component';

describe('SolicitudservicioComponent', () => {
  let component: SolicitudservicioComponent;
  let fixture: ComponentFixture<SolicitudservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
