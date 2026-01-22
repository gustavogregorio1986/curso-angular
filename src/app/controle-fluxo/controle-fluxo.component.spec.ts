import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleFluxoComponent } from './controle-fluxo.component';

describe('ControleFluxoComponent', () => {
  let component: ControleFluxoComponent;
  let fixture: ComponentFixture<ControleFluxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleFluxoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
