

async function getPosts()
{
    let response_result= await fetch('https://jsonplaceholder.typicode.com/posts');
    let response_photos = await fetch('https://jsonplaceholder.typicode.com/photos');
    let json_result = await response_result.json();
    let json_photos = await response_photos.json();
    loop(json_result , json_photos);
    

}


function loop(jresult , jphotos)
{
    for (const element of jresult) {

        var card=document.createElement("div");
        card.classList.add("hoverbox");

        var titr=document.createElement("h3"); 
        titr.innerText=element['title'];

        var body=document.createElement("p"); 
        body.innerText=element['body'];

        var img=document.createElement("img");
        img.src=jphotos[element['id']]['thumbnailUrl'];

        var a=document.createElement('a');
        a.innerText="More Info";
        a.href="#";

        
        card.appendChild(img);
        card.appendChild(titr);
        card.appendChild(body);
        card.appendChild(a);


        var container=document.getElementById("container");
        container.appendChild(card);
         
     }


}

function PostData()
{
    
}