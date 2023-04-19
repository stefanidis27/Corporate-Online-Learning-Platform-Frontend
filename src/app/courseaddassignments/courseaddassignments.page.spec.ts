import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseaddassignmentsPage } from './courseaddassignments.page';

describe('CourseaddassignmentsPage', () => {
  let component: CourseaddassignmentsPage;
  let fixture: ComponentFixture<CourseaddassignmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseaddassignmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseaddassignmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
