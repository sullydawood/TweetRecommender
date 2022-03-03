<html>

    <head>
    </head>

    <body>
            <!-- https://firebase.google.com/docs/web/setup#available-libraries> --> 
          
            import {initializeApp} from firebase/app 
            import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

            <script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js"></script>
            <script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"></script>
            <script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"></script> 
            
            <script>

            const firebaseConfig = {
            apiKey: "AIzaSyCs155ZCXSlCedRL6soHiorisrZXYut-0Y",
            authDomain: "favtweetreturn.firebaseapp.com",
            databaseURL: "https://favtweetreturn-default-rtdb.firebaseio.com",
            projectId: "favtweetreturn",
            storageBucket: "favtweetreturn.appspot.com",
            messagingSenderId: "306448330393",
            appId: "1:306448330393:web:c112e89f06766b4f5ad208",
            measurementId: "G-KEYEZ3MPCV"
            };
            firebase.initializeApp(firebaseConfig)  
          
                function writeData() {
                    firebase.database().ref("User").set(
                        {
                            name: document.getElementById("nameField"),
                            age: document.getElementById("ageField")

                        }
                    )


                }
       
          </script>


    <h1> User Database </h1>
    <input type = "text" placeholder= "name" id = "nameField">
    <input type = "text" placeholder= "age" id = "ageField">
    <button onclick = "writeData()"> Submit </button>
    
    </body>
</html>