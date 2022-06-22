var auth = firebase.auth();
var rdb = firebase.database();
var stg = firebase.storage()
var root = '';
var current = '';
const Clear = () => {
    root = '';
}

//date
if ('date' == 'date'){
    const dt = new Date();
    var monthRaw = dt.getMonth() + 1;
    var day = dt.getDate();
    if (monthRaw == 1){
        var month = 'Januari'
    }
    else if (monthRaw == 2){
        var month = 'Februari'
    }
    else if (monthRaw == 3){
        var month = 'Maret'
    }
    else if (monthRaw == 4){
        var month = 'April'
    }
    else if (monthRaw == 5){
        var month = 'Mei'
    }
    else if (monthRaw == 6){
        var month = 'Juni'
    }
    else if (monthRaw == 7){
        var month = 'Juli'
    }
    else if (monthRaw == 8){
        var month = 'Agustus'
    }
    else if (monthRaw == 9){
        var month = 'September'
    }
    else if (monthRaw == 10){
        var month = 'Oktober'
    }
    else if (monthRaw == 11){
        var month = 'November'
    }
    else if (monthRaw == 12){
        var month = 'Desember'
    }else {
        var month = 'Error'
    };
    //console.log(day)
    localStorage.setItem('day', day)
    localStorage.setItem('month', month);
    }
//end date

const load = {
    "mrMiyagi": ()=>{
        Clear();
        root += `
        <center style="margin-top: 220px"><div class="mr-miyagi">
          <div class="mr-miyagi__line"></div>
          <div class="mr-miyagi__line"></div>
          <div class="mr-miyagi__line"></div>
          <div class="mr-miyagi__line"></div>
          <div class="mr-miyagi__line"></div>
          <div class="mr-miyagi__line"></div>  
        </div></center>`;
        document.getElementById('root').innerHTML = root;
    },
    "leapFrog": ()=>{
        Clear();
        root += `<center style="margin-top: 220px;"><div class="leap-frog">
        <div class="leap-frog__dot"></div>
        <div class="leap-frog__dot"></div>
        <div class="leap-frog__dot"></div>
      </div></center>`;
      document.getElementById('root').innerHTML = root;
    },
    "raceBy": ()=>{
        Clear();
        root += `<div class="race-by"></div>`;
        document.getElementById('root').innerHTML = root;
    }
}

const NavBar = {
    "home":() => {
        root += `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Riverz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li onclick="HomePage.home()" class="nav-item">
            <a id="nav1" class="nav-link" aria-current="page" href="#">Pesan</a>
          </li>
          <li onclick="HomePage.grup()" class="nav-item">
            <a id="nav2" class="nav-link" href="#">Grup</a>
          </li>
          <li onclick="HomePage.status()" class="nav-item">
            <a id="nav3" class="nav-link" href="#">Status Global</a>
          </li>
          </li>
          <li onclick="HomePage.cariTeman()" class="nav-item">
            <a id="nav4" class="nav-link" href="#">Cari Teman</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b style="font-size: large;">:</b>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Pesan Baru</a></li>
              <li><a class="dropdown-item" href="#">Grup Baru</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-primary" href="#">Library</a></li>
              <li><a class="dropdown-item text-danger" onclick="logout()" href="#">Keluar</a></li>
            </ul>
          </li>
          <!--<li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>-->
        </ul>
      </div>
    </div>
                </nav>`
    },
    "login":() => {
        root += `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Riverz</a>
    </div>
                </nav>`
    },
    "loginEmail": () => {
        root += `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" onclick="Clear(); NavBar.login(); LoginForum();" href="#">Riverz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li onclick="EmailPage.sigIn()" class="nav-item">
            <a id="sigin" class="nav-link" aria-current="page" href="#">Sig In</a>
          </li>
          <li onclick="EmailPage.register()" class="nav-item">
            <a id="register" class="nav-link">Register</a>
          </li>
          <li onclick="EmailPage.forgotPassword()" class="nav-item">
            <a id="forgotpassword" class="nav-link" href="#">Forgot Password</a>
          </li>
        </ul>
      </div>
    </div>
                </nav>`
    }}

