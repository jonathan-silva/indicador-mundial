import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class IndicadorMundialMessageService {
  constructor() {}

  /**
   * @description Retorno generico de Erro do backend
   * @return {void}
   */
  indicadorErroGeneric(): void {
    Swal.fire({
      title: 'Erro!',
      text: 'Algo de errado aconteceu, tente novamente.',
      type: 'error',
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  /**
   * @description Retorno generico de Erro do backend
   * @return {void}
   */
  indicadorErroNaoEncontrado(msg: string): void {
    Swal.fire({
      title: 'Ops!',
      text: msg,
      type: 'error',
      timer: 3000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }
}
