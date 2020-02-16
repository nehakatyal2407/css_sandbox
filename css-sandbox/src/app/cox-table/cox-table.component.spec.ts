import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxTableComponent } from './cox-table.component';

describe('CoxTableComponent', () => {
  let component: CoxTableComponent;
  let fixture: ComponentFixture<CoxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
