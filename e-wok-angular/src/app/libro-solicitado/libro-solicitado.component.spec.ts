import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroSolicitadoComponent } from './libro-solicitado.component';

describe('LibroSolicitadoComponent', () => {
  let component: LibroSolicitadoComponent;
  let fixture: ComponentFixture<LibroSolicitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroSolicitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroSolicitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
