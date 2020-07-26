(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyASoFuzPIoJYD494T_CQTW3TnZiVLINjFA",
        authDomain: "delicacy-eb682.firebaseapp.com",
        databaseURL: "https://delicacy-eb682.firebaseio.com",
        projectId: "delicacy-eb682",
        storageBucket: "delicacy-eb682.appspot.com",
        messagingSenderId: "746397483761",
        appId: "1:746397483761:web:2aa2bbfa46e581f75a1f50",
        measurementId: "G-13KM9XKQWD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let obj = document.querySelector('.object');
    const dbRef = firebase.database().ref().child('Order');

    dbRef.on('child_added', function(data, prevChildKey){
        var newOrder = data.val();
        obj.innerHTML +=
        `<tr>
            <td>${newOrder.name}</td>
            <td>${newOrder.number}</td>
            <td>₹${newOrder.amount}</td>
            <td>${newOrder.timestamp}</td>
            <td>${newOrder.city}</td>
        </tr>
        `
    });
}());