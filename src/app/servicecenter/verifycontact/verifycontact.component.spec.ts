import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifycontactComponent } from './verifycontact.component';

describe('VerifycontactComponent', () => {
  let component: VerifycontactComponent;
  let fixture: ComponentFixture<VerifycontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifycontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
