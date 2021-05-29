import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontosdeinteressePage } from './pontosdeinteresse.page';

describe('PontosdeinteressePage', () => {
  let component: PontosdeinteressePage;
  let fixture: ComponentFixture<PontosdeinteressePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosdeinteressePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontosdeinteressePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
