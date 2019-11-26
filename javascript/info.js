function checkInfo() {
//Js is Working
	
//Validating Gender 
	if (document.forms["infoForm"]["gender1"].checked==false && 
		document.forms["infoForm"]["gender2"].checked==false ){
		alert("Please select a gender");
		return;
	}
	
	if (document.forms["infoForm"]["gender1"].checked==true && 
		document.forms["infoForm"]["gender2"].checked==true ){
		alert("Please only select one gender");
		return;
	}
	
//Validating Age 
	var age=document.forms["infoForm"]["age"].value;
		  
		  if (age <18 || age > 110){
			alert("Please enter a valid age that is 18 and over");
			return;
		}
		  else if (isNaN(age)) {
			alert("Please enter a numeric value for your age");
			return;
		}
				
		
		
		
//Validating Weight 
	var weight=document.forms["infoForm"]["weight"].value;
		if (weight <25 || weight >1400){
			alert("Please enter a valid weight");
			return;
		}
		else if (isNaN(weight)) {
			alert("Please enter a numeric value for your weight");
			return;
		}

//Validating Height 
	var height=document.forms["infoForm"]["height"].value;
		if (height <70 || height>240 || height == ""){
			alert("Please enter a valid height");
			return;
		}
		
		else if (isNaN(height)) {
			alert("Please enter a numeric value for your height");
			return;
		}
				


//Validating Goal Weight (Optional)
var goal=document.forms["infoForm"]["goal"].value;
	if(goal == "" || goal == null){
		alert("Thank you for entering your information!");
		return;
	}
		else if (isNaN(goal)) {
			alert("Please enter a numeric value for your goal weight");
			return;
		}
			alert("Thank you for enterting your information!");
	


	
}// End of CheckInfo() Function 






 


 
