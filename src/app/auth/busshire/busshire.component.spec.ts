import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusshireComponent } from './busshire.component';

describe('BusshireComponent', () => {
  let component: BusshireComponent;
  let fixture: ComponentFixture<BusshireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusshireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusshireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
