import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingrestComponent } from './singrest.component';

describe('SingrestComponent', () => {
  let component: SingrestComponent;
  let fixture: ComponentFixture<SingrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
