export class Cliente {
  doLogin(cliente: Cliente) {
    throw new Error('Method not implemented.');
  }
  public codigo: Number;
  public nome: String;
  public senha: String;
  public email: String;
  public telefone: Number;
  public cpf: Number;

  public constructor() {
    this.codigo = NaN;
    this.nome = '';
    this.senha = '';
    this.email = '';
    this.telefone = 0;
    this.cpf = 0;
  }
}
