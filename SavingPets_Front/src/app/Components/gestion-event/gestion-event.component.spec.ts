import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEventComponent } from './gestion-event.component';

describe('GestionEventComponent', () => {
  let component: GestionEventComponent;
  let fixture: ComponentFixture<GestionEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
