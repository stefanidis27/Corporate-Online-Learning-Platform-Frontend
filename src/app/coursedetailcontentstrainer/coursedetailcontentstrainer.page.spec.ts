import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailcontentstrainerPage } from './coursedetailcontentstrainer.page';

describe('CoursedetailcontentstrainerPage', () => {
  let component: CoursedetailcontentstrainerPage;
  let fixture: ComponentFixture<CoursedetailcontentstrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailcontentstrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailcontentstrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
