import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathlistPage } from './pathlist.page';

describe('PathlistPage', () => {
  let component: PathlistPage;
  let fixture: ComponentFixture<PathlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
