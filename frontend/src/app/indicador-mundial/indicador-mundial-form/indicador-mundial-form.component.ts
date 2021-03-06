import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { coreAnimations } from '../../shared/animations';
import { IndicadorMundialService } from '../indicador-mundial.service';

@Component({
  selector: 'app-indicador-mundial-form',
  templateUrl: './indicador-mundial-form.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: coreAnimations,
})
export class IndicadorMundialFormComponent implements OnInit {
  indicadorForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _ngxLoader: NgxUiLoaderService,
    private readonly _indicadorService: IndicadorMundialService
  ) {
    this.indicadorForm = this.createIndicadorForm();
  }

  ngOnInit(): void {}

  createIndicadorForm(): FormGroup {
    return this._formBuilder.group({
      cod_pais: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(2)],
      ],
    });
  }

  pesquisaCodPais(): void {
    this._ngxLoader.start();
    this._indicadorService.getIndicators(
      this.indicadorForm.getRawValue().cod_pais
    );
    this.indicadorForm.reset();
  }
}
