import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { IndicadorMundialFormComponent } from './indicador-mundial-form/indicador-mundial-form.component';
import { IndicadorMundialListComponent } from './indicador-mundial-list/indicador-mundial-list.component';
import { IndicadorMundialRoutingModule } from './indicador-mundial-routing.module';
import { IndicadorMundialComponent } from './indicador-mundial.component';
import { IndicadorMundialService } from './indicador-mundial.service';
import { IndicadorMundialMessageService } from './messages/indicador-mundial.message.service';

@NgModule({
  declarations: [
    IndicadorMundialComponent,
    IndicadorMundialListComponent,
    IndicadorMundialFormComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, IndicadorMundialRoutingModule],
  exports: [IndicadorMundialListComponent, IndicadorMundialFormComponent],
  providers: [IndicadorMundialService, IndicadorMundialMessageService],
})
export class IndicadorMundialModule {}
