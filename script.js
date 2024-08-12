// console.log('Hello World!')

// // Declare a variable and assign it a prompt

// var prompt = prompt('What is your name?')

// console.log(prompt)

// if (10 > 9){
//  console.log('Yes 10 is greater than 9');
// } else{
//   console.log('This  is false')
// }


function AreYouOldEnough   (age)  {  
var age = prompt('What is your age'); 
                         
if (age <  18 && typeof age === "string") {
 alert ('You are a minor');  } 
else if (age >= 18 && age < 60) {
 alert('You are an adult')
 } else {
 alert('damn you old')
 }
}           
// AreYouOldEnough()

function introduction (age,name,location) {
  console.log(age)   
  console.log(name)   
  console.log(location)
  console.log('My age is ' + age + ' my name is ' + name + ' my location is ' + location)
}   

introduction(18, 'Mariama', 'Bronx')


function uploadAndIdentifyPlantID() {
  // Get the photo from the input button
  var photoInput= document.getElementById('photoInput');
  console.log(photoInput);
  console.log(photoInput.files[0]);

  // if no photo was selected and the user clicks on Submit
  // alert to the user to upload a photo first 
  if (photoInput.files.length === 0) {
    alert('Please select a photo to upload.');
    return;
  }
  
  // select the first file from the upload button 
    // and store it in a variable
    var selectedFile = photoInput.files[0];

  // create a new file reader so we can read the content of the file
  var reader = new FileReader();
  // set up event handler when the submit button is  clicked to read the file and start setting up the API call
  reader.onload = function (e){
    // store the base64Image in a variable
    var base64Image = e.target.result;
    console.log(base64Image)
    var apikey ='VekuRwlObe6ENXKtgY2KJuNyciyieyU0lbaTo2cIpnqPhhyDcR';
    var latitude = 49.207;
    var longitude = 16.608;
    var health = 'all';
    var similarImages =true;
    var details ='VekuRwlObe6ENXKtgY2KJuNyciyieyU0lbaTo2cIpnqPhhyDcR';
    var language ='en';
    var apiPlantIDUrl ='https://plant.id/api/v3/identification?details=${details}&language=${language}';
  };
  // Make our first API call to the Plant ID database
  // with the BASE64 image
  axios.post(
    apiPlantIDUrl,
    {
      images: [base64Image],
      latitude: latitude,
      longitude: longitude,
      health: health,
      similarImages: similarImages
    },
    {
      Headers : {
        'Api-key' : apikey,
        'Content-Type' : 'application/json'
        
      }
    }
  )
}