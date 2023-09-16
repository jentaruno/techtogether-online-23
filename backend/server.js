const express = require('express');
const cors = require('cors');
const initRouter = require('./routes/init');
const createPetitionRouter = require('./routes/createPetition')
const getPetitionRouter = require('./routes/getPetition')
const getAllPetitionsRouter = require('./routes/getAllPetitions')
const deletePetitionRouter = require('./routes/deletePetition')
const signPetitionRouter = require('./routes/signPetition')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/init', initRouter);
app.use('/petitions/create', createPetitionRouter);
app.use('/petitions/delete', deletePetitionRouter);
app.use('/petitions/sign', signPetitionRouter);
app.use('/petitions/get', getPetitionRouter);
app.use('/petitions', getAllPetitionsRouter);

app.listen(8080, () => console.log('API is running on http://localhost:8080'));