import { brandsResponse } from './data.js'

const calculateByType = (obj, type) => {
  let resultArray = []
  obj.result.total.data.forEach((totalResult) => {
    let dataByDate = {}
    dataByDate.name = totalResult.date
    for (let brandName in obj.result) {
      if (brandName !== 'total') {
        dataByDate[brandName] = obj['result'][brandName]['data'].filter(
          (brandData) => brandData.date === dataByDate.name
        )[0][type]
      }
    }
    dataByDate.total = totalResult[type]
    resultArray.push(dataByDate)
  })
  return resultArray
}

const quantityResult = calculateByType(brandsResponse, 'quantity')
const priceResult = calculateByType(brandsResponse, 'price')

console.log(quantityResult)
console.log(priceResult)
