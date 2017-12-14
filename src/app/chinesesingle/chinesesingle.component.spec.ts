import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinesesingleComponent } from './chinesesingle.component';

describe('ChinesesingleComponent', () => {
  let component: ChinesesingleComponent;
  let fixture: ComponentFixture<ChinesesingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinesesingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinesesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
