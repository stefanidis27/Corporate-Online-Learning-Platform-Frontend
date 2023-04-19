import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutapptrainerPage } from './aboutapptrainer.page';

describe('AboutapptrainerPage', () => {
  let component: AboutapptrainerPage;
  let fixture: ComponentFixture<AboutapptrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutapptrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutapptrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
