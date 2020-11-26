import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInicioComponent } from './perfil-inicio.component';

describe('PerfilInicioComponent', () => {
  let component: PerfilInicioComponent;
  let fixture: ComponentFixture<PerfilInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
