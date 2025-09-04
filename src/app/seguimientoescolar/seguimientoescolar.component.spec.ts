import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoescolarComponent } from './seguimientoescolar.component';

describe('SeguimientoescolarComponent', () => {
  let component: SeguimientoescolarComponent;
  let fixture: ComponentFixture<SeguimientoescolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoescolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
