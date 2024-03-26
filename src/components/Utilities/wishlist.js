
function wishgetLocalStorage() {
    let item=localStorage.getItem('wishbook')
    let localValueParse= JSON.parse(item)
 if (localValueParse) {
    return localValueParse
 }
 return []
}


 function wishsaveItem(id) {
    let localItem=wishgetLocalStorage()

   let exist= localItem.find(item=> item===id)
   if (!exist) {
    //    let existItem=JSON.stringify(exist)
       localItem.push(id)
       localStorage.setItem('wishbook',JSON.stringify(localItem))
   }

    
 }

 export {wishgetLocalStorage,wishsaveItem}