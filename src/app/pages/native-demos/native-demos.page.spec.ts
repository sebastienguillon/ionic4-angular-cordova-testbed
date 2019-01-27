import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeDemosPage } from './native-demos.page';

describe('NativeDemosPage', () => {
  let component: NativeDemosPage;
  let fixture: ComponentFixture<NativeDemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeDemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeDemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
