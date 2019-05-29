import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModolutecnicoComponent } from './modolutecnico.component';

describe('ModolutecnicoComponent', () => {
  let component: ModolutecnicoComponent;
  let fixture: ComponentFixture<ModolutecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModolutecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModolutecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