const LoginForum = () => {
    root += `<div class="container">
    <div class="body d-md-flex align-items-center justify-content-between">
        <div class="box-1 mt-md-0 mt-5">
            <img src="global/sources/undraw_Login_re_4vu2.png"
                class="" alt="">
        </div>
        <div class=" box-2 d-flex flex-column h-100">
            <div class="mt-5">
                <p class="mb-1 h-1">Log In.</p>
                <p class="text-muted mb-2">Share your thouhts with the world form today.</p>
                <div class="d-flex flex-column ">
                    <p class="text-muted mb-2">Continue with...</p>
                    <div class="d-flex align-items-center">
                        <a onclick="loginGithub()" href="#" class="box selectio">
                        <span class="fab fa-github mb-2"></span>
                            <p class="mb-0">GitHub</p>
                        </a>
                        <a onclick="loginGoogle()" href="#" class="box">
                            <span class="fab fa-google mb-2"></span>
                            <p class="mb-0">Google</p>
                        </a>
                        <a onclick="EmailPage.sigIn()" class="box">
                            <span class="far fa-envelope mb-2"></span>
                            <p class="mb-0">Email</p>
                        </a>
                    </div>
                    <!--<div class="mt-3">
                        <p class="mb-0 text-muted">Already have an account?</p>
                        <div class="btn btn-primary">Log in<span class="fas fa-chevron-right ms-1"></span></div>
                    </div>-->
                </div>
            </div>
            <div class="mt-auto">
                <p class="footer text-muted mb-0 mt-md-0 mt-4">By register you agree with our
                    <span class="p-color me-1">terms and conditions</span>and
                    <span class="p-color ms-1">privacy policy</span>
                </p>
            </div>
        </div>
        <!--<span class="fas fa-times"></span>-->
    </div>
</div>`;
}

const EmailPage = {
    "sigIn":() => {
        Clear();
        NavBar.loginEmail();
        root += `<div class="wrapper">
        <div class="logo">
            <img src="global/sources/icon.jpg" alt="">
        </div>
        <div class="text-center mt-4 name">
            Sig In
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-envelope"></span>
                <input type="text" name="userName" id="userName" placeholder="Username">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password">
            </div>
            <p id="logsi"></p>
        </form>
        <button onclick="login()" class="btn mt-3">Login</button>
        <div class="text-center fs-6">
            <a href="#" onclick="EmailPage.forgotPassword()">Forget password?</a> or <a href="#" onclick="EmailPage.register()">Register</a>
        </div>
    </div>`
    setTimeout(()=>{
        document.getElementById('sigin').classList.add('active');
        document.getElementById('register').classList.remove('active');
        document.getElementById('forgotpassword').classList.remove('active');
    },150)
    },
    "register":() => {
        Clear();
        NavBar.loginEmail();
        root += `<div class="wrapper">
        <div class="logo">
            <img src="global/sources/icon.jpg" alt="">
        </div>
        <div class="text-center mt-4 name">
            Register
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-envelope"></span>
                <input type="email" name="email" id="email" placeholder="Email">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="confirmPassword" id="cfpwd" placeholder="Confirm Password">
            </div>
            <p id="logrg"></p>
        </form>
        <button onclick="register()" class="btn mt-3">Register</button>
        <div class="text-center fs-6">
            <a onclick="EmailPage.forgotPassword()" href="#">Forget password?</a> or <a href="#" onclick="EmailPage.sigIn()">Sign In</a>
        </div>
    </div>`
    setTimeout(()=>{
        document.getElementById('sigin').classList.remove('active');
        document.getElementById('register').classList.add('active');
        document.getElementById('forgotpassword').classList.remove('active');
    },150)
    },
    "forgotPassword":() => {
        Clear();
        NavBar.loginEmail();
        root += `<div class="wrapper">
        <div class="logo">
            <img src="global/sources/icon.jpg" alt="">
        </div>
        <div class="text-center mt-4 name">
            Forgot Password
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-envelope"></span>
                <input type="email" name="email" id="email" placeholder="Email">
            </div>
            <p id="logfp"></p>
        </form>
        <button onclick="forgetpwd()" class="btn mt-3">Send</button>
        <div class="text-center fs-6">
            <a onclick="EmailPage.sigIn()" href="#">Sign In</a> or <a onclick="EmailPage.register()" href="#">Sign Up</a>
        </div>
    </div>`
    setTimeout(()=>{
        document.getElementById('sigin').classList.remove('active');
        document.getElementById('register').classList.remove('active');
        document.getElementById('forgotpassword').classList.add('active');
    },150)
    
    }
}

