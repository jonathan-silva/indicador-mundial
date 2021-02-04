import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { coreAnimations } from '../shared/animations';
import { IndicadorMundialService } from './indicador-mundial.service';

@Component({
  selector: 'app-indicador-mundial',
  templateUrl: './indicador-mundial.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: coreAnimations,
})
export class IndicadorMundialComponent implements OnInit, OnDestroy {
  private readonly _unsubscribeAll: Subject<any>;
  showListIndicadores = false;

  constructor(
    private readonly _indicadorService: IndicadorMundialService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._indicadorService.onIndicadorChanged
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((response) => {
      if(response.length >= 1) return this.showListIndicadores = true;
    });
  
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
