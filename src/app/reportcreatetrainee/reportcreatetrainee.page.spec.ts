import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportcreatetraineePage } from './reportcreatetrainee.page';

describe('ReportcreatetraineePage', () => {
  let component: ReportcreatetraineePage;
  let fixture: ComponentFixture<ReportcreatetraineePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcreatetraineePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportcreatetraineePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
