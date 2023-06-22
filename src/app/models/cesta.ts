export class Cesta {
    public sessionId: String;
    public codcliente: Number;
    public codproduto: Number;
    public quantidade: Number;
    public valorunitario: Number;
    public valortotal: Number;

    public constructor() {
        this.sessionId = '';
        this.codcliente = 0;
        this.codproduto = 0;
        this.quantidade = 0;
        this.valorunitario = 0;
        this.valortotal = 0;
      }
}

