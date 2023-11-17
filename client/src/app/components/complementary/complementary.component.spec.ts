import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryComponent } from './complementary.component';

describe('ComplementaryComponent', () => {
  let component: ComplementaryComponent;
  let fixture: ComponentFixture<ComplementaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementaryComponent]
    });
    fixture = TestBed.createComponent(ComplementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
