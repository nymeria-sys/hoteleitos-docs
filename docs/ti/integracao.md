---
sidebar_position: 1
---
# Integração

https://dev.api.hoteleitos.com.br/api-docs

O sistema HOTELEITOS será implementado em seu hospital de maneira integrada. Para garantir sua eficácia, é crucial que tenhamos acesso às informações sobre os pacientes que estão internados no dia corrente. A integração do seu sistema ao HOTELEITOS possibilitará a correta alocação dos pacientes nos leitos disponíveis e a identificação imediata de quaisquer altas hospitalares.

Os dados necessários são (nem todos são obrigatórios):

| Campo                     | Descrição                                                                     |
| ------------------------- | ------------------------------------------------------------------------------- |
| cod_ocorrencia            | Código da ocorrência do atendimento único para cada atendimento              |
| cod_quarto                | codigo unico do quarto onde ele está internado                                 |
| cod_leito                 | codigo unico do leito onde ele está internado                                  |
| convenio_codigo           | Código unico do convenio deste paciente                                        |
| convenio_nome             | descrição do convenio                                                         |
| data_internacao           | data da internação deste paciente YYYY-MM-DD                                  |
| paciente_nome             | Nome do paciente                                                                |
| paciente_codigo           | codigo unico do paciente (alguns sistemas consideram como numero de prontuario) |
| paciente_data_nascimento  | Data de nascimento do paciente                                                  |
| paciente_sexo             | Sexo do paciente                                                                |
| profissional_cbos         | cbos do profissional responsavel pela internacao                                |
| profissional_nome         | nome do profissional responsavel pela internacao                                |
| profissional_codigo       | codigo do profissional responsavel pela internacao                              |
| tipo_ocorrencia_codigo    | codigo do tipo de ocorrencia                                                    |
| tipo_ocorrencia_descricao | descrição do tipo de ocorrencia                                               |

Vale lembrar que os dados acima são referentes aos pacientes que estão internados no momento da consulta.

Esses dados são enviados para o sistema de hotelaria que cria uma visualização em tempo real da ocupação.

Para facilitar a ingestão de dados, oferecemos duas abordagens flexíveis:

1. Envio direto de informações ao nosso sistema por meio de uma API REST.
2. Implementação de um container em sua infraestrutura, que já vem integrado com MV, Wareline e Sigho.

Escolha a opção que melhor atende às suas necessidades.

Em ambos os casos você receberá sua API_URL e também seu Token de integração.
