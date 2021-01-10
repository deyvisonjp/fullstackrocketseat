import express from 'express';
import { olaTypescript } from './routes';

const app = express();

app.get('/', olaTypescript);

app.listen(3333); 