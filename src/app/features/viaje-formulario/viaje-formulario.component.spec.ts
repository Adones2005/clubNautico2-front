import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeFormularioComponent } from './viaje-formulario.component';

describe('ViajeFormularioComponent', () => {
  let component: ViajeFormularioComponent;
  let fixture: ComponentFixture<ViajeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajeFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
