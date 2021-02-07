import { TestBed } from '@angular/core/testing';
import Swal from 'sweetalert2';
import { IndicadorMundialMessageService } from '../messages/indicador-mundial.message.service';

describe('IndicadorMundialMessageService', () => {
  let service: IndicadorMundialMessageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadorMundialMessageService);
  });

  it('Criação da Service IndicadorMundialMessageService', () => {
    expect(service).toBeTruthy();
  });

  describe('Mensagem de Servico Indisponivel ->', () => {
    it('Chamando Mensagem de Servico Indisponivel', () => {
      service.indicadorErroServicoIndisponivel();
      expect(Swal.isVisible()).toBeTruthy();
      expect(Swal.getTitle().textContent).toEqual('Ops!');
      expect(Swal.getContent().textContent).toEqual(
        'Serviço indisponível no momento, tente novamente mais tarde.'
      );
    });
  });
  describe('Mensagem de Servico Erro Generico ->', () => {
    it('Chamando Mensagem de Erro Generico', () => {
      service.indicadorErroGeneric();
      expect(Swal.isVisible()).toBeTruthy();
      expect(Swal.getTitle().textContent).toEqual('Erro!');
      expect(Swal.getContent().textContent).toEqual(
        'Algo de errado aconteceu, tente novamente.'
      );
    });
  });
});
