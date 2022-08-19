import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlandaAgregarEditarComponent } from './blanda-agregar-editar.component';

describe('BlandaAgregarEditarComponent', () => {
  let component: BlandaAgregarEditarComponent;
  let fixture: ComponentFixture<BlandaAgregarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlandaAgregarEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlandaAgregarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