const verifyEmail = {
    "Verify": () => {
        Clear();
        NavBar.login();
        root += `<center><div class="card" style="margin-top: 20px; width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Verifikasi Email</h5>
          <!--<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>-->
          <p class="card-text">Harap Verifikasi email terlebih dahulu sebelum masuk ke aplikasi</p>
          <center>
          <a onclick="verifyMyEmail()" style="margin-top: 10px;" href="#" class="card-link btn btn-primary"">Kirim link Verifikasi</a>
          <a onclick="window.location.reload()" style="margin-top: 10px;" href="#" class="card-link btn btn-success">Sudah Verifikasi</a>
          <a onclick="logout()" style="margin-top: 10px;" href="#" class="card-link btn btn-danger">Log Out</a>
          </center>
        </div>
      </div></center>`;
    }
}
var lock = '';
const HomePage = {
    "load": () => {
        Clear();
        load.leapFrog();
        setTimeout(() => {
            HomePage.home();
        },2500)
    },
    "home": () => {
        Clear();
        NavBar.home();
        root += `<div class="card">
                    <div id="plist" class="people-list">
                        <ul id="chat-pribadi-list" class="list-unstyled chat-list mt-2 mb-0">
                        <center style="margin-top: 100px"><div class="race-by"></div></center>
                            <!--<li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Vincent Porter</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                                </div>
                            </li>
                            <li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Aiden Chavez</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Mike Thomas</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>                                    
                            <li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Christian Kelly</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Monica Ward</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar">
                                <div class="about">
                                    <div class="name">Dean Henry</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                                </div>
                            </li>-->
                        </ul>
                    </div>
                </div>`;
        setTimeout(() => {
            document.getElementById('nav1').classList.add('active');
            document.getElementById('nav2').classList.remove('active');
            document.getElementById('nav3').classList.remove('active');
            document.getElementById('nav4').classList.remove('active');
            rdb.goOnline();
            rdb.ref(`pc/${auth.currentUser.uid}`).on('value', (data) => {
                var list = '';
                var html = document.getElementById('chat-pribadi-list');
                html.innerHTML = '<center><h5 class="text-warning">Tidak ada chat</h5></center>';
                data.forEach(lists => {
                    list += `<li class="clearfix border"><img src="${lists.val().profil}" alt="avatar"><div class="about"><div id="${lists.key}name" class="name">`;
                    list += `</div><div class="status"> <i class="fa fa-circle online">  ${lists.val().read}</i></div></div></li>`;
                    html.innerHTML = list;
                    var key = lists.key+'name';
                    document.getElementById(key).innerText = lists.val().name;
                })
            })
        },150)
    },
    "chat": () => {
        Clear();
        NavBar.home();
        root += `<div class="chat">
        <div class="chat-header clearfix">
            <div class="row">
                <div class="col-lg-6">
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                    </a>
                    <div class="chat-about">
                        <h6 class="m-b-0">Aiden Chavez</h6>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </div>
                <div class="col-lg-6 hidden-sm text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                </div>
            </div>
        </div>
        <div class="chat-history">
            <ul class="m-b-0">
                <li class="clearfix">
                    <div class="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                    </div>
                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                </li>
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div class="message my-message">Are we meeting today?</div>                                    
                </li>                               
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                </li>
            </ul>
        </div>
        <div class="chat-message clearfix">
            <div class="input-group mb-0">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-send"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Enter text here...">                                    
            </div>
        </div>
    </div>`;
    setTimeout(() => {
        document.getElementById('nav1').classList.add('active');
        document.getElementById('nav2').classList.remove('active');
        document.getElementById('nav3').classList.remove('active');
        document.getElementById('nav4').classList.remove('active');
    },150)
    },
    "grup": () => {
        Clear();
        NavBar.home();
        root += `<div class="card">
        <div id="plist" class="people-list">
            <ul id="group-chat-list" class="list-unstyled chat-list mt-2 mb-0">
            <center style="margin-top: 100px"><div class="race-by"></div></center>
            </ul>
        </div>
    </div>`;
        setTimeout(() => {
            document.getElementById('nav1').classList.remove('active');
            document.getElementById('nav2').classList.add('active');
            document.getElementById('nav3').classList.remove('active');
            document.getElementById('nav4').classList.remove('active');
            rdb.goOnline();
            rdb.ref(`gc/${auth.currentUser.uid}`).on('value', (data) => {
                var list = '';
                var html = document.getElementById('group-chat-list');
                html.innerHTML = '<center><h5 class="text-warning">Tidak ada chat grup</h5></center>';
                data.forEach(lists => {
                    list += `<li class="clearfix border"><img src="${lists.val().profil}" alt="avatar"><div class="about"><div id="${lists.key}name" class="name">`;
                    list += `</div><div class="status"> <i class="fa fa-circle online">  ${lists.val().read}</i>${lists.val().deskripsi}</div></div></li>`;
                    html.innerHTML = list;
                    var key = lists.key+'name';
                    document.getElementById(key).innerText = lists.val().name;
                })
            })
        },150)
    },
    "globalChat": () => {
        Clear();
        NavBar.home();
        root += `<div style="background-color: white;" class="chat">
        <div class="chat-header clearfix">
            <div class="row">
                <div class="col-lg-6">
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar">
                    </a>
                    <div class="chat-about">
                        <h6 class="m-b-0">Aiden Chavez</h6>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </div>
                <div class="col-lg-6 hidden-sm text-right">
                    <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                </div>
            </div>
        </div>
        <div class="chat-history room" id="ruang">
            <ul id="chat-history" class="m-b-0">
            <center style="margin-top: 50px;"><div class="leap-frog">
        <div class="leap-frog__dot"></div>
        <div class="leap-frog__dot"></div>
        <div class="leap-frog__dot"></div>
      </div></center>
                <!--<li class="clearfix">
                    <div class="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                    </div>
                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                </li>
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div class="message my-message">Are we meeting today?</div>                                    
                </li>                               
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                </li>-->
            </ul>
        </div>
        <div class="chat-message clearfix">
            <div class="input-group mb-0">
                <div class="input-group-prepend">
                    <span onclick="sendmsg('global/chatHistory')" class="input-group-text"><i class="fa fa-send"></i></span>
                </div>
                <input id="inputmessage" type="text" class="form-control" placeholder="Enter text here...">                                    
            </div>
        </div>
    </div>`;
    rdb.goOnline;
    rdb.ref('global/chatHistory').on('value', (chat) => {
        if (chat.exists()) {
            var chatList = '';
            chatt = 0;
            localStorage.setItem('lockN', '');
            chat.forEach(data => {
                if (localStorage.getItem('day') != data.val().day) {
                    var day = data.val().day;
                    if (day == localStorage.getItem('dayCR')){
                        var lockD = '1';
                    }else {
                        var lockD = '';
                    };
                    localStorage.setItem('dayCR', day);
                    if (lockD == ''){
                        chatList += `<div class="divider d-flex align-items-center mb-4"><p class="text-center mx-3 mb-0" style="color: #a2aab7;">${data.val().fulltime}</p></div>`
                        document.getElementById('chat-history').innerHTML = '';
                        readmsg();
                    }else{
                        readmsg();
                    };
                }else{
                    if (localStorage.getItem('lockN') == ''){
                        localStorage.setItem('lockN', '1');
                        chatList += `<div class="divider d-flex align-items-center mb-4"><p class="text-center mx-3 mb-0" style="color: #a2aab7;">Now</p></div>`
                        document.getElementById('chat-history').innerHTML = '';
                    };
                    readmsg(); 
                    };
                function readmsg() {
                if (data.val().foto != undefined && data.val().foto != 'undefined') {
                    chatt += 1;
                    if (data.val().userid != localStorage.getItem('useruid')) {
                        if (data.key != localStorage.getItem(data.key)) {
                                chatList += `<li class="clearfix"><div class="message-data text-right"><img src="${data.val().sendprof}" alt="avatar""><span class="message-data-time">${data.val().name}</span></div><div class="message other-message float-right"><ul><li><img id="${data.key}" onclick="fotoview('${data.val().foto}', '${data.key}');" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RhfdZXmlf2Gi-ye90O-AZNqRGiPAw7gOCA&usqp=CAU" style="max-width: 400px; max-height:200px;"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div><div class="message-data text-right"><span style="float: left; class="message-data-time">${data.val().time}</span></div></li>`
                                document.getElementById('chat-history').innerHTML = '';
                        }else {
                            chatList += `<li class="clearfix"><div class="message-data text-right"><img src="${data.val().sendprof}" alt="avatar""><span class="message-data-time">${data.val().name}</span></div><div class="message other-message float-right"><ul><li><img id="${data.key}" onclick="fotoview('${data.val().foto}', '${data.key}');" src="${data.val().foto}" style="max-width: 400px; max-height:200px;"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div><div class="message-data text-right"><span style="float: left; class="message-data-time">${data.val().time}</span></div></li>`
                            document.getElementById('chat-history').innerHTML = '';
                        }
                        
                    }else {
                        if (data.key != localStorage.getItem(data.key)){
                            chatList += `<li class="clearfix"><div class="message-data"><button onclick="deletemsg('${data.val().message}', '${data.key}');" type="button" class="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
                        <span class="visually-hidden">Button</span>
                      </button><span class="message-data-time">${data.val().time}</span></div><div class="message my-message"><ul><li><img id="${data.key}" onclick="fotoview('${data.val().foto}', '${data.key}');" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RhfdZXmlf2Gi-ye90O-AZNqRGiPAw7gOCA&usqp=CAU" style="max-width: 400px; max-height:200px;"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div></li>`
                        }else {
                            chatList += `<li class="clearfix"><div class="message-data"><button onclick="deletemsg('${data.val().message}', '${data.key}');" type="button" class="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
                        <span class="visually-hidden">Button</span>
                      </button><span class="message-data-time">${data.val().time}</span></div><div class="message my-message"><ul><li><img id="${data.key}" onclick="fotoview('${data.val().foto}', '${data.key}');" src="${data.val().foto}" style="max-width: 400px; max-height:200px;"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div></li>`
                        }
                        document.getElementById('chat-history').innerHTML = '';
                    }
                }
                else if (data.val().audio != undefined && data.val().audio != 'undefined') {
                    chatt += 1;
                    if (data.val().userid != localStorage.getItem('useruid')) {
                        chatList += `<li class="clearfix"><div class="message-data text-right"><img src="${data.val().sendprof}" alt="avatar""><span class="message-data-time">${data.val().name}</span></div><div class="message other-message float-right"><ul><li><div id="${data.key}"></div><img height="100" width="100" id="${data.key}img" src="https://iconape.com/wp-content/files/hr/3910/png/01-116.png" onclick="viewaudio('${data.val().audio}', '${data.key}')"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div><div class="message-data text-right"><span style="float: left; class="message-data-time">${data.val().time}</span></div></li>`
                        document.getElementById('chat-history').innerHTML = '';
                    }else {
                        chatList += `<li class="clearfix"><div class="message-data"><button onclick="deletemsg('${data.val().message}', '${data.key}');" type="button" class="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
                        <span class="visually-hidden">Button</span>
                      </button><span class="message-data-time">${data.val().time}</span></div><div class="message my-message"><ul><li><div id="${data.key}"></div><img height="100" width="100" id="${data.key}img" src="https://iconape.com/wp-content/files/hr/3910/png/01-116.png" onclick="viewaudio('${data.val().audio}', '${data.key}')"><div style="display: none;" id="${data.key}load"><div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>Mengunduh....</div></li><li>${data.val().message}</li></ul></div></li>`
                        document.getElementById('chat-history').innerHTML = '';
                    }
                }
                else {
                    if (data.val().userid != localStorage.getItem('useruid')) {
                        if (data.val().delete == 'true') {
                            chatList += `<li class="clearfix"><div class="message-data text-right"><img src="${data.val().sendprof}" alt="avatar""><span class="message-data-time">${data.val().name}</span></div><div class="text-danger message other-message float-right">${data.val().message}</div><div class="message-data text-right"><span style="float: left; class="message-data-time">${data.val().time}</span></div></li>`
                            document.getElementById('chat-history').innerHTML = '';
                        }else {
                            chatList += `<li class="clearfix"><div class="message-data text-right"><img src="${data.val().sendprof}" alt="avatar""><span class="message-data-time">${data.val().name}</span></div><div class="message other-message float-right">${data.val().message}</div><div class="message-data text-right"><span style="float: left; class="message-data-time">${data.val().time}</span></div></li>`
                            document.getElementById('chat-history').innerHTML = '';
                        }
                    }else {
                        if (data.val().delete == 'true') {
                            chatList += `<li class="clearfix"><div class="message-data"><span class="message-data-time">${data.val().time}</span></div><div class="text-danger message my-message">${data.val().message}</div></li>`
                            document.getElementById('chat-history').innerHTML = '';
                        }else {
                        chatList += `<li class="clearfix"><button onclick="deletemsg('${data.val().message}', '${data.key}');" type="button" class="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
      </svg>
                        <span class="visually-hidden">Button</span>
                      </button><div class="message-data"><span class="message-data-time">${data.val().time}</span></div><div class="message my-message">${data.val().message}</div></li>`
                        document.getElementById('chat-history').innerHTML = '';
                        }
                    }
                }
                document.getElementById('chat-history').innerHTML += chatList;
                setTimeout(function() {
                    document.getElementById('ruang').scrollTop = document.getElementById('ruang').scrollHeight;
                }, 2000)}
            })
            if (chatt == 100) {
                rdb.goOnline
                rdb.ref(localStorage.getItem('chatChild')).remove();
                var fulltime = localStorage.getItem('day') + ',' + localStorage.getItem('month');
                var chatsmessage = {
                    "name": "Riverz Bot",
                    "time": "00:00",
                    "sendprof": "data/src/icon.jpg",
                    "message": "cleared 100 storage",
                    "day": localStorage.getItem('day'),
                    "month": localStorage.getItem('month'),
                    "fulltime": fulltime
                }
                rdb.ref(localStorage.getItem('chatChild')).push(chatsmessage);
            };
        }
    });

    
    },
    "status": () => {
        Clear();
        NavBar.home();
        root += `Status Global`;
        setTimeout(() => {
            document.getElementById('nav1').classList.remove('active');
            document.getElementById('nav2').classList.remove('active');
            document.getElementById('nav3').classList.add('active');
            document.getElementById('nav4').classList.remove('active');
        },150)
    },
    "cariTeman": () => {
        Clear();
        NavBar.home();
        root += `Cari Jodoh`;
        setTimeout(() => {
            document.getElementById('nav1').classList.remove('active');
            document.getElementById('nav2').classList.remove('active');
            document.getElementById('nav3').classList.remove('active');
            document.getElementById('nav4').classList.add('active');
        },150)
    },
    "start": () => {
        Clear();
        // NavBar.login()
        root += `<center>
        <h1 class="riverz">RIVERZ</h1>
        <button onclick="HomePage.home()" class="riverzbtn">Start -></button>
    </center>`;
    }
}

