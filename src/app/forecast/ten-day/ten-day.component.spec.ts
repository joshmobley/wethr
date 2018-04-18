import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDayComponent } from './ten-day.component';

describe('TenDayComponent', () => {
  let component: TenDayComponent;
  let fixture: ComponentFixture<TenDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
