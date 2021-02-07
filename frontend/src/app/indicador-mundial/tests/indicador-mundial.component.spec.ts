import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { IndicadorMundialRoutingModule } from '../indicador-mundial-routing.module';
import { IndicadorMundialComponent } from '../indicador-mundial.component';
describe('ExemploFormComponent', () => {
  let component: IndicadorMundialComponent;
  let fixture: ComponentFixture<IndicadorMundialComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicadorMundialComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        IndicadorMundialRoutingModule,
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .overrideComponent(IndicadorMundialComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorMundialComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    fixture.autoDetectChanges(true);
    de = fixture.debugElement.query(By.css('.indicador-mundial-main'));
  });

  it('Criacao do Componente IndicadorMundialComponent', () => {
    expect(component).toBeTruthy();
  });
  it('DIV IndicadorMundialFormComponent', () => {
    de = fixture.debugElement.query(By.css('.indicador-mundial-form'));
    expect(de).toBeTruthy();
  });
});
