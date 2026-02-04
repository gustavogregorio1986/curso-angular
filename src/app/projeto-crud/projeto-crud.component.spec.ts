import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoCrudComponent } from './projeto-crud.component';

describe('ProjetoCrudComponent', () => {
  let component: ProjetoCrudComponent;
  let fixture: ComponentFixture<ProjetoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
