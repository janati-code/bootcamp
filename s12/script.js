function product_Phone(brand , model , color , price)
{
    this._brand=brand ;
    this._model=model;
    this._color=color;
    this._price=price;


}


var phones=[new product_Phone("SAMSUNG" , "41+BQHSrTZL._SL500_" , "black" ,"50"),
    new product_Phone("APPLE" , "51KGMfxB6CL._AC_" , "white" ,"30"),
    new product_Phone("HUAWEI" , "1284395481_max" , "green" ,"35"),
    new product_Phone("SAMSUNG" , "Apple-iPhone-13" , "red" ,"21"),
    new product_Phone("HTC" , "untitled-design-1-png" , "blue" ,"45")

];

phones.forEach(phone => {
    //add division for every product
    var frame=document.createElement('div');
    frame.classList.add('p_division');
    document.getElementById('panel').appendChild(frame);

     //add division for images of every product
    var subframe=document.createElement('div');
    subframe.classList.add('sub_p_division');
   frame.appendChild(subframe);

    //add product brand
    var var_brand=document.createElement('p');
    var_brand.innerText=phone._brand;
    frame.appendChild(var_brand);

    //add product model 
    var var_model=document.createElement('p');
    var_model.innerText=phone._model;
    var_model.setAttribute("style","font-size:12px !important;");
    frame.appendChild(var_model);

    //add product color as circle color image to sub panel div
    var var_color=document.createElement('img');
    var_color.src="./images/"+phone._color+".png";
    var_color.setAttribute("width","15px");
    var_color.setAttribute("height","15px");
    
    var_color.setAttribute("margin","10px");
    subframe.appendChild(var_color);

    //add product image to sub panel div
    var var_color=document.createElement('img');
    var_color.src="./images/"+phone._model+".jpg";
    var_color.setAttribute("width","50px");
    var_color.setAttribute("height","50px");
    var_color.style.marginLeft = "10px";
    subframe.appendChild(var_color);

    //add product price 
    var var_price=document.createElement('p');
    var_price.innerText=phone._price+" $";
    frame.appendChild(var_price);
   
       

    
});
