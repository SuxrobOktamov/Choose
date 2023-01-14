let  title = document.getElementById('title');
let  describ = document.getElementById('describ');
let  data = document.getElementById('data');
let  submit = document.getElementById('submit');
let  back = document.getElementById('back');
let  no = document.getElementById('no');
let  yes = document.getElementById('yes');

title.addEventListener('click', (e)=>{
    if( describ.style.color == 'black' && data.style.color == 'black' ){
        document.querySelector('#span3').style.backgroundColor = "#e3e3e3";
        document.querySelector('#span3').style.color = "#363636";
        data.style.color = 'grey';
        no.style.display = 'none';
        yes.style.display = 'none';
        document.querySelector('h2').innerText = "Choose desciribtion content";
        back.style.display = 'inline';
        submit.style.display = 'inline';
    }else if( describ.style.color == 'black' && data.style.color == 'grey' ){
        document.querySelector('h2').innerText = "Choose title content";
        back.style.display = 'none';
        describ.style.color = 'grey';
        document.querySelector('#span2').style.backgroundColor = "#e3e3e3";
        document.querySelector('#span2').style.color = "#363636";
    }else{
        title.style.color = 'black';
        document.querySelector('h2').innerText = "Choose title content";
        submit.style.display = 'inline';
        document.querySelector('#span1').style.backgroundColor = "#2d86cc";
        document.querySelector('#span1').style.color = "white";
    }
    
});
describ.addEventListener('click', ()=>{
     if( no.style.display == 'inline'){
        document.querySelector('#span3').style.backgroundColor = "#e3e3e3";
        document.querySelector('#span3').style.color = "#363636";
        data.style.color = 'grey';
        no.style.display = 'none';
        yes.style.display = 'none';
        document.querySelector('h2').innerText = "Choose desciribtion content";
        back.style.display = 'inline';
        submit.style.display = 'inline';
    }else if( describ.style.color == 'black' ){
        document.querySelector('h2').innerText = "Choose title content";
        back.style.display = 'none';
        describ.style.color = 'grey';
        document.querySelector('#span2').style.backgroundColor = "#e3e3e3";
        document.querySelector('#span2').style.color = "#363636";

    }else if( submit.style.display == 'inline' ){
        describ.style.color = 'black';
        document.querySelector('h2').innerText = "Choose desciribtion content";
        back.style.display = 'inline';
        no.style.display = 'none';
        yes.style.display = 'none';
        document.querySelector('#span2').style.backgroundColor = "#2d86cc";
        document.querySelector('#span2').style.color = "white";
    }
    
});
data.addEventListener('click', ()=>{
    if( back.style.display == 'inline' ){
        data.style.color = 'black';
        document.querySelector('h2').innerText = "Are you happy now";
        submit.style.display = 'none';
        back.style.display = 'none';
        no.style.display = 'inline';
        yes.style.display = 'inline';
        document.querySelector('#span3').style.backgroundColor = "#2d86cc";
        document.querySelector('#span3').style.color = "white";
    }else if( no.style.display == 'inline'  ){
        document.querySelector('#span3').style.backgroundColor = "#e3e3e3";
        document.querySelector('#span3').style.color = "#363636";
        data.style.color = 'grey';
        no.style.display = 'none';
        yes.style.display = 'none';
        document.querySelector('h2').innerText = "Choose desciribtion content";
        back.style.display = 'inline';
        submit.style.display = 'inline';
    }
   
});


submit.addEventListener('click', ()=>{
    if( submit.style.display == 'inline' && back.style.display == 'inline'  ){
        data.style.color = 'black';
        document.querySelector('h2').innerText = "Are you happy now";
        submit.style.display = 'none';
        back.style.display = 'none';
        no.style.display = 'inline';
        yes.style.display = 'inline';
        document.querySelector('#span3').style.backgroundColor = "#2d86cc";
        document.querySelector('#span3').style.color = "white";
    }else if( submit.style.display == 'inline' ){
        describ.style.color = 'black';
        document.querySelector('h2').innerText = "Choose desciribtion content";
        back.style.display = 'inline';
        no.style.display = 'none';
        yes.style.display = 'none';
        document.querySelector('#span2').style.backgroundColor = "#2d86cc";
        document.querySelector('#span2').style.color = "white";
    }
});

yes.addEventListener('click', ()=>{
    submit.style.display = 'none';
    back.style.display = 'none';
    no.style.display = 'none';
    yes.style.display = 'none';
    document.querySelector('h2').innerText = "Yes, we're done. Thanks for sending us your data!";
    document.querySelector('h2').style.color = 'green' 
});
no.addEventListener('click', ()=>{
    data.style.color = 'grey';
    document.querySelector('h2').innerText = "Choose desciribtion content";
    back.style.display = 'inline';
    submit.style.display = 'inline';
    no.style.display = 'none';
    yes.style.display = 'none';
    document.querySelector('#span3').style.backgroundColor = "#e3e3e3";
    document.querySelector('#span3').style.color = "#363636";
});
back.addEventListener('click', ()=>{
    describ.style.color = 'grey';
    document.querySelector('h2').innerText = "Choose title content";
    back.style.display = 'none';
    document.querySelector('#span2').style.backgroundColor = "#e3e3e3";
    document.querySelector('#span2').style.color = "#363636";
});


submit.addEventListener('mousedown', (e) =>{
    submit.style.backgroundColor = "#d8d8d8";
    submit.style.transform = "translateY(2px)";
});
submit.addEventListener('mouseup', (e) =>{
    submit.style.backgroundColor = "#d8d8d894";
    submit.style.transform = "translateY(0px)";

});

back.addEventListener('mousedown', (e) =>{
    back.style.transform = "translateY(2px)";
    back.style.backgroundColor = "#d8d8d8";
});
back.addEventListener('mouseup', (e) =>{
    back.style.transform = "translateY(0px)";
    back.style.backgroundColor = "#d8d8d894";
});

no.addEventListener('mousedown', (e) =>{
    no.style.transform = "translateY(2px)";
    no.style.backgroundColor = "#d8d8d8";
});
no.addEventListener('mouseup', (e) =>{
    no.style.transform = "translateY(0px)";
    no.style.backgroundColor = "#d8d8d894";
});

yes.addEventListener('mousedown', (e) =>{
    yes.style.transform = "translateY(2px)";
    yes.style.backgroundColor = "#d8d8d8";
});
yes.addEventListener('mouseup', (e) =>{
    yes.style.transform = "translateY(0px)";
    yes.style.backgroundColor = "#d8d8d894";
});