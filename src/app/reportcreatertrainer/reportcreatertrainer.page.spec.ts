import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportcreatertrainerPage } from './reportcreatertrainer.page';

describe('ReportcreatertrainerPage', () => {
  let component: ReportcreatertrainerPage;
  let fixture: ComponentFixture<ReportcreatertrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcreatertrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportcreatertrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
