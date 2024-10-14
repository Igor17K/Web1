document.addEventListener("DOMContentLoaded", function(event) {
init();
});
var postext;
var firsttext;
var secondtext;
function init() {
  result = prompt("Введите какой-либо адрес, информацию о котором хотите узнать посредством системы Яндекс Геокодер");
var uri = "https://api.ipify.org/?format=json";
var request = new XMLHttpRequest();
request.open("GET", uri);

var url1="https://restcountries.com/v3.1/name/russia";
var request1=new XMLHttpRequest();
request1.open("GET",url1);

var url2 = "http://numbersapi.com/random/trivia";
var request2 = new XMLHttpRequest();
request2.open("GET",url2);

var url3="https://geocode-maps.yandex.ru/1.x/?lang=ru_RU&apikey=1e7d4297-0754-4bd3-b616-1e05a1a25dd5&geocode="+result+"&format=json";
var request3 = new XMLHttpRequest();
request3.open("GET",url3);
var request4 = new XMLHttpRequest();
// Обработка ответа от сервера
request.onload = function() {
// Преобразование полученного текста в JSON-объект
var obj = JSON.parse(request.responseText);
// Пример ответа сервера {"ip":"93.81.27.81"}
// Вывод свойства ip в консоль
console.log(obj.ip);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj.ip;
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
};
// Отправка запроса на сервер
request.send();

request1.onload = function() {
// Преобразование полученного текста в JSON-объект
var obj1 = JSON.parse(request1.responseText);
// Пример ответа сервера {"ip":"93.81.27.81"}
// Вывод свойства ip в консоль
console.log(obj1[0].name.official);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].name.official;
  my_div = document.getElementById("org_div3");
  document.body.insertBefore(newDiv, my_div);

  console.log(obj1[0].capital[0]);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].capital[0];
  my_div = document.getElementById("org_div4");
  document.body.insertBefore(newDiv, my_div);

  console.log(obj1[0].region);
newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].region;
  my_div = document.getElementById("org_div5");
  document.body.insertBefore(newDiv, my_div);

console.log(obj1[0].name.nativeName.rus.common);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].name.nativeName.rus.common;
  my_div = document.getElementById("org_div6");
  document.body.insertBefore(newDiv, my_div);

console.log(obj1[0].languages.rus);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].languages.rus;
  my_div = document.getElementById("org_div7");
  document.body.insertBefore(newDiv, my_div);

  console.log(obj1[0].translations.swe.official);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj1[0].translations.swe.official;
  my_div = document.getElementById("org_div8");
  document.body.insertBefore(newDiv, my_div);

//console.log(obj1[0].translations.swe.official);
var newDiv = document.createElement("img");
newDiv.src=obj1[0].flags.png;
  my_div = document.getElementById("org_div9");
  document.body.insertBefore(newDiv, my_div);


};
// Отправка запроса на сервер
request1.send();

request2.onload = function() {
// Преобразование полученного текста в JSON-объект
var obj2 = request2.responseText;
// Пример ответа сервера {"ip":"93.81.27.81"}
// Вывод свойства ip в консоль
console.log(obj2);
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj2;
  my_div = document.getElementById("org_div10");
  document.body.insertBefore(newDiv, my_div);

};
// Отправка запроса на сервер
request2.send();
request3.onload = function() {
// Преобразование полученного текста в JSON-объект
//var obj3 = request3.responseText;
var obj3 = JSON.parse(request3.responseText);
// Пример ответа сервера {"ip":"93.81.27.81"}
// Вывод свойства ip в консоль
var newDiv = document.createElement("div");
  newDiv.innerHTML =obj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  postext=obj3.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  my_div = document.getElementById("org_div11");
  document.body.insertBefore(newDiv, my_div);
  var newDiv1 = document.createElement("div");
  newDiv1.innerHTML=obj3.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
  my_div = document.getElementById("org_div12");
  document.body.insertBefore(newDiv1, my_div);
[firsttext,secondtext]=postext.split(/\s/,2);

var url4="https://api.openweathermap.org/data/2.5/weather?lat="+secondtext+"&lon="+firsttext+"&appid=9cb8d3b9988d44d79942d50d4b1d487d";

request4.open("GET",url4);
request4.send();
};
// Отправка запроса на сервер
request3.send();
request4.onload = function() {
// Преобразование полученного текста в JSON-объект
//var obj3 = request3.responseText;
var obj4 = JSON.parse(request4.responseText);
// Пример ответа сервера {"ip":"93.81.27.81"}
// Вывод свойства ip в консоль
var newDiv = document.createElement("span");
  newDiv.innerHTML =obj4.name;
  my_div = document.getElementById("org_div14");
  document.body.insertBefore(newDiv, my_div);

  var newDiv1 = document.createElement("div");
  newDiv1.innerHTML =obj4.main.temp-273+"&deg; C температура в градусах Цельсия";
  my_div = document.getElementById("org_div15");
  document.body.insertBefore(newDiv1, my_div);

  var newDiv2 = document.createElement("div");
  newDiv2.innerHTML =obj4.main.humidity+" % влажность в процентах";
  my_div = document.getElementById("org_div16");
  document.body.insertBefore(newDiv2, my_div);

  var newDiv3 = document.createElement("div");
  newDiv3.innerHTML =obj4.main.pressure+" мм. рт. ст. атмосферное давление";
  my_div = document.getElementById("org_div17");
  document.body.insertBefore(newDiv3, my_div);

  var newDiv4 = document.createElement("div");
  newDiv4.innerHTML =obj4.clouds.all+" % облачность";
  my_div = document.getElementById("org_div18");
  document.body.insertBefore(newDiv4, my_div);

  var newDiv5 = document.createElement("div");
  newDiv5.innerHTML =obj4.wind.speed+" м/с скорость ветра ";
  my_div = document.getElementById("org_div19");
  document.body.insertBefore(newDiv5, my_div);
};
// Отправка запроса на сервер

}


