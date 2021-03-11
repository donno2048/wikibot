const venom = require('venom-bot');
const wiki = require('wikipedia');
venom.create({disableWelcome: true}).then((client) => start(client))
function start(client) {
  client.onAnyMessage(async (message) => {
    if (message.body.slice(0, 1) === "~") {
      wiki.summary(message.body.substr(1)).then(sum => client.sendText(message.from, sum.extract))
    }
  })
}
