import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourselistPage } from './courselist.page';

describe('CourselistPage', () => {
  let component: CourselistPage;
  let fixture: ComponentFixture<CourselistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourselistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
