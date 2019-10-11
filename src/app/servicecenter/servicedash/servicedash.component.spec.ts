import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedashComponent } from './servicedash.component';

describe('ServicedashComponent', () => {
  let component: ServicedashComponent;
  let fixture: ComponentFixture<ServicedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
