import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicio1Component } from './inicio1.component';

describe('Inicio1Component', () => {
  let component: Inicio1Component;
  let fixture: ComponentFixture<Inicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inicio1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
