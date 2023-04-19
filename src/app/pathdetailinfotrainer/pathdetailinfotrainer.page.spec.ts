import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathdetailinfotrainerPage } from './pathdetailinfotrainer.page';

describe('PathdetailinfotrainerPage', () => {
  let component: PathdetailinfotrainerPage;
  let fixture: ComponentFixture<PathdetailinfotrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathdetailinfotrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathdetailinfotrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
