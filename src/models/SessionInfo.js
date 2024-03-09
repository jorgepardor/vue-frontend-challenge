import { Attribute } from './Attribute'
export class SessionInfo {
  constructor (userData) {
    this.domain = new Attribute(userData.domain, 'Domain', 'text', true, true)
    this.ip = new Attribute(userData.ip, 'IP', 'text', true, true)
    this.macAddress = new Attribute(
      userData.macAddress,
      'MAC Address',
      'text',
      true,
      true,
    )
  }

  getAllAttributes () {
    const attributes = []
    for (const key in this) {
      if (this[key] instanceof Attribute) {
        const attr = this[key]
        attributes.push({
          keyPath: attr.keyPath,
          value: attr.value,
          label: attr.label,
          type: attr.type,
          isSensitive: attr.isSensitive || false,
          isBlocked: attr.isBlocked || false,
        })
      }
    }
    return attributes
  }
}
