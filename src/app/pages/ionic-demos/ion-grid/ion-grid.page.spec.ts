import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonGridPage } from './ion-grid.page';

describe('IonGridPage', () => {
  let component: IonGridPage;
  let fixture: ComponentFixture<IonGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
