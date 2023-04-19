import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchpathsPage } from './searchpaths.page';

describe('SearchpathsPage', () => {
  let component: SearchpathsPage;
  let fixture: ComponentFixture<SearchpathsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpathsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchpathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
