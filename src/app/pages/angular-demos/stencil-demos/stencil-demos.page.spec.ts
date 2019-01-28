import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilDemosPage } from './stencil-demos.page';

describe('StencilDemosPage', () => {
  let component: StencilDemosPage;
  let fixture: ComponentFixture<StencilDemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilDemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilDemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
