// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJdjgFUa029KvUNwreuOBnvGIby_VvFlo",
  authDomain: "livetoeat-85771.firebaseapp.com",
  databaseURL: "https://livetoeat-85771.firebaseio.com",
  projectId: "livetoeat-85771",
  storageBucket: "livetoeat-85771.appspot.com",
  messagingSenderId: "917585415764",
  appId: "1:917585415764:web:11cc58414f5a7b637267c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var rootRef = firebase.database().ref();

function FormSubmission() {
  var UserPreferredVehicle = document.getElementById("FormTransport");
  var NumberofVehicles = document.getElementById("NumberofVehicles");
  var Organization = document.getElementById("Organization");
  var Address = document.getElementById("address");
  var PhoneNumber = document.getElementById("phone-number");
  var EmailDonate = document.getElementById("emaildonate");
  var Fruits = document.getElementById("Fruits");
  var Vegetables = document.getElementById("Vegetables");
  var Dairy = document.getElementById("Dairy");
  var Grains = document.getElementById("Grains");
  var MeatPoultry = document.getElementById("MeatandPoultry");
  var Nuts = document.getElementById("Nuts");
  var Lentils = document.getElementById("Lentils");
  var Seafood = document.getElementById("Seafood");
  var Other = document.getElementById("Other")
  var Transportation = rootRef.child("Transportation");
  var DonorUserInformation = rootRef.child("User_Information");
  var DonationItems = rootRef.child("Donation_Items");
  Transportation.push({
    User_Preferred_Vehicle: UserPreferredVehicle.value,
    Number_of_Vehicles: parseInt(NumberofVehicles.value)});
  DonorUserInformation.push({
    Donor_Organization: Organization.value,
    Donor_Address: Address.value,
    Donor_Phone_Number: parseInt(PhoneNumber.value),
    Donor_Email: EmailDonate.value});
  DonationItems.push({
    Fruits_Given: parseInt(Fruits.value),
    Vegetables_Given: parseInt(Vegetables.value),
    Dairy_Given: parseInt(Dairy.value),
    Grains_Given: parseInt(Grains.value),
    MeatPoultry_Given: parseInt(MeatPoultry.value),
    Nuts_Given: parseInt(Nuts.value),
    Lentils_Given: parseInt(Lentils.value),
    Seafood_Given: parseInt(Seafood.value),
    Other_Given: (Other.value)
  });
    
}


function FormSubmissionRecipients(){
  var OrganizationR = document.getElementById("reciporgname");
  var AddressR = document.getElementById("recipaddress");
  var PhoneNumberR = document.getElementById("recipphone-number");
  var EmailR = document.getElementById("recipemail")
  var DateR = document.getElementById("recipdate")
  var TimeR = document.getElementById("reciptime")
  var FruitsR = document.getElementById("recipFruits");
  var VegetablesR = document.getElementById("recipVegetables");
  var DairyR = document.getElementById("recipDairy");
  var GrainsR = document.getElementById("recipGrains");
  var MeatPoultryR = document.getElementById("recipMeatandPoultry");
  var NutsR = document.getElementById("recipNuts");
  var LentilsR = document.getElementById("recipLentils");
  var SeafoodR = document.getElementById("recipSeafood");
  var RecipFood = rootRef.child("Recipients_Food");
  var UserInformationRecip = rootRef.child("User_Information_Recipients");
  UserInformationRecip.push({
    Recipient_Organization: OrganizationR.value,
    Recipient_Address: AddressR.value,
    Recipient_PhoneNumber: parseInt(PhoneNumberR.value),
    Recipient_Email: EmailR.value,
    Date_Delivered: DateR.value,
    Time_Delivered: TimeR.value,
  })
  RecipFood.push({
    Fruits_Wanted: parseInt(FruitsR.value),
    Vegetables_Wanted: parseInt(VegetablesR.value),
    Dairy_Wanted: parseInt(DairyR.value),
    Grains_Wanted: parseInt(GrainsR.value),
    MeatPoultry_Wanted: parseInt(MeatPoultryR.value),
    Nuts_Wanted: parseInt(NutsR.value),
    Lentils_Wanted: parseInt(LentilsR.value),
    Seafood_Wanted: parseInt(SeafoodR.value),
  });
}
  
  
function FormSubmissionFeedback(){
  var UserFeedback =document.getElementById("Feedback");
  var Feedback = rootRef.child("Feedback");
  Feedback.push({
    Feedback: UserFeedback.value
  })
}
