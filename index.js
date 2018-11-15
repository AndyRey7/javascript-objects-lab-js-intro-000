var recipes = { eggs:'2'}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.flour = '2 cups'
  return recipes
}
updateObjectWithKeyAndValue(object, flour, '2 cups')

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({}, object, {[key] : value})
}
function 