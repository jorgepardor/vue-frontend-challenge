import { Attribute } from "./Attribute";
import { Image } from "./Image";
export class AccountInfo {
  constructor(userData) {
    this.username = new Attribute(userData.username, "Username", "text");
    this.email = new Attribute(userData.email, "Email", "text");
    this.password = new Attribute(userData.password, "Password", "text", true);
    this.image = new Image(userData.image);

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

