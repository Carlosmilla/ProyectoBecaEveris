import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMisLibrosComponent } from './perfil-mis-libros.component';

describe('PerfilMisLibrosComponent', () => {
  let component: PerfilMisLibrosComponent;
  let fixture: ComponentFixture<PerfilMisLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMisLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMisLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
