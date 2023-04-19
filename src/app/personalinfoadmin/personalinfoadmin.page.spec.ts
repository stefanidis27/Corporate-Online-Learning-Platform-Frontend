import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalinfoadminPage } from './personalinfoadmin.page';

describe('PersonalinfoadminPage', () => {
  let component: PersonalinfoadminPage;
  let fixture: ComponentFixture<PersonalinfoadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinfoadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalinfoadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
