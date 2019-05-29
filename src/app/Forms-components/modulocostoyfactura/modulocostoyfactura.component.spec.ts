import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulocostoyfacturaComponent } from './modulocostoyfactura.component';

describe('ModulocostoyfacturaComponent', () => {
  let component: ModulocostoyfacturaComponent;
  let fixture: ComponentFixture<ModulocostoyfacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulocostoyfacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulocostoyfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
