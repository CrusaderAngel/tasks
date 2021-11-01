import { categoriesResponse } from './data.js'

const categories = (obj) => {
  let finalArr = []
  let parentID = 1

  for (let key in obj.result.categories) {
    let categoriesObj = {}
    categoriesObj.parent_value = parentID
    categoriesObj.parent_label = key
    categoriesObj.children = obj.result.categories[key].map((el, index) => {
      let childrenObj = {}
      childrenObj.children_value = Number(
        `${categoriesObj.parent_value}.${index + 1}`
      )
      childrenObj.children_label = el
      childrenObj.parent_key = categoriesObj.parent_value
      return childrenObj
    })
    parentID += 1
    finalArr.push(categoriesObj)
  }

  return finalArr
}



console.log(JSON.stringify(categories(categoriesResponse), null, ' '))
