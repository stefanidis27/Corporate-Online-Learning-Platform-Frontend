import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailenrollmentstrainerPage } from './coursedetailenrollmentstrainer.page';

describe('CoursedetailenrollmentstrainerPage', () => {
  let component: CoursedetailenrollmentstrainerPage;
  let fixture: ComponentFixture<CoursedetailenrollmentstrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailenrollmentstrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailenrollmentstrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
