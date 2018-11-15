var recipes = { eggs:'2'}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.flour = '2 cups'
  return recipes
}
updateObjectWithKeyAndValue(object, flour, '2 cups')

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
} 
 
 function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  newRecipe // { foo: 'bar' }
  delete newRecipe.key
  return newRecipe
} 
 
 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
 }