import { getLastNoByCard, verifyBirthday } from '../utils'

export default function verify(idcard: string | undefined) {
  // 号码不存在
  if (!idcard) {
    return false
  }
  // 基本正则校验失败
  if (!/^\d{17}[\d|X]$/.test(idcard)) {
    return false
  }
  // 校验生日格式
  if (!verifyBirthday(idcard.substr(6, 8))) {
    return false
  }
  const card = idcard.substr(0, 17)
  const lastNo = idcard.substr(17)
  // 最后一位数不匹配
  return getLastNoByCard(card) === lastNo
}
