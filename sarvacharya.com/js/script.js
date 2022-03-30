// var firebaseConfig = {
//   apiKey: "AIzaSyCclpH8ISFxOV-QAw0RlRTbxHpUBwgNKRI",
//   authDomain: "contact-data-d596a.firebaseapp.com",
//   projectId: "contact-data-d596a",
//   storageBucket: "contact-data-d596a.appspot.com",
//   messagingSenderId: "475296929604",
//   appId: "1:475296929604:web:23a671b4b54abf38ada911",
//   measurementId: "G-MHKD8JFKS4"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   let contactInfo = firebase.database().ref('infos')
  
//   document.querySelector('.user-data').addEventListener('submit', submitForm)
  
//   function submitForm(e){
//     e.preventDefault()
  
//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".email").value;
//     let phone = document.querySelector(".phone").value;
//     let requirement = document.querySelector(".requirement").value;

//     console.log(name, email, phone, requirement)
  
//     saveContactInfo(name, email, phone, requirement)
  
//    var datas = document.querySelector('.user-data').reset()
//     if(!datas){
//       alert("We will connect as soon as")
//     }else{
//       alert("submited")
//     }

//   }
  
//   function saveContactInfo(name, email, phone, requirement){
//     let newContactInfo = contactInfo.push()
  
//     newContactInfo.set({
//       name:name,
//       email:email,
//       phone: phone,
//       requirement:requirement
//     })
//   }

  