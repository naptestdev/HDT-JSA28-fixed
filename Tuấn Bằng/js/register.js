let register = document.getElementById("register-form")
register.addEventListener("submit", function(event){
    event.preventDefault();
    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    const data= {
        email: register.email.value.trim(),
        password: register.password.value.trim()
    }
    if(data.email.length==0 && data.password.length==0){
        alert("vui lòng nhập tài khoản và mật khẩu của bạn")
    }else if(data.password.length <6){
        alert("Mật khẩu phải trên 6 kí tự")
    }else if(!data.password.match(lowerCaseLetter)){
        alert("mật khẩu phải chứa chữ viết thường")
    }else if(!data.password.match(upperCaseLetter)){
        alert("mật khẩu phải chứa chữ viết hoa")
    }else if(!data.password.match(numbers)){
        alert("mật khẩu phải chứa số")
    }else{
        if(localStorage.users){
            let users =JSON.parse(localStorage.users)
            let dem=0
            for(i=0; i< users.length; i++){
                if(users[i].email===data.email){
                    dem++;
                    alert("nhập email khác")
                }
            }
            if(dem==0){
                users.push(data)
                localStorage.setItem("users",JSON.stringify(users))
                location.replace("../html/welcome.html")
            }
        }
        else{
            localStorage.setItem("users",JSON.stringify([data]))
            location.replace("../html/welcome.html")
        }
    }
}) 