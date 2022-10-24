import { Image } from "./Image";


export class User {
  id: any;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
  cin: string;
  mdp: string;
  confirmMdp: string;
  dateNaissance: Date;
  roles: string[];
  accessToken: string;


  constructor(cin?: string, nom?: string, prenom?: string) { }
}
