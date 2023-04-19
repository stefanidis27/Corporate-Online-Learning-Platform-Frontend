import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutapphrPage } from './aboutapphr.page';

describe('AboutapphrPage', () => {
  let component: AboutapphrPage;
  let fixture: ComponentFixture<AboutapphrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutapphrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutapphrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
