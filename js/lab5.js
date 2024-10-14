document.addEventListener( "DOMContentLoaded" ,  function(event) {
	document.getElementById("idh2").textContent="Анкета 61 вариант";
	var point = document.getElementById("idh2");
point.addEventListener("mouseover",function() {
	this.classList.add('newclassname');
})
point.addEventListener("mouseout",function() {
   this.classList.toggle('newclassname');
})
var div = document.createElement('div');
document.body.appendChild(div);
let d=new Date();

div.textContent=d.toLocaleString().slice(0,-3);
div.style.fontSize+=40+'px';
var elements = document.getElementsByTagName("input");
console.log(elements.length);
var elements1 = document.getElementsByTagName("label");
var i=0;
while(i<elements1.length){
	elements1[i].style.fontWeight="bold";
	elements1[i].style.color="orange";
	i++;
}
var el = document.getElementById("sexField");
el.remove();
var select = document.getElementById('formField');
let optoins = select.optoins;
let newOption = new Option('Очно-заочная', 'oz');
select.append(newOption);

var div1 = document.createElement('div');
var elementby1 = document.getElementById('auth');

elementby1.insertBefore(div1, elementby1.firstChild);
div1.textContent="Этот абзац на странице по теме Глагол был добавлен посредством возможностей, предоставляемых JavaScript\n";
let date = document.getElementById('date');
    date.addEventListener('input', function(event) {
    	var yy = this.valueAsDate.getFullYear();
    	if(yy<1961)
    		{alert("Вы ввели недопустимую дату!");
    	this.valueAsDate=new Date();
    }
    });

    br1 = document.createElement('br');
    document.getElementById( 'auth' ).appendChild( br1 );
checkbox = document.createElement( 'input' );

            checkbox.type = 'checkbox';

            checkbox.name = 'chbox1';

            checkbox.id = 'chbox1';

            document.getElementById( 'auth' ).appendChild( checkbox );
checkbox.addEventListener('change', function(event) {
       
    	if(this.checked==true){
    		if(document.getElementById("chbox2")){
    			textbox=document.getElementById("chbox2");
    		textbox.style.display = 'block';
    		}
    		else{textbox = document.createElement( 'input' );

            textbox.type = 'text';

            textbox.name = 'chbox2';

            textbox.id = 'chbox2';

            document.getElementById( 'auth' ).appendChild( textbox );
        }
    	}
    	else{
    		textbox=document.getElementById("chbox2");
    		textbox.style.display = 'none';

    	}
    	
    	
    });
	var pointttt = document.getElementById("auth");
pointttt.addEventListener("submit",function() {
   const formData = new FormData(pointttt); 
  
	var obj = {
  type: 'Объект',
};
  obj.name = formData.get('Name');
  obj.surname = formData.get('Family');
  obj.sexselect=formData.get('sexselect');
  obj.nkurs=formData.get('Nkurs');
  obj.date=formData.get('date');
  obj.formselect=formData.get('formselect');
  obj.verb=formData.get('Verb');
  obj.comment=formData.get('Comment');
  var checkboxes = document.getElementsByClassName('checkbox');
  obj.checkboxesChecked = [];
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        obj.checkboxesChecked.push(checkboxes[index].value);
     }
  }
  console.log(obj);
  alert("Объект создан! До окончания данного уведомления оно доступно в консоли браузера");
	
})

textbut1 = document.createElement( 'input' );
textbut1.type = 'button';
textbut1.name = 'but1';
textbut1.id = 'but1';
form12=document.getElementById("nameFieldlabel");
form12.before(textbut1);
textbut1.addEventListener('click', function(event) {
      document.getElementById("nameField").remove();
      document.getElementById("nameFieldlabel").remove();
      textbut1.remove();
    });
textbut2 = document.createElement( 'input' );
textbut2.type = 'button';
textbut2.name = 'but2';
textbut2.id = 'but2';
form12=document.getElementById("familyFieldlabel");
form12.before(textbut2);
textbut2.addEventListener('click', function(event) {
      document.getElementById("familyField").remove();
      document.getElementById("familyFieldlabel").remove();
textbut2.remove();
    });

textbut3 = document.createElement( 'input' );
textbut3.type = 'button';
textbut3.name = 'but3';
textbut3.id = 'but3';
form12=document.getElementById("sexFieldlabel");
form12.before(textbut3);
textbut3.addEventListener('click', function(event) {
      //document.getElementById("sexField").remove();
      document.getElementById("sexFieldlabel").remove();
textbut3.remove();
    });

textbut4 = document.createElement( 'input' );
textbut4.type = 'button';
textbut4.name = 'but4';
textbut4.id = 'but4';
form12=document.getElementById("datelabel");
form12.before(textbut4);
textbut4.addEventListener('click', function(event) {
      document.getElementById("date").remove();
      document.getElementById("datelabel").remove();
textbut4.remove();
    });
textbut5 = document.createElement( 'input' );
textbut5.type = 'button';
textbut5.name = 'but5';
textbut5.id = 'but5';
form12=document.getElementById("kursFieldlabel");
form12.before(textbut5);
textbut5.addEventListener('click', function(event) {
      document.getElementById("kursFieldlabel").remove();
      document.getElementById("kursField").remove();
textbut5.remove();
    });
form11=document.getElementById("kursField");
form11.onkeyup="this.value = this.value.replace(/[0-9]/g,'');";
textbut6 = document.createElement( 'input' );
textbut6.type = 'button';
textbut6.name = 'but6';
textbut6.id = 'but6';
form12=document.getElementById("formFieldlabel");
form12.before(textbut6);
textbut6.addEventListener('click', function(event) {
      document.getElementById("formField").remove();
      textbut6.remove();
      document.getElementById("formFieldlabel").remove();

    });
textbut7 = document.createElement( 'input' );
textbut7.type = 'button';
textbut7.name = 'but7';
textbut7.id = 'but7';
form12=document.getElementById("verbFieldlabel");
form12.before(textbut7);
textbut7.addEventListener('click', function(event) {
      document.getElementById("verbField").remove();
      textbut7.remove();
      document.getElementById("verbFieldlabel").remove();
    });
textbut8 = document.createElement( 'input' );
textbut8.type = 'button';
textbut8.name = 'but8';
textbut8.id = 'but8';
form12=document.getElementById("glvr");
form12.before(textbut8);
textbut8.addEventListener('click', function(event) {
      document.getElementById("glvr").remove();
      textbut8.remove();
      document.getElementById("glvrlabel").remove();

    });
textbut9 = document.createElement( 'input' );
textbut9.type = 'button';
textbut9.name = 'but9';
textbut9.id = 'but9';
form12=document.getElementById("glsp");
form12.before(textbut9);
textbut9.addEventListener('click', function(event) {
      document.getElementById("glsp").remove();
      textbut9.remove();
      document.getElementById("glsplabel").remove();
    });
textbut10 = document.createElement( 'input' );
textbut10.type = 'button';
textbut10.name = 'but10';
textbut10.id = 'but10';
form12=document.getElementById("commentFieldlabel");
form12.before(textbut10);
textbut10.addEventListener('click', function(event) {
      document.getElementById("commentField").remove();
      document.getElementById("commentFieldlabel").remove();
textbut10.remove();
    });

    });