import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReasouresComponent } from './angular-reasoures.component';

describe('AngularReasouresComponent', () => {
  let component: AngularReasouresComponent;
  let fixture: ComponentFixture<AngularReasouresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReasouresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReasouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
