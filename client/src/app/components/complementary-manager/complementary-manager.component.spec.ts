import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryManagerComponent } from './complementary-manager.component';

describe('ComplementaryManagerComponent', () => {
  let component: ComplementaryManagerComponent;
  let fixture: ComponentFixture<ComplementaryManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementaryManagerComponent]
    });
    fixture = TestBed.createComponent(ComplementaryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
