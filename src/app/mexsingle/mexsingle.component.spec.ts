import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexsingleComponent } from './mexsingle.component';

describe('MexsingleComponent', () => {
  let component: MexsingleComponent;
  let fixture: ComponentFixture<MexsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
