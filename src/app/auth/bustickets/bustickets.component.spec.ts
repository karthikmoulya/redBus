import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusticketsComponent } from './bustickets.component';

describe('BusticketsComponent', () => {
  let component: BusticketsComponent;
  let fixture: ComponentFixture<BusticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
