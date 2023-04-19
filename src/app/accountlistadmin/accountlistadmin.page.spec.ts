import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountlistadminPage } from './accountlistadmin.page';

describe('AccountlistadminPage', () => {
  let component: AccountlistadminPage;
  let fixture: ComponentFixture<AccountlistadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountlistadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountlistadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
