import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpathPage } from './addpath.page';

describe('AddpathPage', () => {
  let component: AddpathPage;
  let fixture: ComponentFixture<AddpathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
