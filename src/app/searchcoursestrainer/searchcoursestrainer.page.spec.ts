import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcoursestrainerPage } from './searchcoursestrainer.page';

describe('SearchcoursestrainerPage', () => {
  let component: SearchcoursestrainerPage;
  let fixture: ComponentFixture<SearchcoursestrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcoursestrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcoursestrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
