export const reNum = /^([01]\d|2[0123]):([0-5]\d|59)$/ //时分验证
export const numChar = /^[a-z0-9]+$/i //字母数字
export const english = /^[a-z]+$/i //字母
export const email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //邮箱
export const mobile = /^(?:(?:\+|00)86)?1\d{10}$/ //手机号码
export const num = /^-?[0-9]+$/ //整数
export const decimals = /^[0-9]+([.]\d+)?$/
export const integer = /^-?\d{1,}$/
export const idCard =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/

interface CityTypes {
  [propName: number]: string
}

export default {
  isHm(v: string): boolean {
    return reNum.test(v)
  },
  isIdCard(code: string): boolean {
    if (!idCard.test(code)) return false

    //身份证号合法性验证
    //支持15位和18位身份证号
    //支持地址编码、出生日期、校验位验证
    const city: CityTypes = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外',
    }

    let row = true
    if (
      !code ||
      !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)
    ) {
      row = false
    } else if (!city[Number(code.substring(0, 2))]) {
      row = false
    } else {
      //18位身份证需要验证最后一位校验位
      if (code.length === 18) {
        const codeArr: string[] = code.split('')
        //∑(ai×Wi)(mod 11)
        //加权因子
        const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        //校验位
        const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        let sum = 0
        let ai = 0
        let wi = 0
        for (let i = 0; i < 17; i++) {
          ai = Number(codeArr[i])
          wi = factor[i]
          sum += ai * wi
        }
        if (parity[sum % 11] !== codeArr[17].toUpperCase()) {
          row = false
        }
      }
    }
    return row
  },
  isNumber(num: string, jdNum: string): boolean {
    let reNum = /^-?\d+(\.\d{0,2})?$/
    if (jdNum) {
      reNum = new RegExp(`^-?\\d+(\\.\\d{0,${jdNum}})?$`)
    }
    return reNum.test(num)
  },
  isInteger(num: string): boolean {
    return integer.test(num)
  },
  isNumOrDecimals(num: string, jdNum: number): boolean {
    let reNum = /^-?\d+(\.\d{0,2})?$/
    if (jdNum) {
      const _jdNum = Number(jdNum)
      reNum = new RegExp(`^-?\\d+(\\.\\d{0,${_jdNum}})?$`)
    }
    return reNum.test(num)
  },
  isMobile(v: string): boolean {
    return mobile.test(v)
  },
  isEmail(v: string): boolean {
    return email.test(v)
  },
  isEnglish(v: string): boolean {
    return english.test(v)
  },
  isNumChar(v: string): boolean {
    return numChar.test(v)
  },
  isNum(v: string, min: number | undefined, max: number | undefined): boolean {
    let flag = num.test(v)
    min = min || min === 0 ? min * 1 : undefined
    max = max || max === 0 ? max * 1 : undefined

    if (flag) {
      if ((min || min === 0) && Number(v) < min) {
        flag = false
      }

      if ((max || max === 0) && Number(v) > max) {
        flag = false
      }
    }
    return flag
  },
  isMinOrMax(
    v: string,
    min: string,
    max: string,
  ): {
    minFlag: boolean
    maxFlag: boolean
  } {
    let minFlag = true
    let maxFlag = true

    const _value = Number(v)

    const _min = min || min === '0' ? Number(min) : null
    const _max = max || max === '0' ? Number(max) : null

    if (_min && _value < _min) {
      minFlag = false
    }

    if (_max && _value > _max) {
      maxFlag = false
    }

    return {
      minFlag,
      maxFlag,
    }
  },
  isNumberOrDecimals(num: string, jdNum: string): boolean {
    let reNum = /^-?\d+(\.\d{0,2})?$/
    if (jdNum) {
      reNum = new RegExp(`^-?\\d+(\\.\\d{0,${jdNum}})?$`)
    }
    return reNum.test(num)
  },
  //年份验证
  isYear(num: string): boolean {
    const reNum = /^((19|20)[0-9]{2}|2100|9999)$/
    return reNum.test(num)
  },
  //年月验证
  isYearMonth(num: string): boolean {
    const reNum = /^(([1-2][0-9][0-9][0-9])|9999)-?(((0[1-9]|1[0-2])|99))$/ //加入9999-99形式
    return reNum.test(num)
  },
  //随机年月日
  isYearMonthDay(v: string): boolean {
    const reNum = /^((18|19|20)?\d{2}|9999)-(0[1-9]|1[012]|99)-(0[1-9]|[12]\d|3[01]|99)$/
    if (this.isYearMonth(v) || this.isYear(v) || reNum.test(v)) {
      return true
    } else {
      return false
    }
  },
  //年月日
  isDefYMD(v: string): boolean {
    const reNum = /^((18|19|20)?\d{2}|9999)-(0[1-9]|1[012]|99)-(0[1-9]|[12]\d|3[01]|99)$/
    if (reNum.test(v)) {
      return true
    } else {
      return false
    }
  },
  //随机年月日附加判断
  isYMDOut(YMD: string): boolean {
    const curYear = new Date().getFullYear()

    const year = YMD.split('-')[0]

    if (Number(year) > Number(curYear)) {
      return false
    }

    return true
  },
}
