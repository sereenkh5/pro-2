
function getuserid(){
  const urlparem= new URLSearchParams(window.location.search);
  const id=urlparem.get("pro-id")
  
  axios.get(`https://dummyjson.com/products/${id}`)
  .then((res)=>{
      console.log(res);
      const data=res.data ;
      console.log(data);

      document.querySelector(".titel").textContent=data.title;
      document.querySelector("h3").textContent=data.description;
      document.querySelector("h4").textContent=data.price;
      const result= data.images.map(function(ele){
return`
<img src=" ${ele}" >
`

      }).join("");
      document.querySelector(".detimg").innerHTML=result;
      
    
  });
 

  
} 
getuserid();