import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchpathstrainerPage } from './searchpathstrainer.page';

describe('SearchpathstrainerPage', () => {
  let component: SearchpathstrainerPage;
  let fixture: ComponentFixture<SearchpathstrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpathstrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchpathstrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
