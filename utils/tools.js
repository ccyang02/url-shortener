const codeList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQUSTUVWXYZ"
const baseMod = 14776336 // 62^4
const baseHierarchy = [238328, 3844, 62]

const tools = {
  encode: function (timestamp, originUrl) {
    let buffer = timestamp % baseMod
    const codes = []
    for (let divisor of baseHierarchy) {
      codes.push(parseInt(buffer / divisor))
      buffer = buffer % divisor
    }
    // push the last remainder
    codes.push(buffer)

    // make sure there exists english & number in codes
    const sum = codes.map(idx => idx < 9).reduce((accumulator, currentValue) => accumulator + currentValue)
    let checksum = null
    if (sum === 0) checksum = originUrl.length % 10 // no number
    else if (sum === 4) checksum = originUrl.length % 52 + 10 // all number
    else checksum = originUrl.length % 62 // both
    codes.push(checksum)

    return codes.map(idx => codeList[idx]).join('')
  },
}

module.exports = tools
