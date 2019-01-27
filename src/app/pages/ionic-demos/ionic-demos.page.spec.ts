import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicDemosPage } from './ionic-demos.page';

describe('IonicDemosPage', () => {
  let component: IonicDemosPage;
  let fixture: ComponentFixture<IonicDemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicDemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicDemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
