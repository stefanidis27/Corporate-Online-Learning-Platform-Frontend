import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailinfotrainerPage } from './coursedetailinfotrainer.page';

describe('CoursedetailinfotrainerPage', () => {
  let component: CoursedetailinfotrainerPage;
  let fixture: ComponentFixture<CoursedetailinfotrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailinfotrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailinfotrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
