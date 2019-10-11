import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletstatusComponent } from './walletstatus.component';

describe('WalletstatusComponent', () => {
  let component: WalletstatusComponent;
  let fixture: ComponentFixture<WalletstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
