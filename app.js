const {httpServer} = require('./server');

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Servidor andando en: ${PORT}`)
});
