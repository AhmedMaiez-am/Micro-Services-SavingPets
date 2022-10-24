import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialiteComponent } from './confidentialite.component';

describe('ConfidentialiteComponent', () => {
  let component: ConfidentialiteComponent;
  let fixture: ComponentFixture<ConfidentialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
