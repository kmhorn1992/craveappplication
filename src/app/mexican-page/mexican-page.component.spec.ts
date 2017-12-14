import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanPageComponent } from './mexican-page.component';

describe('MexicanPageComponent', () => {
  let component: MexicanPageComponent;
  let fixture: ComponentFixture<MexicanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
