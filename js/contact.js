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
  
  let contactFormInfo = firebase.database().ref('contactdata')
  
  document.querySelector('#contact').addEventListener('submit', submitForm)
  
  function submitForm(e){
    e.preventDefault()
  
    let fullname = document.querySelector(".fullname").value;
    let youremail = document.querySelector(".youremail").value;
    let yourphone = document.querySelector(".yourphone").value;
    let typeselect = document.querySelector(".typeselect").value;

    console.log(fullname, youremail, yourphone, typeselect)

    contactSubmit(fullname, youremail, yourphone, typeselect)
  
    let contact = document.querySelector('#contact').reset()
    if(!contact){
      alert("thank you we will connect as soon as")
    }else{
      alert("not submit")
    }
  }
  
  function contactSubmit(fullname, youremail, yourphone, typeselect){
    let newContactFornInfo = contactFormInfo.push()
  
    newContactFornInfo.set({
      fullname:fullname,
      youremail:youremail,
      yourphone: yourphone,
      typeselect:typeselect
    })
  }
  


