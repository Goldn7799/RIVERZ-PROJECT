var auth = firebase.auth();
var rdb = firebase.database();
var stg = firebase.storage()
var root = '';
var current = '';
const Clear = () => {
    root = '';
}

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
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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

const HomePage = {
    "home": () => {
        Clear();
        NavBar.home();
        root += `MASIH KOSONG LOL`;
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
        root += `Grup`;
        setTimeout(() => {
            document.getElementById('nav1').classList.remove('active');
            document.getElementById('nav2').classList.add('active');
            document.getElementById('nav3').classList.remove('active');
            document.getElementById('nav4').classList.remove('active');
        },150)
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