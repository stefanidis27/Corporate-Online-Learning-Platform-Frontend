import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutappPage } from './aboutapp.page';

describe('AboutappPage', () => {
  let component: AboutappPage;
  let fixture: ComponentFixture<AboutappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
