import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewtraineeworkPage } from './reviewtraineework.page';

describe('ReviewtraineeworkPage', () => {
  let component: ReviewtraineeworkPage;
  let fixture: ComponentFixture<ReviewtraineeworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewtraineeworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewtraineeworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
