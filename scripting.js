
	function meanFunction()
		{
			var ya = document.getElementById("grade_recieved1").value;
			var za = document.getElementById("total1").value;
			var xa = (+ya / +za)*100;
			document.getElementById("result1").innerHTML = xa;
			if (	(+xa/10)	<	(+za/2)	)
			{				document.getElementById("result1").style.background = "#ff6666"; 			}
			else { 				document.getElementById("result1").style.background = "#b3ff99";			}

			var yb = document.getElementById("grade_recieved2").value;
			var zb = document.getElementById("total2").value;
			var xb = (+yb / +zb)*100;
			document.getElementById("result2").innerHTML = xb;
			if (	(+xb/10)	<	(+zb/2)	)
			{ 				document.getElementById("result2").style.background = "#ff6666"; 			}
			else { 				document.getElementById("result2").style.background = "#b3ff99";			}

			var yc = document.getElementById("grade_recieved3").value;
			var zc = document.getElementById("total3").value;
			var xc = (+yc / +zc)*100;
			document.getElementById("result3").innerHTML = xc;
			if (	(+xc/10)	<	(+zc/2)	)
			{ 				document.getElementById("result3").style.background = "#ff6666"; 			}
			else { 				document.getElementById("result3").style.background = "#b3ff99";			}

			var yd = document.getElementById("grade_recieved4").value;
			var zd = document.getElementById("total4").value;
			var xd = (+yd / +zd)*100;
			document.getElementById("result4").innerHTML = xd;
			if (	(+xd/10)	<	(+zd/2)	)
			{ 				document.getElementById("result4").style.background = "#ff6666"; 			}
			else { 				document.getElementById("result4").style.background = "#b3ff99";			}

			var avg = (xa + xb + xc + xd)/4 ;
			document.getElementById("resultf").innerHTML = avg;
			if (	avg	<	50	)
			{ 				document.getElementById("resultf").style.background = "#ff6666";
								document.getElementById("resultf").innerHTML = avg + "% &nbsp; Fail";			}
			else { 				document.getElementById("resultf").style.background = "#b3ff99";
										document.getElementById("resultf").innerHTML = avg  + "% &nbsp; Pass";	}
			}


function weightFunction()
  		{
      			var ya = document.getElementById("grade_recieved1").value;
      			var za = document.getElementById("total1").value;
            var wa = document.getElementById("weighta").value;
      			var xa = (+ya / +za)*(+wa);
      			document.getElementById("result1").innerHTML = xa;
						if (	+xa	<	(+wa/2)	)
						{				document.getElementById("result1").style.background = "#ff6666"; 			}
						else { 				document.getElementById("result1").style.background = "#b3ff99";			}

      			var yb = document.getElementById("grade_recieved2").value;
      			var zb = document.getElementById("total2").value;
      			var wb = document.getElementById("weightb").value;
            var xb = (+yb / +zb)*(+wb);
      			document.getElementById("result2").innerHTML = xb;
						if (	+xb	<	(+wb/2)	)
						{				document.getElementById("result2").style.background = "#ff6666"; 			}
						else { 				document.getElementById("result2").style.background = "#b3ff99";			}


      			var yc = document.getElementById("grade_recieved3").value;
      			var zc = document.getElementById("total3").value;
      			var wc = document.getElementById("weightc").value;
            var xc = (+yc / +zc)*wc;
      			document.getElementById("result3").innerHTML = xc;
						if (	+xc	<	(+wc/2)	)
						{				document.getElementById("result3").style.background = "#ff6666"; 			}
						else { 				document.getElementById("result3").style.background = "#b3ff99";			}


      			var yd = document.getElementById("grade_recieved4").value;
      			var zd = document.getElementById("total4").value;
      			var wd = document.getElementById("weightd").value;
            var xd = (+yd / +zd)*wd;
      			document.getElementById("result4").innerHTML = xd;
						if (	+xd	<	(+wd/2)	)
						{				document.getElementById("result4").style.background = "#ff6666"; 			}
						else { 				document.getElementById("result4").style.background = "#b3ff99";			}


						var wtotal = +wa + +wb + +wc + +wd;
      			var avg = ((xa + xb + xc + xd)/wtotal)*100 ;
      			document.getElementById("resultf").innerHTML = avg;
						if (	avg	<	50	)
						{ 				document.getElementById("resultf").style.background = "#ff6666";
											document.getElementById("resultf").innerHTML = avg + "% &nbsp&nbsp;; Fail";			}
						else { 				document.getElementById("resultf").style.background = "#b3ff99";
													document.getElementById("resultf").innerHTML = avg  + "% &nbsp; Pass";	}
      	}
