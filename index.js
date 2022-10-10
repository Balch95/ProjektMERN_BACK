const express = require('express')
const cors = require('cors')

const app = express()
const port = 5050

const studentApi = require('./app/api/studnetsApi')
const eventsApi = require('./app/api/eventsApi')
const citiesApi = require('./app/api/citiesApi')

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/students', studentApi)
app.use('/api/events', eventsApi)
app.use('/api/cities', citiesApi)


app.listen(port)