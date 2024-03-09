import { Attribute } from './Attribute'
export class HealthInfo {
  constructor (userData) {
    this.height = new Attribute(userData.height, 'Height', 'number')
    this.weight = new Attribute(userData.weight, 'Weight', 'number')
    this.bloodGroup = new Attribute(userData.bloodGroup, 'Blood group', 'text')
    this.eyeColor = new Attribute(userData.eyeColor, 'Eye Color', 'text')
    this.hairColor = new Attribute(userData.hair.color, 'Hair Color', 'text')
    this.hairType = new Attribute(userData.hair.type, 'Hair Type', 'text')
    this.university = new Attribute(userData.university, 'University', 'text')
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
