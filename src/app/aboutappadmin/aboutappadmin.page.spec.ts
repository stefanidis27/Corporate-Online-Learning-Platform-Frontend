import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutappadminPage } from './aboutappadmin.page';

describe('AboutappadminPage', () => {
  let component: AboutappadminPage;
  let fixture: ComponentFixture<AboutappadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutappadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutappadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
