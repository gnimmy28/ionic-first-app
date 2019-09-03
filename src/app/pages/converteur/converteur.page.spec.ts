import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteurPage } from './converteur.page';

describe('ConverteurPage', () => {
  let component: ConverteurPage;
  let fixture: ComponentFixture<ConverteurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverteurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
