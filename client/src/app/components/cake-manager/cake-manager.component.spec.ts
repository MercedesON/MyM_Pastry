import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeManagerComponent } from './cake-manager.component';

describe('CakeManagerComponent', () => {
  let component: CakeManagerComponent;
  let fixture: ComponentFixture<CakeManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeManagerComponent]
    });
    fixture = TestBed.createComponent(CakeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
