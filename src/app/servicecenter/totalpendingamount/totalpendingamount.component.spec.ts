import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpendingamountComponent } from './totalpendingamount.component';

describe('TotalpendingamountComponent', () => {
  let component: TotalpendingamountComponent;
  let fixture: ComponentFixture<TotalpendingamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalpendingamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpendingamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
