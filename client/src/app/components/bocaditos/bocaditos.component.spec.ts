import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocaditosComponent } from './bocaditos.component';


describe('BocaditosComponent', () => {
  let component: BocaditosComponent;
  let fixture: ComponentFixture<BocaditosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BocaditosComponent]
    });
    fixture = TestBed.createComponent(BocaditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
