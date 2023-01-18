export class ExchangeRate {
    country: string;
    currency: string;
    amount: number;
    code: string;
    rate: number;

    constructor(country: string, currency: string, amount: number, code: string, rate: number) {
        this.country = country;
        this.currency = currency;
        this.amount = amount;
        this.code = code;
        this.rate = rate;
    }
}
