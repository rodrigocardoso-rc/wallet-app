import { cardNumber, expirationDate, ownerName, securityCode } from "./CardValidator"

describe('CardValidator', () => {
  describe('cardNumber', () => {
    it('should be valid card number', () => {
      const cardNumberValue = '3529543533558727'
      expect(cardNumber(cardNumberValue)).toBe(true)
    })

    it('should be a invalid card number with less than 16 digits', () => {
      const cardNumberValue = '352954353355'
      expect(cardNumber(cardNumberValue)).toBe(false)
    })

    it('should be a invalid card number with more than 16 digits', () => {
      const cardNumberValue = '35295435335587278727'
      expect(cardNumber(cardNumberValue)).toBe(false)
    })

    it('should be a invalid card number with special characters', () => {
      const cardNumberValue = '3529-5435-3355- 8727'
      expect(cardNumber(cardNumberValue)).toBe(false)
    })
  })

  describe('expirationDate', () => {
    it('should be valid expiration date', () => {
      const expirationDateValue = '1007'
      expect(expirationDate(expirationDateValue)).toBe(true)
    })

    it('should be a invalid expiration date with less than 4 digits', () => {
      const expirationDateValue = '123'
      expect(cardNumber(expirationDateValue)).toBe(false)
    })

    it('should be a invalid expiration date with more than 4 digits', () => {
      const expirationDateValue = '12345'
      expect(cardNumber(expirationDateValue)).toBe(false)
    })

    it('should be a invalid expiration date with special characters', () => {
      const expirationDateValue = '12/34'
      expect(cardNumber(expirationDateValue)).toBe(false)
    })

    it('should be a invalid expiration date with invalid month', () => {
      const expirationDateValue = '14/34'
      expect(cardNumber(expirationDateValue)).toBe(false)
    })
  })

  describe('ownerName', () => {
    it('should be valid owner name', () => {
      const ownerNameValue = 'John Doe'
      expect(ownerName(ownerNameValue)).toBe(true)
    })

    it('should be invalid owner name with only one name', () => {
      const ownerNameValue = 'John'
      expect(ownerName(ownerNameValue)).toBe(false)
    })

    it('should be invalid owner name with special characters', () => {
      const ownerNameValue = 'John .'
      expect(ownerName(ownerNameValue)).toBe(false)
    })
  })

  describe('securityCode', () => {
    it('should be valid security code', () => {
      const securityCodeValue = '317'
      expect(securityCode(securityCodeValue)).toBe(true)
    })

    it('should be invalid security code with more than 3 digits', () => {
      const securityCodeValue = '3171'
      expect(securityCode(securityCodeValue)).toBe(false)
    })

    it('should be invalid security code with less than 3 digits', () => {
      const securityCodeValue = '31'
      expect(securityCode(securityCodeValue)).toBe(false)
    })
  })
})
