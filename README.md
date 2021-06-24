# TempoTelecom-BackEnd

## Pré-requisitos para o setup:

Baixe na sua máquina as seguintes dependências:

* Nodejs
* Postgres

## Ambiente

* O BackEnd será executado na porta 5000

## Instalação

1. Baixe o diretório para sua máquina 

```
git clone https://github.com/carlos-504/TempoTelecom-BackEnd.git
```

2. Execute o seguinte comando para baixar as dependências 

```
npm install
```

3. Crie um banco de dados (Postgres) em sua máquina com nome 'tempo_telecom'

```
CREATE DATABASE tempo_telecom;
```

4. Após a criação do banco de dados execute as migrations

```
npx sequelize-cli db:migrate
```

5. Após a criação das tabelas (migrations), execute o seed para popular o banco

```
npx sequelize-cli db:seed:all
```
6. Em caso de erro, verifique se credenciais do arquivo config.json e compátivel com os da sua máquina

## REST API
O sistema conta com uma API para realizar os CRUDS. 
A API segue o protocolo Rest de comunicação, onde é possível realizar uma comunicação com o servidor para obter, incluir ou remover os dados do banco. 

**Obs.:** Ao utilizar a API, envie sempre os cabeçalhos obrigatórios:

	"Accept: application/json
	"Content-Type: application/json"