//function

auth.onAuthStateChanged(user => {
    if (user) {
        rdb.goOnline();
        var data = {
            "verify": user.emailVerified
        }; 
        rdb.ref('users').child(auth.currentUser.uid).update(data);
        if (user.emailVerified == false){
            verifyEmail.Verify();
            localStorage.setItem('verify', 'false');
        }else {
            localStorage.setItem('verify', 'true');
            HomePage.start();
        }
    }else {
        Clear();
        NavBar.login()
        LoginForum()
    }
})

function register(){
    rdb.goOnline();
    var username = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var conpwd = document.getElementById('cfpwd').value;
    var log = document.getElementById('logrg');

    if (username != '' && email != '' && password != '' && conpwd != '') {
        if (password == conpwd){
            log.classList.remove('text-danger');
            log.innerText = '';
            var data = {
                "username": username,
                "email": email,
                "bio": 'Hello Iam Using RIVERZ',
                "last_login": Date()
            };
            auth.createUserWithEmailAndPassword(email, password).then(cred => {
                rdb.ref('users').child(cred.user.uid).set(data);
                log.classList.add('text-success');
                log.innerText = 'Akun Berhasil Dibuat';
            }).catch(error => {
                log.classList.add('text-danger');
                log.innerText = error.message;
            })
        }else {
            log.classList.add('text-danger');
            log.innerText = 'Password konfirmasi tidak valid';
        }
    }else {
        log.classList.add('text-danger');
        log.innerHTML = 'Harap isi semua data';
    }
}

