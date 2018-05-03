/*var today = new Date(); //Bugün
var dd = today.getDate(); // Gün
var mm = today.getMonth()+1; //Ay -(Ocak = 0 olmasın)
var yyyy = today.getFullYear(); //Sene

if(dd<10) {
    dd = '0'+dd; //Gün "1" yerine "01" yaz
}

if(mm<10) {
    mm = '0'+mm; //Ay "1" yerine "01" yaz
}
//Gün yaz
today = yyyy + '-' + mm + '-' + dd;
var dateControl = document.querySelector('input[type="date"]');//tarih input çek
dateControl.value = today;
*/
// RadioButtonları kontrol et
function checkRadios(x)
{
var num = x+1; //0 dan başlamasın
var temp = "soru" + num; //Radiobutton "Name" oluştur
var checked = 0; // Seçili olan sayısı Genel Toplam için
var unchecked = 0; //Seçili olmayan sayısı Her soru için

var soruTemp =
  document.getElementsByName(temp);//radiobutton çek
var radios =
  document.getElementsByClassName('form-check-input'); //Bütün Radiobuttonlar
  var sonSoru = document.getElementById("ek1");

//Toplam Seçili Cevap Sayısını Bul
for (var i = 0; i < radios.length-1; i++) {
  if (radios[i].checked == true) {
    checked ++;
  }
}

//Boş mu değil mi kontrol et
for (var a = 0; a <= 4; a++)
{
  if (soruTemp[a].checked == true) {
    console.log(soruTemp[a].value);
    if (checked != 10) {
      checkRadios(num);
    }
    else
    { 
        return true;
    }
  }
  else
  {
    if(unchecked < 4){
      unchecked ++;
    }
    else if(unchecked>=4){
      alert( num + ". soruyu boş bıraktınız, lütfen cevaplayınız.");
    }
  }
}
return false;
}