# Containers Docker
Foram criados dois *containers*, uma chamado *webapp* para a aplicação *REST* em *lumen* e outro *dbapp* para o banco de dados mysql.

O container para banco de dados foi criado com base numa imagem sem modificação, bastando apenas as configurações de usuário *root*, autenticação, portas e volumes. O arquivo para criação do banco de dados é enviado via *volumes* para a pasta padrão do usuário root */root/*.

O *container* para aplicação, apesar de ter *php:7.4-apache* como base, a imagem é construída via *Dockerfile*, personalizando a imagem padrão *apache*. Nela são instaladas as extensões *mysqli*, *pdo* e *pdo_mysql* e o arquivo de configuação **00-default.conf** enviado via comando *COPY* para o container.

Possívelmente, a API Lumen precise da execução *php composer.phar update* para instalação do Lumen e dependências.

Também criei um caso de teste simples, auxiliando a criação da *API Rest Lumen*, a qual pode ser executada com os comandos abaixo:

- docker exec -it webapp /bin/bash
- ./vendor/bin/phpunit --testdox

Lembrando que os comandos de teste só funcionam após a devida instalação dos *containers*.

## Instalação e uso

- docker-compose build
- docker-compose up -d
- docker exec -it dbapp /bin/bash
  - cd <enter> (para entrar na pasta do usuário root)
  - mysql -u root -p (basta usar *"root"* como senha)
  - source create-database.sql<enter> (para cirar o banco de dados, tabelas e inserir dados de teste)

Depois das intruções acima, é possível testar a API REST na porta *8081* do navegador com os seguintes *endpoits*:

- curl -X GET "http://localhost:8081/pessoa" (Lista as pessoas cadastradas)
- curl -X GET "http://localhost:8081/pessoa/3" (Encontra uma pessoa pelo id)
- curl -X POST -d '{"nome":"Lucas", "idade": 32}' "http://localhost:8081/pessoa" (Adiciona uma nova pessoa)
- curl -X PUT -d '{"nome":"Luciana", "idade":25}' "http://localhost/pessoa/4" (Altera uma pessoa)
- curl -X DELETE "http://localhost/pessoa/6" (Remove uma pessoa pelo id)

# NodeJs
Acabei não fazendo um *container docker* para o *nodejs*, mas se usar os comandos padrões, *npm install* e *npm start* é possível verificar o pequeno programa rodando. A ideia foi uma aplicação de exemplo para criar um tópico pub/sub *"avaliacao-pubsub"*, enviar uma mensagem e testar o recebimento da mesma em NodeJs.

Estou enviando um texto contendo um objeto *JSON* que, ao ser recebida, executa uma chamada http para a API Lumen, inserindo um novo cadastro.

Vale notar que foram criados um módulo *api* e um *executor* para uso da *API Lumen*, convertendo chamadas *callback* para *Promises*, facilitando seu uso com comandos *async/await* no código principal do programa.


