import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoursedetailinfoPage } from './coursedetailinfo.page';

describe('CoursedetailinfoPage', () => {
  let component: CoursedetailinfoPage;
  let fixture: ComponentFixture<CoursedetailinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursedetailinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
