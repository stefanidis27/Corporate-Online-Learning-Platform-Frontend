import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailenrollmentsPage } from './coursedetailenrollments.page';

describe('CoursedetailenrollmentsPage', () => {
  let component: CoursedetailenrollmentsPage;
  let fixture: ComponentFixture<CoursedetailenrollmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailenrollmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailenrollmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
