import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrolltraineesPage } from './enrolltrainees.page';

describe('EnrolltraineesPage', () => {
  let component: EnrolltraineesPage;
  let fixture: ComponentFixture<EnrolltraineesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolltraineesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrolltraineesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
