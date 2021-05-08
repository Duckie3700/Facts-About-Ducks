function validUsers(){
        let logins = {
                "floppy_dorito_fish": "3700" 
        }
        let name = Array.from(document.getElementsByName("fname"))
        let password = Array.from(document.getElementsByName("password"))
  
        name = name[0].value
        password = password[0].value
  let statement = document.getElementById("statement")
  
  // if the name isnt in our login names, end function early
  if (!(name in logins)){
    statement.innerHTML = "Name does not exist"
    statement.style.color = "Red"
    return false
  }
  
  if(logins[name] == password){
    statement.innerHTML = "Login Succesful"
    statement.style.color = "Green"
    location.href = "website.html"
  }else{
    statement.innerHTML = "Login Unsuccessful"
    statement.style.color = "Red"
  }


        
        return false
}
