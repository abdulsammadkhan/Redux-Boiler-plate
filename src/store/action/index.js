import firebase from '../../config/firebase';







const set_data=(data)=>{
    return (dispatch)=>{
        console.log("Running...")
        dispatch({type:"setdata",users:{name:"hayaankhan",email:"chonsar@gmail.com"}})
    
    }
}

const facebook_login=()=>{

    console.log("fb running..")
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log("User==>",user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage);
            
            
          });


    }
}

export{
    set_data,
    facebook_login
}