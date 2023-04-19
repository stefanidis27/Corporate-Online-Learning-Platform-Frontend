import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathdetailinfoPage } from './pathdetailinfo.page';

describe('PathdetailinfoPage', () => {
  let component: PathdetailinfoPage;
  let fixture: ComponentFixture<PathdetailinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathdetailinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathdetailinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
