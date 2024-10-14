var v61=61;
var n=6;
if(v61>n) console.log(v61);else console.log(n);
if(v61<n) console.log(v61);else console.log(n);
if(v61==n) console.log(v61);else console.log(n);
if(v61!=n) console.log(v61);else console.log(n);
if(v61>=n) console.log(v61);else console.log(n);
if(v61<=n) console.log(v61); else console.log(n);
if(!(v61>n)) console.log(v61);else console.log(n);
if(v61>n&&v61<60) console.log(v61);else console.log(n);
v61+n>70 ? console.log("v61+n>70"):console.log("v61+n<=70");
var sum = v61+n;
console.log(sum);
sum++;
console.log(sum);
let arr = ["Я", "сижу", "дома", "и","занимаюсь","учёбой"];
for (let i = 0; i < arr.length; i++) { 
  	console.log(arr[i]);
}
arr[2].includes("дом")?console.log("дом!"):console.log("не дом! :-(");
arr.includes("дом")?console.log("дом!"):console.log("не дом! :-(");
arr.splice(1, 1); 
arr.splice(3, 1); 
for (let i = 0; i < arr.length; i++) { 
  	console.log(arr[i]);
}

function Glagol()
{
	alert("Глагол!");
	True_or_False();
	From_STR_To_INT();
	o=New_Object();
	To_High_R();
	Cons();
	o.now=new Date();
	console.log(o.now);
}
var trueorfalse = false;
function True_or_False()
{
	var isResult = confirm("Вы уверены, что хотите оформить кредит?");
	if(isResult)
		{
			trueorfalse=true;
			console.log("Кредит успешно оформлен!")
		}
	else 
		console.log("Действие отменено");
}
function From_STR_To_INT()
{
	arr[0]="12";
	console.log(Number(arr[0]));
}
function New_Object()
{
	var o ={
		name:"Glagol",
		Str : `Привет,
Мир!`,
		Variant:61,
		arrmas:["Горит", "лампа", "дома", "и","светит","фонарь"],
		numberarr:[0,1,2,3,4,5,6,7,8,9],
		o1:{
			firstpar:12,
			secondpar:"месяцев",
		},

	};
	console.log(o);
	o.arrmas[0]="Glagol";
	console.log(o.arrmas[0]);
	console.log(Math.max.apply(null, o.numberarr));
	return o;
}
function To_High_R()
{
	stra="banana";
	console.log(stra.toUpperCase());
}
function Cons(){
	console.log("Функция вызвана");
}