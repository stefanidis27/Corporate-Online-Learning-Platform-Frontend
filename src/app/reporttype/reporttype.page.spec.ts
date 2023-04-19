import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporttypePage } from './reporttype.page';

describe('ReporttypePage', () => {
  let component: ReporttypePage;
  let fixture: ComponentFixture<ReporttypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporttypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporttypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
