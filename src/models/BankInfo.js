import { Attribute } from "./Attribute";
export class BankInfo {
  constructor(userData) {
    this.bankCurrency = new Attribute(
      userData.bank.currency,
      "Currency",
      "text"
    );
    this.bankCardType = new Attribute(
      userData.bank.cardType,
      "Card Type",
      "text"
    );
    this.bankCardNumber = new Attribute(
      userData.bank.cardNumber,
      "Card Number",
      "text",
      true
    );
    this.bankCardExpire = new Attribute(
      userData.bank.cardExpire,
      "Card Expire Date",
      "text"
    );
    this.bankIban = new Attribute(userData.bank.iban, "IBAN", "text", true);
  }

  getAllAttributes() {
    const attributes = [];
    for (const key in this) {
      if (this[key] instanceof Attribute) {
        const attr = this[key];
        attributes.push({
          keyPath: attr.keyPath,
          value: attr.value,
          label: attr.label,
          type: attr.type,
          isSensitive: attr.isSensitive || false,
          isBlocked: attr.isBlocked || false,
        });
      }
    }
    return attributes;
  }
}
