export class Attribute {
  constructor(keyPath, label, type, isBlocked = false, isSensitive = false) {
    this.keyPath = keyPath;
    this.label = label;
    this.type = type;
    this.isBlocked = isBlocked;
    this.isSensitive = isSensitive;
  }
}
