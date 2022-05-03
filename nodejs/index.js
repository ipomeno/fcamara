/*
 * Testando API Rest Lumen
 */
const executor = require('./src/executor');
const {PubSub} = require('@google-cloud/pubsub');

// executor.listar();
// executor.criar({nome: 'Lucas', idade: 32});
// executor.alterar();
// executor.apagar();

/*
 * Testando integração Google Pub/Sub + NodeJs
 */
async function execute (projectId, topicName, subscriptionName) {
  const pubsub = new PubSub({projectId});
  const [topic] = await pubsub.createTopic(topicName);
  console.log(`Topic ${topic.name} criado`);

  const [subscription] = await topic.createSubscription(subscriptionName);
  subscription.on('message', message => {
    console.log('Mensagem recebida:', message.data.toString());
    let json = JSON.parse(message.data.toString());

    try {
      executor.criar(json);
      executor.listar();
    }
    catch(error) {
      console.error(error);
    }
    
    process.exit(0);
  });

  subscription.on('error', error => {
    console.error('Erro recebido:', error);
    process.exit(1);
  });

  topic.publishM(Buffer.from('{"nome": "Luciano", "idade": 27}'));
}

execute('avaliacao-pubsub', 'ntopic', 'nsub');