let answer=0;


function Qfirst()
{
    var a=document.getElementsByName("Q1");
    for(var i=0 ; i<a.length; i++)
    {
        if(a[i].checked && a[i].value=="C")
        {
            answer+=1;  
        }
    }

    
    var a=document.getElementsByName("Q2");
    for(var i=0 ; i<a.length; i++)
    {
        if(a[i].checked && a[i].value=="DR")
        {
            answer+=1;  
        }
    }

    
    var a=document.getElementsByName("Q3");
    for(var i=0 ; i<a.length; i++)
    {
        if(a[i].checked && a[i].value=="POP")
        {
            answer+=1;  
        }
    }

    
    var a=document.getElementsByName("Q4");
    for(var i=0 ; i<a.length; i++)
    {
        if(a[i].checked && a[i].value=="IF")
        {
            answer+=1;  
        }
    }

    
    var a=document.getElementsByName("Q5");
    if(a[0].checked && a[1].checked && a[3].checked && !(a[2].checked))
        {
            answer+=1;  
        }
    console.log(answer);

var p = document.querySelector(".disbut");
p.setAttribute("disabled",true);


var s=document.getElementsByClassName("name3");
var Name = s[0].value;
var mail = s[1].value;

element = document.getElementById("username1");
element.innerHTML = "Name :- ";

element = document.getElementById("username2");
element.innerHTML = Name;


element = document.getElementById("usermail1");
element.innerHTML = "MailId :- ";

element = document.getElementById("usermail2");
element.innerHTML = mail;

element = document.getElementById("usertotal1");
element.innerHTML = "Total Marks :- ";

element = document.getElementById("usertotal2");
element.innerHTML = "50";

element = document.getElementById("userscore1");
element.innerHTML = "Your Score :- ";

element = document.getElementById("userscore2");
element.innerHTML = answer*10;







}


