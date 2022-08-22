function showfield1(name){
    if(name == 'student') {
      document.getElementById('div2').innerHTML ='<div class="form control" style=font-size:16.5px;margin-bottom:12px;font-family:Times New Roman;> Hello student! </div>';
      document.getElementById('div3').style.display="block";
      document.getElementById('math').required = true;
      document.getElementById('computer_science').required = true;
      document.getElementById('chemistry').required = true;
      document.getElementById('english').required = true;
      document.getElementById('other1').required = true;
      document.getElementById('div4').style.display="none";
    }
    else if(name == 'specialist') {
      document.getElementById('div2').innerHTML ='<div class="form control" style=font-size:16.5px;margin-bottom:12px;font-family:Times New Roman;> Your services are welcome Pro! </div>';
      document.getElementById('div3').style.display="none";
      document.getElementById('div4').style.display="none";
    }
    else {
      document.getElementById('div2').innerHTML='';
      document.getElementById('div3').style.display="none";
      document.getElementById('div4').style.display="block";
      document.getElementById('green').required = true;
      document.getElementById('orange').required = true;
      document.getElementById('blue').required = true;
      document.getElementById('black').required = true;
      document.getElementById('other2').required = true;
      document.getElementById('DontHave').required = true;
    }	
  }