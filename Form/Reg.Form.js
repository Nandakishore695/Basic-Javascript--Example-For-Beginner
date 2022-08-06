function formSaveData(){
    let fname = document.getElementById("dfname").value;
    let lname = document.getElementById("dlname").value;
    let age = document.getElementById("dage").value;
    let gender  = document.getElementsByName("gender");
  
    let result = (age >=18)? 'true':'false';
  
    for(let i = 0; i<gender.length; i++){
      if(gender[i].checked)
      console.log(gender[i].value);
    }
    console.log(fname,lname,result);
  
    let countrys = document.getElementById('country').value;
    let countryName = ["America", "India", "SriLanka"];
    

  }