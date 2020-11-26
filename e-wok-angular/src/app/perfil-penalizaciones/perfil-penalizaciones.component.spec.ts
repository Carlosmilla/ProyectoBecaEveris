import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPenalizacionesComponent } from './perfil-penalizaciones.component';

describe('PerfilPenalizacionesComponent', () => {
  let component: PerfilPenalizacionesComponent;
  let fixture: ComponentFixture<PerfilPenalizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPenalizacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPenalizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
