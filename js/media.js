document.getElementById('bars').addEventListener('click',ham);

function ham()
{
    document.getElementById('user-box').style.display="block";
}



function mymedia(x) 
{
    if (x.matches) 
    {
        document.getElementById('box').classList.add('user-box2') 
        document.getElementById('user-box').style.display='none'; 
        document.getElementById('bars').style.position='relative';
        document.getElementById('bars').style.display='block'; 
    } 
    else 
    {
        document.getElementById('user-box').style.display='block';
        document.getElementById('box').classList.add('user-box') 
        document.getElementById('bars').style.display='none'; 
    }
}
  
var x = window.matchMedia("(max-width: 700px)");
mymedia(x) ;
x.addListener(mymedia);