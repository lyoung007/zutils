function isJSON (str: string | any): boolean {
  if (typeof str === 'string') {
    try {
      const obj: object = JSON.parse(str)
      if (obj && typeof obj === 'object') {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
  return false
}

export default isJSON