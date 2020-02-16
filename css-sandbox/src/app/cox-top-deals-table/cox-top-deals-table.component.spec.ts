import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxTopDealsTableComponent } from './cox-top-deals-table.component';

describe('CoxTopDealsTableComponent', () => {
  let component: CoxTopDealsTableComponent;
  let fixture: ComponentFixture<CoxTopDealsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoxTopDealsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoxTopDealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
