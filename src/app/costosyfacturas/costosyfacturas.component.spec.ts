import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosyfacturasComponent } from './costosyfacturas.component';

describe('CostosyfacturasComponent', () => {
  let component: CostosyfacturasComponent;
  let fixture: ComponentFixture<CostosyfacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostosyfacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostosyfacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
