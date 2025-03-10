import {
  applyMaskCardNumber,
  applyMaskExpirationDate,
  applyMaskHideCardNumber
} from '../CardMasks'

describe('CardMasks', () => {
  describe('applyMaskCardNumber', () => {
    it('should return the number of the masked card, receiving only numbers', () => {
      const cardNumber = '3529543533558727'
      expect(applyMaskCardNumber(cardNumber)).toBe('3529 5435 3355 8727')
    })

    it('should return the number of the masked card, receiving numbers and spaces', () => {
      const cardNumber = '3529 5435 3355 8727'
      expect(applyMaskCardNumber(cardNumber)).toBe('3529 5435 3355 8727')
    })

    it('should return the number of the masked card, receiving numbers and special characters', () => {
      const cardNumber = '3529-5435-3355-8727'
      expect(applyMaskCardNumber(cardNumber)).toBe('3529 5435 3355 8727')
    })
  })

  describe('applyMaskHideCardNumber', () => {
    it('should return a masked card number displaying only the last 4 digits', () => {
      const cardNumber = '3529543533558727';
      expect(applyMaskHideCardNumber(cardNumber)).toBe('**** **** **** 8727');
    })

    it('should return a masked card number displaying only the last 4 digits, receiving numbers and spaces', () => {
      const cardNumber = '3529-5435-3355-8727'
      expect(applyMaskHideCardNumber(cardNumber)).toBe('**** **** **** 8727')
    })

    it('should return a masked card number displaying only the last 4 digits, receiving numbers and special characters', () => {
      const cardNumber = '3529-5435-3355-8727'
      expect(applyMaskHideCardNumber(cardNumber)).toBe('**** **** **** 8727')
    })
  })
})