function logout() {
    Notipin.Confirm({
        msg: "Yakin Ingin LogOut?", // DEFAULT KOSONG
        yes: "IYA", // TULISAN DI TOMBOL YES
        no: "TIDAK", // TULISAN DI TOMBOL NO
        onYes: () => { auth.signOut(); },
        onNo: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
        type: "BLUE", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
        mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
    })
} 

function login() {
    var email = document.getElementById('userName').value;
    var password = document.getElementById('pwd').value;
    var log = document.getElementById('logsi');

    if (email != '' && password != '') {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            log.classList.remove('text-danger');
            log.classList.add('text-success');
            log.innerHTML = 'Berhasil Login';
            var data = {
                "last_login": Date()
            };
            rdb.goOnline();
            rdb.ref('users').child(auth.currentUser.uid).update(data);
        }).catch(error => {
            log.classList.add('text-danger');
            log.classList.remove('text-success');
            log.innerHTML = error.message;
        })
    }else {
        log.classList.add('text-danger');
        log.classList.remove('text-success');
        log.innerHTML = 'Harap isi semua data';
    }
}

function forgetpwd() {
    var email = document.getElementById('email').value;
    var log = document.getElementById('logfp');
    if (email != '') {
        auth.sendPasswordResetEmail(email).then(() => {
            log.classList.add('text-success');
            log.classList.remove('text-danger');
            log.innerHTML = 'Email permintaan berhasil terkirim';
        }).catch(() => {
            log.classList.remove('text-success');
            log.classList.add('text-danger');
            log.innerHTML = 'Data Invalid';
        })
    }else {
        log.classList.remove('text-success');
        log.classList.add('text-danger');
        log.innerHTML = 'Harap Isi Email Anda';
    }
}

