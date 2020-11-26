import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditadoComponent } from './perfil-editado.component';

describe('PerfilEditadoComponent', () => {
  let component: PerfilEditadoComponent;
  let fixture: ComponentFixture<PerfilEditadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEditadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
