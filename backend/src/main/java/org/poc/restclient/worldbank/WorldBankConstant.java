package org.poc.restclient.worldbank;

public final class WorldBankConstant {

    private WorldBankConstant() { }

    public static final String GET_COD_PAIS = "Pesquisa pelo codigo do pais, e retorna os índices históricos de pobreza referente ao país.";
    public static final String GET_COD_PAIS_STATUS_NOT_FOUND = "Não foi encontrado o código do pais informado";
    public static final String GET_COD_PAIS_STATUS_OK = "Sucesso!";
    public static final String DESCRIPTION_CHECK_PARAMS_NOT_NULL = "Checa se todos os parâmetros informados não são null";
    public static final String PARAMS_REQUIRED = "Parâmetros cod_pais, page e perPage, format são obrigatórios.";
    public static final String API_INFO_WORLD_BANK = "Proxy reverso para api do banco mundial para buscar indices.";
}
