var firebaseConfig = {
    apiKey: "AIzaSyCclpH8ISFxOV-QAw0RlRTbxHpUBwgNKRI",
    authDomain: "contact-data-d596a.firebaseapp.com",
    projectId: "contact-data-d596a",
    storageBucket: "contact-data-d596a.appspot.com",
    messagingSenderId: "475296929604",
    appId: "1:475296929604:web:23a671b4b54abf38ada911",
    measurementId: "G-MHKD8JFKS4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    let contactFormInfo = firebase.database().ref('partner')
    
    document.querySelector('#partner').addEventListener('submit', submitForm)
    
    function submitForm(e,){
      e.preventDefault()
    
    //   radiobutton
      let premiumsalesupport = document.querySelector('input[name="sale"]:checked').value;
    // input fields 
        let namechief = document.querySelector(".namechief").value;
        let address = document.querySelector(".address").value;
        let city = document.querySelector(".city").value;
        let state = document.querySelector(".state").value;
        let country = document.querySelector(".country").value;
        let officenumber = document.querySelector(".officenumber").value;
        let phonenumber = document.querySelector(".phonenumber").value;
        let email = document.querySelector(".email").value;
        let gst = document.querySelector(".gst").value;
        let pannumber = document.querySelector(".pannumber").value;
        let residentnumber = document.querySelector(".residentnumber").value;
        let employee = document.querySelector(".employee").value;
        let software = document.querySelector(".software").value;
        let url = document.querySelector(".url").value;
        let monthsale = document.querySelector(".monthsale").value;
        let tips = document.querySelector(".tips").value;


      console.log(premiumsalesupport, namechief, address, city, state, country,
         officenumber, phonenumber, email, gst, pannumber, residentnumber, employee, software, url, monthsale, tips)
  
      contactSubmit(premiumsalesupport,namechief, address, city, state, country,
         officenumber, phonenumber, email, gst, pannumber, residentnumber, employee, software, url, monthsale, tips)
    
      let data = document.querySelector('#partner').reset()
      if(!data){
        alert("Thank for connect with us we will contact with you as soon as")
      }else{
        alert("submited")
      }
    }
    
    function contactSubmit(premiumsalesupport, namechief, address, city, state, country,
         officenumber, phonenumber, email, gst, pannumber, residentnumber, employee, software, url, monthsale, tips){
      let newContactFornInfo = contactFormInfo.push()
    
      newContactFornInfo.set({
        premiumsalesupport:premiumsalesupport,
        namechief:namechief,
        address:address,
        city:city,
        state:state,
        country:country,
        officenumber:officenumber,
        phonenumber:phonenumber,
        email:email,
        gst:gst,
        pannumber:pannumber,
        residentnumber:residentnumber,
        employee:employee,
        software:software,
        url:url,
        monthsale:monthsale,
        tips:tips
      })
    }