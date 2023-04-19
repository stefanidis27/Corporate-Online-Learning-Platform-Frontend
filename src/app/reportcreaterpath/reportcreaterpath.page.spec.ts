import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportcreaterpathPage } from './reportcreaterpath.page';

describe('ReportcreaterpathPage', () => {
  let component: ReportcreaterpathPage;
  let fixture: ComponentFixture<ReportcreaterpathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcreaterpathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportcreaterpathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
