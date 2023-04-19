import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcourseshrPage } from './searchcourseshr.page';

describe('SearchcourseshrPage', () => {
  let component: SearchcourseshrPage;
  let fixture: ComponentFixture<SearchcourseshrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcourseshrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcourseshrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
