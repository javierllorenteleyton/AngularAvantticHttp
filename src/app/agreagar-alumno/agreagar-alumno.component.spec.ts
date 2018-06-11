import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreagarAlumnoComponent } from './agreagar-alumno.component';

describe('AgreagarAlumnoComponent', () => {
  let component: AgreagarAlumnoComponent;
  let fixture: ComponentFixture<AgreagarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreagarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreagarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
