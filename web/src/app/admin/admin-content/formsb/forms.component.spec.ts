/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsbComponent } from './formsb.component';

describe('FormsbComponent', () => {
  let component: FormsbComponent;
  let fixture: ComponentFixture<FormsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
