import { Attribute } from "./Attribute";
export class PersonalInfo {
  constructor(userData) {
    this.firstName = new Attribute(userData.firstName, "First Name", "text");
    this.maidenName = new Attribute(userData.maidenName, "Maiden Name", "text");
    this.lastName = new Attribute(userData.lastName, "Last Name", "text");
    this.phone = new Attribute(userData.phone, "Phone", "text");
    this.age = new Attribute(userData.age, "Age", "number");
    this.birthDate = new Attribute(userData.birthDate, "Birth Date", "date");
    this.university = new Attribute(userData.university, "University", "text");
    this.ssn = new Attribute(userData.ssn, "SSN", "text", false, true);
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
