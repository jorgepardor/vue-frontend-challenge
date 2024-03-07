import { Attribute } from "./Attribute";
import { Location } from "./Location";
export class AddressInfo {
  constructor(userData) {
    this.address = new Attribute(userData.address.address, "Address", "text");
    this.city = new Attribute(userData.address.city, "City", "text");
    this.postalCode = new Attribute(userData.address.postalCode, "Postal Code", "text");
    this.state = new Attribute(userData.address.state, "State", "text");
    this.location = new Location(userData.address.coordinates.lat, userData.address.coordinates.lng);
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
