import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarAdminComponent } from './update-car-admin.component';

describe('UpdateCarAdminComponent', () => {
  let component: UpdateCarAdminComponent;
  let fixture: ComponentFixture<UpdateCarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarAdminComponent]
    });
    fixture = TestBed.createComponent(UpdateCarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
