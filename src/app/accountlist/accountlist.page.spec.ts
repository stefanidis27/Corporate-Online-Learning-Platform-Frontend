import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountlistPage } from './accountlist.page';

describe('AccountlistPage', () => {
  let component: AccountlistPage;
  let fixture: ComponentFixture<AccountlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
