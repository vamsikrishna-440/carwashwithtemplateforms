import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbookingComponent } from './viewallbooking.component';

describe('ViewallbookingComponent', () => {
  let component: ViewallbookingComponent;
  let fixture: ComponentFixture<ViewallbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
