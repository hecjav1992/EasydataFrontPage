import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardseguiComponent } from './dasboardsegui.component';

describe('DasboardseguiComponent', () => {
  let component: DasboardseguiComponent;
  let fixture: ComponentFixture<DasboardseguiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardseguiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardseguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
