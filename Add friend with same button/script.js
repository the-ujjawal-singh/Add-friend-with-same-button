let istatus = document.querySelector("h5")

let btn = document.querySelector("#add")
// let removeFriend = document.querySelector("#remove")
let check = 0

btn.addEventListener('click', function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }

    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
  
})

// removeFriend.addEventListener('click', function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "Red"
// })