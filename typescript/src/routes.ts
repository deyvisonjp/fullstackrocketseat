import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function olaTypescript(request: Request, response: Response) {
  
  const user = createUser( {
    name: 'Deyvison',
    email: 'deyvison@email.com',
    password: '1234567889',
    techs: [
      'Node.js',
      'React.js',
      { title: 'Javascript', experience: 100},
    ]
  });


  console.log(user.email);

  return response.json({ user })
}