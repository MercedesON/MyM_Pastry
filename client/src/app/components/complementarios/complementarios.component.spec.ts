import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementariosComponent } from './complementarios.component';

describe('ComplementariosComponent', () => {
  let component: ComplementariosComponent;
  let fixture: ComponentFixture<ComplementariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementariosComponent]
    });
    fixture = TestBed.createComponent(ComplementariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
