const app = require ("./src/app/app")

const puerto = process.env.PORT || 3002;

app.listen(puerto, () => {
    console.log(`####### servidor ejecutandose en el puerto: ${puerto} #######`)
});