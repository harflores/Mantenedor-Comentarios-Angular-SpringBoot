import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetallesComponent } from './comentario-detalles.component';

describe('ComentarioDetallesComponent', () => {
  let component: ComentarioDetallesComponent;
  let fixture: ComponentFixture<ComentarioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
