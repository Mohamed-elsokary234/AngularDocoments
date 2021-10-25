import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptcreateComponent } from './deptcreate.component';

describe('DeptcreateComponent', () => {
  let component: DeptcreateComponent;
  let fixture: ComponentFixture<DeptcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
