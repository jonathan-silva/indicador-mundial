import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { IndicadorMundial } from './indicador-mundial.model';
import { IndicadorMundialMessageService } from './messages/indicador-mundial.message.service';

@Injectable({
  providedIn: 'root',
})
export class IndicadorMundialService {
  private readonly _restService = `${environment.urlApi}`;

  onIndicadorChanged: BehaviorSubject<any>;
  indicadores: IndicadorMundial[] = [];
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _messageIndicadorMundial: IndicadorMundialMessageService
  ) {
    this.onIndicadorChanged = new BehaviorSubject([]);
  }

  onChangePessoa(response: any): any {
    this.indicadores.push(response);
    this.onIndicadorChanged.next(this.indicadores);
  }

  /**
   * @description Visualizar Pessoas
   * @method GET
   * @returns {Promise} Promise
   */
  getIndicators(
    codPais: string,
    page?: string,
    perPage?: string
  ): Promise<any> {
    page = page == undefined ? '1' : page;
    perPage = perPage == undefined ? '5' : perPage;
    return new Promise((resolve) => {
      this._httpClient
        .get(
          `${this._restService}${codPais}/indicator/SI.POV.DDAY?page=${page}&per_page=${perPage}&format=json`
        )
        .subscribe((response: any) => {
          if (response[0].message) {
            this._messageIndicadorMundial.indicadorErroNaoEncontrado();
          } else {
            this.indicadores = response;
            this.onIndicadorChanged.next(this.indicadores);
          }
          resolve(response);
        });
    });
  }
}
