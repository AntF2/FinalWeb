import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: FormularioRegistroComponent;
  let fixture: ComponentFixture<FormularioRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
