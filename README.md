## Indicador Histórico de Pobreza Mundial

Branch => **master**

Ferramentas utilizadas:

1. FrontEnd Angular=> **v11**
2. BackEnd Quarkus => **v1.11.1.Final**

## Iniciando aplicação

Primeiramente, deve-se realizar a instalação das dependências maven com o comando abaixo:

```bash
docker-compose up --build maven
```

No diretório raiz do repositorio contém um arquivo `docker-compose.yml`, execute o comando abaixo, que automaticamente irá levantar
o container do frontend, e backend.

```bash
docker-compose up --build app
```

![plot](./imagens/image1.png)

![plot](./imagens/image2.png)

Após executar o procedimento, pode prosseguir com outros passos.

## Angular (frontend)

Utilizando browser de sua preferência, acesse o endereço.

```
http://localhost:4200
```

![plot](./imagens/image3.png)

Com layout bem simples conseguimos testar algumas funcionalidades, e integrações com serviço.

Está sendo utilizando um proxy reverso entre FrontEnd e BackEnd,
o mesmo está dentro do diretório `frontend/proxy.json`.

```json
{
  "/api/*": {
    "target": "http://quarkus:8080/quarkus",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/*": ""
    }
  },
  "/quarkus/*": {
    "target": "http://quarkus:8080/quarkus",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/quarkus/*": ""
    }
  }
}
```

Com isso todas requisições chamando o <b>/api</b> é efetuado um rewrite para o backend.

No <b>environment.ts</b> é declarado apenas a propriedade `urlApi` com valor `api`.

![plot](./imagens/image4.png)

Efetuando algumas consultas no frontend temos a funcionalidade de acordo como foi solicitado.

![plot](./imagens/image5.png)

![plot](./imagens/image6.png)

Foram adicionados alguns testes sendo eles: componente, html, dialogs, e requisições para fins de exemplo.
Aplicação contém exemplos de: animações de pesquisa, loading de tela e consulta, paginação, tratamento de erros, e entre outros.

![plot](./imagens/image7.png)
Foi passado aplicação no Code Quality também (Sonar) para demonstração.
![plot](./imagens/image9.png)
Usando o perfil que contém 134 regras de TypeScript.

## Quarkus (backend)

Para acessar a documentação de API's(Swagger) do microserviço, acesse no browser a url:

```
http://localhost:4200/api/q/swagger-ui/
```

![plot](./imagens/image11.png)

Code Quality do backend.
![plot](./imagens/image10.png)

# Como navegar no app

1. No input para digitar o código do país informe algum código referente a API WorldBank, para pesquisar:
   http://api.worldbank.org/v2/country

2. Logo Depois clique em Pesquisar.
   ![plot](./imagens/image3.png)

3. Efetuará a pesquisa, já preenchendo a tabela, e com paginação deseja pelo usuário.
   ![plot](./imagens/image12.png)

4. Caso não encontre notificara uma mensagem de erro.
   ![plot](./imagens/image13.png)

5. Também tem mensagem de erro para tratamento de erro do backend, e se o serviço estiver indisponivél.

Att.
