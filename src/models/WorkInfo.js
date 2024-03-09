import { Attribute } from './Attribute'
export class WorkInfo {
  constructor (userData) {
    this.height = new Attribute(userData.height, 'Height', 'number')
    this.companyTitle = new Attribute(userData.company.title, 'Title', 'text')
    this.companyDepartment = new Attribute(
      userData.company.department,
      'Department',
      'text',
    )
    this.companyName = new Attribute(
      userData.company.name,
      'Company Name',
      'text',
    )
    this.companyAddress = new Attribute(
      userData.company.address.address,
      'Address',
      'text',
    )
    this.companyCity = new Attribute(
      userData.company.address.city,
      'City',
      'text',
    )
    this.companyState = new Attribute(
      userData.company.address.state,
      'State',
      'text',
    )
    this.ein = new Attribute(userData.ein, 'EIN', 'text', true)
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
