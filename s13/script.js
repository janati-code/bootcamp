function OTPFn(e)
{
   
    var box=document.getElementById("otpForm");
    box.style.setProperty("display","block");
    e.target.style.setProperty("display","none");
    start(10);
}

function OTPVerifyFn()
{
    var wcode=document.getElementById("errorMessage");
    var scode=document.getElementById("successMessage");
    var box=document.getElementById("userOTP");

    if(box.value == "1234")
    {
        //show login message
        scode.style.setProperty("display","block");
        wcode.style.setProperty("display","none");
        setTimeout(() => {
            redirect();
        }, 2000);
    }
    else
    {
        scode.style.setProperty("display","none");
        wcode.style.setProperty("display","block");
    }
}


function start(interval)
{
    var label = document.createElement("p");
    label.innerText=interval;
    document.getElementById("timer").appendChild(label);
    runtimer(label,interval);
}

function runtimer(p,val)
{
     setInterval(() => 
            {
                if (val>0)
                    {
                        val--;
                        p.innerText=val;
                    }
                else 
                    {
                      redirect();
                    }

            },1000);
        
}

function redirect()
{
    window.location.replace('http://google.com'); 
}

