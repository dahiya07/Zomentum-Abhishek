let users=document.getElementsByClassName("user");
for(let i=0;i<arr.length;i++)
{
    users[i].addEventListener('click',open);
}



let message = document.getElementById('message-content');

let botmessages=[
    "hie","Sorry,say that again","that is good","tell me about yourself","cant hear you","bie"
]

document.querySelector('#message').addEventListener("keyup", function(event) 
{
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("submit").click();
        }
});    
document.querySelector('#submit').addEventListener('click',usermessageinsert);

let key=0;


function open()
{
    if(key!=this.id)
    {
        if(key!=0)
        {
            document.getElementById(key).classList.remove('abled');

        }
        document.getElementById(this.id).classList.add('abled');
    }
    document.getElementById('mess').style.display="block";
    document.getElementById('mess').style.position="relative";
    document.getElementById('search').style.display="block";
    document.getElementById('search').style.position="relative";
    document.querySelector('.about').style.display="none";
    document.querySelector('.header').style.height="70px";
    document.querySelector('.header').style.fontSize="0.6em";
    let z=document.querySelectorAll('.status');
    for (var i = 0; i < z.length; i++) {
        var currentEl = z[i];
        currentEl.style.display = 'block';
    }
    let x=document.getElementById(`user${this.id}`);
    x.style.display='block'
    key=this.id;
    document.getElementById('box').classList.add('other');
}




function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function usermessageinsert()
{
    let messa=document.getElementById('message').value;
    let div=document.createElement('div');
    div.setAttribute('ALIGN','right')
    div.setAttribute('class','user-mess')
    let para=document.createElement('p');
    para.innerHTML=messa;
    div.appendChild(para);
    document.getElementById(`user${key}`).appendChild(div);
    // message.appendChild(div);
    await sleep(1000);
    botinsertmessage(this.id);
    document.getElementById('message').value="";
}

function botinsertmessage()
{
    let rand=Math.floor(Math.random()*5);
    let div=document.createElement('div');
    div.setAttribute('class','bot-mess')
    let para=document.createElement('p');
    para.innerHTML=botmessages[rand];
    div.appendChild(para);
    document.getElementById(`user${key}`).appendChild(div);
} 