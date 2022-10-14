const notifications = document.querySelectorAll(".notification");

const allRead = document.getElementById("readall");

allRead.addEventListener("click", (e)=>{
  notifications.forEach(el=>{
      if(el.classList.contains("new")){
          el.classList.remove("new")
      }
  })
})