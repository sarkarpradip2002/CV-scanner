var imagenumber=1;
fetchclient=()=>{
    let url="https://randomuser.me/api/";
    fetch(url).then(response=> {return response.json();})
    .then(data=>{
        let obj= data.results[0];
        let input=document.getElementById('input');
        let image=document.querySelector('.image');
        image.src=obj.picture.large;
        image++;
        let name=document.getElementById('name');
        let age=document.getElementById('age');
        let gender=document.getElementById('gender');
        let email=document.getElementById('email');
        let phone=document.getElementById('phone');
        name.value=obj.name.first+" " + obj.name.last;
        age.value=obj.dob.age;
        gender.value=obj.gender;
        email.value=obj.email;
        phone.value=obj.phone;
        
    })    

}