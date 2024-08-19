 function getProducts() {
    axios.get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
       
        getCards(response.data ) ;
      })
      .catch((error) => {
        if (error.response) {
          console.error(`HTTP error: ${error.response.status}`);
        } else if (error.request) {
          console.error("Request error: No response received");
        } else {
          console.error("Error:", error.message);
        }
      }); 

      
    
}

var arr=[-1];

function getCards(products)
{
  products.forEach(p => {
 
  
   const container=document.getElementById("container");
   

   const card=document.createElement('div');
   card.classList.add('card');

   const main=document.createElement('div');
   main.classList.add('main');

   const title=document.createElement('h3');
   title.innerText=p.title;

   const desc=document.createElement('p');
   desc.innerText=p.description;
   desc.classList.add('description');

   const img=document.createElement('img');
   img.src=p.image;
   img.classList.add('tokenImage');

   const divbtns=document.createElement('div');
   divbtns.classList.add('buyinfo');

    const btn=document.createElement('button');
    // btn.addEventListener('click', AddP());
    btn.addEventListener('click', () => AddP(p.id));  
    btn.classList.add("button");
    btn.innerText="BuyNow";

 

   
    main.appendChild(img);
    main.appendChild(title);
    main.appendChild(desc);
    divbtns.appendChild(btn);
    main.appendChild(divbtns);
    card.appendChild(main);
    container.appendChild(card);
   
  });

}

function AddP(pid)
{
  var badge = document.getElementById("badge");  
  
  if(!arr.includes(pid))
  {
    console.log(arr);
  arr.push[pid];
  let val=badge.getAttribute('value');
  if(val==null)val=0;
  badge.setAttribute('value',(parseInt(val)+1).toString());
  }
  
       
}

function checkPid(id) {
  return id>=0;
}

