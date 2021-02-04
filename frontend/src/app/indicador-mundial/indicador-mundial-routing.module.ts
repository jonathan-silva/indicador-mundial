import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorMundialComponent } from './indicador-mundial.component';
import { IndicadorMundialService } from './indicador-mundial.service';

const routes: Routes = [
  {
    path: '',
    component: IndicadorMundialComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [IndicadorMundialService]
})
export class IndicadorMundialRoutingModule {}
