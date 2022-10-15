
var items="";

fetch("https://dummyjson.com/users")
.then((r) => r.json())
.then((r)=>{
    var users=r.users;
    users.forEach((user) => {
        items +=` <div class="border">
        <img width="150" height="150" src="${user.image}" alt="" srcset="">
        <p>Name : ${user.firstName} ${user.lastName}</p>
        <p>Email : ${user.email}</p>
        <p><a href="tel:${user.phone}">Phone : ${user.phone}</a></p>
        <p>Address: ${user.address.address}</p>
    </div>
        `
    });
    document.getElementById("section_1").innerHTML=items;
})