
function getprodect(){
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
        //console.log(res);
        const data=res.data.products ;
        console.log(data);

        const result=data.map(function(ele){
            return`
            <div class="details">
            <h2>${ele.title}</h2>
            <img src="${ele.thumbnail}">
            <p>${ele.description}</p>
            <a href=" detales.html?pro-id=${ele.id}">Details</a>
            
            </div>
            
            `
           
        }).join("");
        document.querySelector(".pro").innerHTML=result;
        
    })
}
getprodect();