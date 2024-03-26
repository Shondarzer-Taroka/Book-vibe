
function getLocalStorage() {
    let item=localStorage.getItem('book')
    let localValueParse= JSON.parse(item)
 if (localValueParse) {
    return localValueParse
 }
 return []
}


 function saveItem(id) {
    let localItem=getLocalStorage()

   let exist= localItem.find(item=> item===id)
   if (!exist) {
    //    let existItem=JSON.stringify(exist)
       localItem.push(id)
       localStorage.setItem('book',JSON.stringify(localItem))
   }

    
 }


  function go(arr) {
   let y=getLocalStorage()
   y=[]
   y=arr
   localStorage.setItem('book',JSON.stringify(y))
  }

 export {getLocalStorage,saveItem,go}