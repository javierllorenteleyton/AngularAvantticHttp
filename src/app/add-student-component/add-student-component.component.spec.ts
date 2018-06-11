import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponentComponent } from './add-student-component.component';

describe('AddStudentComponentComponent', () => {
  let component: AddStudentComponentComponent;
  let fixture: ComponentFixture<AddStudentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
