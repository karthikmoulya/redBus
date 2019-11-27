import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustextComponent } from './bustext.component';

describe('BustextComponent', () => {
  let component: BustextComponent;
  let fixture: ComponentFixture<BustextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
