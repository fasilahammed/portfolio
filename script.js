function sendEmail( event){
    event.preventDefault();
    let params={
        name:document.getElementById("form-name").value,
        Email:document.getElementById("InputEmail1").value,
        message:document.getElementById("FormControlTextarea1").value,
    };
    const serviceID="service_6t73qxr";
    const templateID="template_hdw4zgb";


emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("form-name").value="";
        document.getElementById("InputEmail1").value="";
        document.getElementById("FormControlTextarea1").value="";
        console.log(res);
        alert("your message sent succesfully")
        
    }
)
.catch((err) => console.log(err));
}