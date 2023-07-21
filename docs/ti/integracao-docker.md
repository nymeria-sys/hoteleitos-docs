---
sidebar_position: 1
---

# Integração utilizando Docker

Aproveite a versatilidade e a facilidade do Docker para integrar perfeitamente sua base de dados local ao sistema de gerenciamento de leitos. Com essa integração eficiente, você ganha agilidade, segurança e controle para otimizar o gerenciamento hospitalar de forma intuitiva e eficaz. 

Recomendamos a instalação do Docker em um ambiente Linux, e você pode seguir os tutoriais da Digital Ocean para auxiliar nesse processo. Verifique a versão e ambiente do seu sistema operacional. No exemplo a seguir, utilizaremos o Ubuntu 20.04.

**Instalando o Docker:**
- Tutorial para instalação e uso do Docker no Ubuntu 20.04: [How To Install and Use Docker on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

Para facilitar a orquestração do ambiente, recomendamos a utilização do Docker Compose.

**Instalando o Docker Compose:**
- Tutorial para instalação e uso do Docker Compose no Ubuntu 20.04: [How To Install and Use Docker Compose on Ubuntu 20.04 (PT)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt)

## Configure as variáveis de ambiente
```
# dialeto do banco de dados pode ser mysql, postgres, mssql, sqlite, mariadb, native_postgres
DB_DIALECT=postgres
# host do banco de dados
DB_HOST=localhost
# porta do banco de dados
DB_PORT=5432

# nome do banco de dados
DB_NAME=integrador
# usuario do banco de dados
DB_USER=postgres
# senha do banco de dados
DB_PASS=***

# url da api
API_URL=https://dev.api.hoteleitos.com.br
# token da api
API_TOKEN=******
# integracoes disponiveis: wareline_mapa 
ENABLED_INTEGRATIONS=test
# tempo de execucao do cron de sincronia
# padrao: de 30 em 30 segundos
# consulte: https://crontab-generator.org/
CRON_TIME=*/30 * * * * *
```

Atenção API_URL e API_TOKEN serão fornecidos pelo time de produto.

Para versões do postgres anteriores ou iguais a 9.1, utilize DB_DIALECT=native_postgres.

### Selecionando versão do sistema

No momento possuímos integração com os seguintes sistemas de gerenciamento hospitalar:
- Sigho
- Wareline

Você deve definir a variável de ambiente ENABLED_INTEGRATIONS para selecionar o tipo da sua integração.

Para Wareline, utilize:
```
ENABLED_INTEGRATIONS=wareline_mapa
```
Para SIGHO, utilize:
```
ENABLED_INTEGRATIONS=sigho_mapa
```
## Configure o docker-compose.yml
```
version: "3.8"
services:
  hoteleitos:
    image: "ghcr.io/nymeria-sys/hoteleitos-integrador-prod:latest"
    container_name: hoteleitos
    restart: always
    volumes:
      - "./log:/app/log"
    env_file:
      - ./.env
```

### Explicando cada linha
```
version: "3.8"
```
Define a versão da especificação do Compose usada neste arquivo YAML. Neste caso, a versão 3.8 é usada, que é uma das versões mais recentes e possui várias funcionalidades avançadas.
```
services:
  hoteleitos:
```
Início da seção "services", onde são definidos os serviços do Docker Compose. Neste caso, há um serviço chamado "hoteleitos".
```
image: "ghcr.io/nymeria-sys/hoteleitos-integrador-prod:latest"
```
Especifica a imagem Docker a ser usada para criar o contêiner do serviço "hoteleitos". Neste caso, a imagem é "ghcr.io/nymeria-sys/hoteleitos-integrador-prod:latest", que está hospedada no GitHub Container Registry. O ":latest" indica que a última versão da imagem será usada.
```
restart: always
```
Define a política de reinicialização do contêiner em caso de falha ou quando o Docker daemon é reiniciado. Neste caso, o contêiner será sempre reiniciado, independentemente da razão da parada.
```
volumes:
  - "./log:/app/log"
```
Define um volume para ser montado dentro do contêiner. Neste caso, o diretório local "./log" será montado dentro do diretório "/app/log" no contêiner. Isso permite que os logs gerados dentro do contêiner sejam persistidos no sistema de arquivos local.
```
env_file:
  - ./.env
```
Especifica um arquivo de ambiente que será lido para definir variáveis de ambiente dentro do contêiner. Neste caso, o arquivo "./.env" será lido e as variáveis de ambiente definidas nele serão usadas no contêiner do serviço "hoteleitos".