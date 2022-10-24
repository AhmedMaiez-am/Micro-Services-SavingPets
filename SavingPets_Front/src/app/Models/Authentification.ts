export class Authentification {
  cin?: string;
  mdp?: string;

  constructor(cin?: string, mdp?: string) {
    this.cin = cin;
    this.mdp = mdp;
  }
}
