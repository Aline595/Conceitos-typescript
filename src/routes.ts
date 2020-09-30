import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, Array
//interface

export function helloWorld (request: Request, response: Response) {
  const user = createUser({
    email: 'aline.as385@gmail.com',
    password: '123456',
    techs: [
      'Node',
      "ReactJS", 
      'React Native', 
      { title: 'Javascript', experience: 100 },
    ],
  });

  return response.json({message: 'Hello word'});
}