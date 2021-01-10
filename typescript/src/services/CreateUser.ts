//Interface - Para definir o tipo de um conjunto de informações

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // A '?' da a condição de que a variável pode ser opcional (name= '')
  email: string;
  password: string;
  techs: Array<string | TechObject> // '|' = ou
  // se não houvesse dois tipos dentro da array poderiamos . . . techs: string[];
}


export default function createUser({ name= '', email, password }: CreateUserData) {
   const user = {
     name,
     email,
     password,
   }

   return user;
}