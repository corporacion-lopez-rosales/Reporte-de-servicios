import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevo2Component } from './nuevo2.component';

describe('Nuevo2Component', () => {
  let component: Nuevo2Component;
  let fixture: ComponentFixture<Nuevo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nuevo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nuevo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
