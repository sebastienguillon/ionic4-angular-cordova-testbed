import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemosPage } from './angular-demos.page';

describe('AngularDemosPage', () => {
  let component: AngularDemosPage;
  let fixture: ComponentFixture<AngularDemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
