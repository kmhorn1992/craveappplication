import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerestComponent } from './singlerest.component';

describe('SinglerestComponent', () => {
  let component: SinglerestComponent;
  let fixture: ComponentFixture<SinglerestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