function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        var data = {
            "username": user.displayName,
            "email": user.email,
            "token": token,
            "potho": user.photoURL,
            "bio": 'Hello Iam Using RIVERZ',
            "verify": user.emailVerified,
            "last_login": Date()
        };
        rdb.goOnline();
        rdb.ref('users').child(auth.currentUser.uid).update(data);
    }).catch((error) => {
        Notipin.Alert({
            msg: `${error.message}`, // DEFAULT KOSONG
            yes: "OKE", // TULISAN DI TOMBOL YES
            onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
            type: "INFO", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
            mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
        })
    })
}

function loginGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        var data = {
            "username": user.displayName,
            "email": user.email,
            "token": token,
            "potho": user.photoURL,
            "bio": 'Hello Iam Using RIVERZ',
            "verify": user.emailVerified,
            "last_login": Date()
        };
        rdb.goOnline();
        rdb.ref('users').child(auth.currentUser.uid).update(data);
    }).catch((error) => {
        Notipin.Alert({
            msg: `${error.message}`, // DEFAULT KOSONG
            yes: "OKE", // TULISAN DI TOMBOL YES
            onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
            type: "INFO", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
            mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
        })
    })
}

function verifyMyEmail() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(() => {
        Notipin.Alert({
            msg: "Link verifikasi berhasil terkirim, cek email kamu sekarang", // DEFAULT KOSONG
            yes: "OKE", // TULISAN DI TOMBOL YES
            onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
            type: "INFO", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
            mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
          })
    }).catch((error) => {
        Notipin.Alert({
            msg: `${error.message}`, // DEFAULT KOSONG
            yes: "OKE", // TULISAN DI TOMBOL YES
            onYes: () => { /* KODE DI SINI, DEFAULT KOSONG */ },
            type: "DANGER", // NORMAL, DANGER, INFO, & BLUE -- DEFAULT NORMAL
            mode: "LIGHT", // LIGHT/DARK -- DEFAULT LIGHT
          })
    })
}

