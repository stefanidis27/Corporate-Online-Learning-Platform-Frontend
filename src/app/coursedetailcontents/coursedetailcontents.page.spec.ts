import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailcontentsPage } from './coursedetailcontents.page';

describe('CoursedetailcontentsPage', () => {
  let component: CoursedetailcontentsPage;
  let fixture: ComponentFixture<CoursedetailcontentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailcontentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailcontentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
