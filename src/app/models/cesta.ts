export class Cesta {
  public sessionId: String;
  public codcliente: Number | null;
  public codproduto: Number;
  public descricaoproduto: String;
  public quantidade: Number;
  public valorunitario: Number;
  public valortotal: Number;

  public constructor() {
    this.sessionId = '';
    this.codcliente = 0;
    this.codproduto = 0;
    this.descricaoproduto = '';
    this.quantidade = 0;
    this.valorunitario = 0;
    this.valortotal = 0;
  }
}