function sendmsg(gid) {
    if (document.getElementById('inputmessage').value != '') {
        rdb.goOnline;
        var msg = document.getElementById('inputmessage');
        const d = new Date();
        const H = d.getHours();
        const M = d.getMinutes();
        const time = H+':'+M;
        var fulltime = localStorage.getItem('day') + ',' + localStorage.getItem('month');
        var chatsmessage = {
            "name": localStorage.getItem('username'),
            "time": time,
            "sendprof": localStorage.getItem('proflink'),
            "message": msg.value,
            "userid": localStorage.getItem('useruid'),
            "day": localStorage.getItem('day'),
            "month": localStorage.getItem('month'),
            "fulltime": fulltime
        }
        rdb.ref(gid).push(chatsmessage);
        document.getElementById('inputmessage').value='';
        document.getElementById('chat-history').scrollTop = document.getElementById('ruang').scrollHeight;
    }
}

//end function

var dbdt = {
    "act": "",
    "msg": ""
};
rdb.goOnline();

window.setInterval(() => {
    rdb.ref('alert').on('value', (db) => {
        if (db.val().act != '') {
            current = '';
            malert = `<div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">${db.val().ttl}</h4>
            <p>${db.val().msg}</p>
            <hr>
            <p class="mb-0">${db.val().link}</p>
          </div>`;
            document.getElementById('root').innerHTML = malert;
        }else {
            if (root != current){
                // console.log('wkwk')
                document.getElementById('root').innerHTML = root;
                current = root;
            }
        }
    })
}, 123);