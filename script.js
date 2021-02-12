var jokes = ["What is a cat's favorite color?  PURR-ple!", "What kind of kitten works for the Red Cross? A first-aid Kit!", "What's worse than raining cats and dogs? Hailing taxi cabs!", "Why are cats good at video games? Because they have nine lives!", "What did the dog say when he sat on sandpaper? Ruff!", 
            "What dog keeps the best time? A watch dog!", "Why don't dogs make good dancers? Because they have two left feet!"];
function displayJoke() {
    for (i = 0; i < jokes.length; i ++) {
        alert(jokes[i]);
    }
};


//Function to validate email on Signup page

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

//Function to validate phone number on FAQS

function validatePhone(){
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    if(phoneResult == false)
    {
      alert('Please enter a valid phone number');
      return false;
    }
   return true;
}


