import verify from './verify'
import { GENDER, GENDER_STR } from '../constants'
import constellation from './constellation'
import { getCardType } from '../utils'

export default function info(idcard: string | undefined) {
  const valid = verify(idcard)

  if (!idcard || !valid) {
    return { valid }
  }

  const genderCode = idcard.substr(16, 1)
  const birthday = idcard.substr(6, 8)
  const genderRemainder = Number(genderCode) % 2
  const area = idcard.substr(0, 6)
  const { cardType, cardText } = getCardType(area)

  return {
    valid,
    gender: GENDER[genderRemainder],
    genderText: GENDER_STR[genderRemainder],
    birthday,
    age: new Date().getFullYear() - Number(idcard.substr(6, 4)),
    constellation: constellation(birthday),
    cardType,
    cardText,
  }
}
