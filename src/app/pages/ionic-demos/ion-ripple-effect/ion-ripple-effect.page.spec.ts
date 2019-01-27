import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRippleEffectPage } from './ion-ripple-effect.page';

describe('IonRippleEffectPage', () => {
  let component: IonRippleEffectPage;
  let fixture: ComponentFixture<IonRippleEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRippleEffectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRippleEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
