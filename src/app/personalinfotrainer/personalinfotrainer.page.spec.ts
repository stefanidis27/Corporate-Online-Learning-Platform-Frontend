import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalinfotrainerPage } from './personalinfotrainer.page';

describe('PersonalinfotrainerPage', () => {
  let component: PersonalinfotrainerPage;
  let fixture: ComponentFixture<PersonalinfotrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinfotrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalinfotrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
