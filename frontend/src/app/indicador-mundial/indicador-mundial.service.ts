import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IndicadorMundial } from './indicador-mundial.model';
import { IndicadorMundialMessageService } from './messages/indicador-mundial.message.service';

@Injectable({
  providedIn: 'root',
})
export class IndicadorMundialService {
  private readonly _restService = `${environment.urlApi}/world-bank/`;

  onIndicadorChanged: BehaviorSubject<any>;
  indicadores: IndicadorMundial[] = [];
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _ngxLoader: NgxUiLoaderService,
    private readonly _messageIndicadorMundial: IndicadorMundialMessageService
  ) {
    this.onIndicadorChanged = new BehaviorSubject([]);
  }

  /**
   * @description Busca lista paginada de indices do pais informado
   * @method GET
   * @returns {Promise} Promise
   */
  getIndicators(
    codPais: string,
    page?: string,
    perPage?: string
  ): Promise<any> {
    page = page === undefined ? '1' : page;
    perPage = perPage === undefined ? '5' : perPage;
    return new Promise((resolve) => {
      this._httpClient
        .get(
          `${this._restService}${codPais}?format=json&page=${page}&per_page=${perPage}`
        )
        .subscribe((response: HttpResponse<any>) => {
          let callBack: any;
          callBack = response;
          this.indicadores = callBack;
          this.onIndicadorChanged.next(this.indicadores);
          resolve(response);
        },
        (error: HttpErrorResponse) => {
          this._ngxLoader.stopAll();
          if(error.status === 504) {
            this._messageIndicadorMundial.indicadorErroServicoIndisponivel();
          } else {
            this._messageIndicadorMundial.indicadorErroNaoEncontrado(error.error);
          }
        });
    });
  }
}
