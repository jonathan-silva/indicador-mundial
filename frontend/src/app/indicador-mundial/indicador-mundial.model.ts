export class IndicadorMundial {
  'indicator': {
    'id': string,
    'value': string
  };
  'country': {
    'id': string,
    'value': string
  };
  'countryiso3code': string;
  'date': string;
  'value': number;
  'unit': string;
  'obs_status': string;
  'decimal': number;

  /**
   * Constructor
   * @param indicador
   */
  constructor(indicador) {
    {
      this.indicator = indicador.indicator || {};
      this.country = indicador.country || {};
      this.countryiso3code = indicador.countryiso3code || '';
      this.date = indicador.date || '';
      this.value = indicador.value || null;
      this.unit = indicador.unit || '';
      this.obs_status = indicador.obs_status || '';
      this.decimal = indicador.decimal || null;
    }
  }
}
