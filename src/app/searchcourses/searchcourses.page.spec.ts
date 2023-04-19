import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcoursesPage } from './searchcourses.page';

describe('SearchcoursesPage', () => {
  let component: SearchcoursesPage;
  let fixture: ComponentFixture<SearchcoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
