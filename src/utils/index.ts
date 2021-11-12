import { COEFFICIENT, PARITY } from '../constants'

// 通过17位数字获取最后一位数字/X
export function getLastNoByCard(card: string) {
  const sum = card.split('').reduce((p, str, index) => {
    return p + Number(str) * COEFFICIENT[index]
  }, 0)
  return PARITY[sum % 11]
}

// 校验生日是否是正常日期
export function verifyBirthday(birthday: string) {
  if (birthday.length !== 6) {
    return false
  }
  return !Number.isNaN(
    new Date(
      Number(birthday.substr(0, 4)),
      Number(birthday.substr(4, 2)),
      Number(birthday.substr(6, 2))
    ).getTime()
  )
}

export function getCardType(area: string) {
  if (area === '710000') {
    return { cardType: 2, cardText: '中国台湾' }
  }
  if (area === '810000') {
    return { cardType: 2, cardText: '中国香港' }
  }
  if (area === '820000') {
    return { cardType: 2, cardText: '中国澳门' }
  }
  return { cardType: 1, cardText: '大陆' }
}
