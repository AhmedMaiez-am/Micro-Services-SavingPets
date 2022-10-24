import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAdminComponent } from './espace-admin.component';

describe('EspaceAdminComponent', () => {
  let component: EspaceAdminComponent;
  let fixture: ComponentFixture<EspaceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
