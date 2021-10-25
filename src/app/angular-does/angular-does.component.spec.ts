import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDoesComponent } from './angular-does.component';

describe('AngularDoesComponent', () => {
  let component: AngularDoesComponent;
  let fixture: ComponentFixture<AngularDoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
