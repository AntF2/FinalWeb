import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductosComponent } from './tabla-productos.component';

describe('TablaProductosComponent', () => {
  let component: TablaProductosComponent;
  let fixture: ComponentFixture<TablaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
