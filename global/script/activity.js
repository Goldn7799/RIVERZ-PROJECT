function sendimg(){
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('sendpotho-page').style.display = 'block';
}

function cancelpotho(){
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('inputmessagepotho').value='';
    document.getElementById('inputimgpotho').value = '';
    document.getElementById('sendpotho-page').style.display = 'none';
}

function exitviewfoto() {
    localStorage.setItem('locl', 'a'); 
    var act = localStorage.getItem('fotoviewAction');
    if (act == 'true'){
        document.getElementById('sendpotho-page').style.display = 'block';
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('fotoviewpage').style.display = 'none';
    }else {
        document.getElementById('sendpotho-page').style.display = 'none';
        document.getElementById('homepage').style.display = 'block';
        document.getElementById('fotoviewpage').style.display = 'none';
    }
    
}

function sendaud(){
    localStorage.setItem('locl', 'a'); 
    document.getElementById('fotoviewpage').style.display = 'none';
    document.getElementById('sendaud-page').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('sendpotho-page').style.display = 'none';
}

function cancelaudio(){
    localStorage.setItem('locl', 'a'); 
    document.getElementById('fotoviewpage').style.display = 'none';
    document.getElementById('sendaud-page').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('inputmessagepotho').value='';
    document.getElementById('inputimgpotho').value = '';
    document.getElementById('sendpotho-page').style.display = 'none';
}

function keluarLain(){
    document.getElementById('searchpage').style.display = 'block';
    document.getElementById('profilpage-lain').style.display = 'none';
}