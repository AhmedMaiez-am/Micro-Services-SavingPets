export class UpdatePassword {
  cin?: string;
  nMdp?: string;
  cNMdp?: string;


  constructor(cin?: string, mdp?: string, cNMdp?: string) {
    this.cin = cin;
    this.nMdp = mdp;
    this.cNMdp = cNMdp;
  }
}
