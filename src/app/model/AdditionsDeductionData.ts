export class AdditionsDeductions {

  private id: number;
  private code: string;
  private currency: string;
  private amount: number;

  get AdditionDeductionId() {
    return this.id;
  }

  set AdditionDeductionId(value) {
    this.id = value;
  }

  get Code() {
    return this.code;
  }
  set Code(value) {
    this.code = value;
  }

  get Currency() {
    return this.currency;
  }
  set Currency(value) {
    this.currency = value;
  }


  get Amount() {
    return this.amount;
  }
  set Amount(value) {
    this.amount = value;
  }

  constructor() {
    this.id = 0;
    this.code = '';
    this.currency = '';
    this.amount = 0.00;
  }
}
