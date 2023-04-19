import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportcreatercoursePage } from './reportcreatercourse.page';

describe('ReportcreatercoursePage', () => {
  let component: ReportcreatercoursePage;
  let fixture: ComponentFixture<ReportcreatercoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcreatercoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportcreatercoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
