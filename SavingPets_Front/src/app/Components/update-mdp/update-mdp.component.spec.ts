import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMDPComponent } from './update-mdp.component';

describe('UpdateMDPComponent', () => {
  let component: UpdateMDPComponent;
  let fixture: ComponentFixture<UpdateMDPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMDPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
