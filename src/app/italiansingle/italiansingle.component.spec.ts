import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaliansingleComponent } from './italiansingle.component';

describe('ItaliansingleComponent', () => {
  let component: ItaliansingleComponent;
  let fixture: ComponentFixture<ItaliansingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItaliansingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItaliansingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
