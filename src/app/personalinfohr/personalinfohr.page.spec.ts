import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalinfohrPage } from './personalinfohr.page';

describe('PersonalinfohrPage', () => {
  let component: PersonalinfohrPage;
  let fixture: ComponentFixture<PersonalinfohrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinfohrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalinfohrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
