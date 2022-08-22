function showfield1(name){
  if(name == 'student') {
    document.getElementById('div2').innerHTML ='<div class="form control" style=font-size:16.5px;margin-bottom:12px;font-family:Times New Roman;> Hello student! </div>';
    document.getElementById('div3').style.display="block";
    document.getElementById('div3').innerHTML ='<div style="display:block;" class="control-form"><label style="margin-bottom:12px;margin-bottom:12px;">What is your favorite subject?</label><input type="radio"id="math"name="favorite_subject" value="math">Math</input></label><label><input type="radio"id="computer_science"name="favorite_subject">Computer Science</input></label><label><input type="radio"id="chemistry"name="favorite_subject" value="chemistry">Chemistry</input></label><label><input type="radio"id="english"name="favorite_subject" value="english">English</input></label><label><input type="radio"id="other1"name="favorite_subject" value="other">Other</input></label></div>';
    document.getElementById('math').required = true;
    document.getElementById('computer_science').required = true;
    document.getElementById('chemistry').required = true;
    document.getElementById('english').required = true;
    document.getElementById('other1').required = true;
    document.getElementById('div4').innerHTML="<input style='display:none;' type='radio'id='colors' name='favorite_color' value=' ' checked></input>";
    
  }
  else if(name == 'specialist') {
    document.getElementById('div2').innerHTML ='<div class="form control" style=font-size:16.5px;margin-bottom:12px;font-family:Times New Roman;> Your services are welcome Pro! </div>';
    document.getElementById('div3').innerHTML="<input style='display:none;' type='radio'id='math' name='favorite_subject' value=' ' checked></input>";
    document.getElementById('div4').innerHTML="<input style='display:none;' type='radio'id='colors' name='favorite_color' value=' ' checked></input>";
    document.getElementById('div4').style.display="none";
  }
  else {
    document.getElementById('div2').innerHTML='';
    document.getElementById('div3').innerHTML="<input style='display:none;' type='radio'id='math' name='favorite_subject' value=' ' checked></input>";
    document.getElementById('div4').style.display="block";
    document.getElementById('div4').innerHTML="<div class='control-form'> <label style='margin-bottom:12px;margin-top:12px;'>What is your favorite color? </label> <input type='radio' id='green' name='favorite_color'>Green</input> <input type='radio'id='orange' name='favorite_color'>Orange</input><input type='radio'id='blue' name='favorite_color'>Blue</input><input type='radio'id='black'name='favorite_color'>Black</input><input type='radio' id='other2' name='favorite_color'>Other</input><input type='radio'id='DontHave'name='favorite_color'>Don't have one</input></div>";
    document.getElementById('green').required = true;
    document.getElementById('orange').required = true;
    document.getElementById('blue').required = true;
    document.getElementById('black').required = true;
    document.getElementById('other2').required = true;
    document.getElementById('DontHave').required = true;
  }	
}