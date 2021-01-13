import { request, response } from "express";

import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => 
  response.json({ message: 'Projeto Node'}),
);

export default routes;