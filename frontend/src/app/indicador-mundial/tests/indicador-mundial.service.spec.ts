import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IndicadorMundialService } from '../indicador-mundial.service';

describe('IndicadorMundialService ->', () => {
  let service: IndicadorMundialService;
  let mockId: number;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IndicadorMundialService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IndicadorMundialService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Criação da Service IndicadorMundialService', () => {
    expect(service).toBeTruthy();
  });

  describe('Get Paginate IndicadorMundialService ->', () => {
    const perPage = '5';
    const page = '1';
    const codPais = 'BR';
    const mockIndicador = {};
    it('Busca indices historicos API', () => {
      service
        .getIndicators(codPais, page, perPage)
        .then(
          (exemplo: any) =>
            expect(exemplo).toEqual(
              mockIndicador,
              'Deve trazer pelo menos um registro'
            ),
          (error: any) => expect(error.status).toEqual(500)
        )
        .catch((error) => expect(error.status).toEqual(500));

      const req = httpTestingController.expectOne(
        `${service._restService}${codPais}?format=json&page=${page}&per_page=${perPage}`
      );
      expect(req.request.responseType).toEqual('json');
      req.flush(mockIndicador);
    });
  });
});
