function generatecaptcha()
		{
			
			var alpha=new Array("a","b" ,"c", "d", "e", "f", "g", "h", "i", "j" ,"k" ,"l","m", "n", "o", "p", "q", "r", "s", "t" ,"u", "v","w","x","y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ,"L","M" ,"N" ,"O" ,"P", "Q", "R", "S", "T", "U" ,"V","W","X","Y","Z");
               
		var i;
			for(i=0;i<5;i++){
				var a=alpha[Math.floor(Math.random()*alpha.length)];
				var b=alpha[Math.floor(Math.random()*alpha.length)];
				var c=alpha[Math.floor(Math.random()*alpha.length)];
				var d=alpha[Math.floor(Math.random()*alpha.length)];
				var e=alpha[Math.floor(Math.random()*alpha.length)];
				var f=alpha[Math.floor(Math.random()*alpha.length)];
				var g=alpha[Math.floor(Math.random()*alpha.length)];
			}
			var code=a+b+c+d+e+f+g;
			
			document.getElementById("maincaptcha").value=code
		}
		function checkvalidcaptcha(){
			var string1=removeSpaces(document.getElementById("maincaptcha").value);
				var string2=removeSpaces(document.getElementById("txtinput").value);
					if(string1==string2){
						document.getElementById("sucess").innerHTML="form id validated sucessfully"
					}
					else{
						document.getElementById("error").innerHTML="please enter a valid captcha";
						return false;
					}
		}
		function removeSpaces(string){
			return string.split('').join('');
		}