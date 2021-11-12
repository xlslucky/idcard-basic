import { CONSTELLATION_DAY_LIST, CONSTELLATION_LIST } from '../constants'
import { verifyBirthday } from '../utils'

export default function constellation(birthday: string) {
  if (!verifyBirthday(birthday)) {
    return undefined
  }
  const date = Number(birthday.substr(4))
  let str
  for (let i = 0; i < CONSTELLATION_DAY_LIST.length; i++) {
    const [min, max, or] = CONSTELLATION_DAY_LIST[i]
    // 摩羯座在12月-1月之间 特殊处理
    if (or && (date >= Number(min) || date <= Number(max))) {
      str = CONSTELLATION_LIST[i]
      break
    } else if (date >= Number(min) && date <= Number(max)) {
      str = CONSTELLATION_LIST[i]
      break
    }
  }
  return str
}
