import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { coreAnimations } from '../../shared/animations';
import { IndicadorMundial } from '../indicador-mundial.model';
import { IndicadorMundialService } from '../indicador-mundial.service';

@Component({
  selector: 'app-indicador-mundial-list',
  templateUrl: './indicador-mundial-list.component.html',
  styleUrls: ['./indicador-mundial-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: coreAnimations,
})
export class IndicadorMundialListComponent implements OnInit, OnDestroy {
  private readonly _unsubscribeAll: Subject<any>;
  indicadores: any[] = [];
  displayedColumns = ['data', 'cod_pais', 'nm_pais', 'value'];

  length = 50;
  currentPage = 1;
  totalPages = 0;
  pageSize = 5;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 20];

  public indicadorFilter: any = {};

  constructor(
    private readonly _ngxLoader: NgxUiLoaderService,
    private readonly _indicadorService: IndicadorMundialService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.onChangeIndicador();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * @description Busca indicadores no datasource da service
   * @returns {void} void
   */
  onChangeIndicador(): void {
    this._indicadorService.onIndicadorChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((response) => {
        this.indicadores = response;
        this.length = response[0].total === undefined ? 0 : response[0].total;
        if (this.indicadores[1].length !== 0) {
          this.checkList(this.indicadores[1]);
        }
      });
  }

  /**
   * @description Checa o retorno do backend, e cria datasource
   * @param indicadoresList
   * @returns {IndicadorMundial[]} IndicadorMundial[]
   */
  checkList(indicadoresList: any): IndicadorMundial[] {
    if (!indicadoresList.length) {
      indicadoresList = [indicadoresList];
    }
    this.indicadores = indicadoresList.map((indicador) => {
      return new IndicadorMundial(indicador);
    });
    this._ngxLoader.stopAll();
    return this.indicadores;
  }

  /**
   * @description Serviço de consulta com paginacao
   * @param {$event} event
   */
  paginationServerSide(event): any {
    this.indicadorFilter.perPage = event.pageSize;
    this.indicadorFilter.nextPageIndex = event.pageIndex + 1;
    this.indicadorFilter.previousPageIndex = event.previousPageIndex + 1;
    this.indicadorFilter.current_page = event.pageIndex + 1;
    this._ngxLoader.start();
    this._indicadorService.getIndicators(
      'BR',
      this.indicadorFilter.current_page,
      this.indicadorFilter.perPage
    );
  }
}
