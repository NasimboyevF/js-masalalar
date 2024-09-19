

// let day = 'Dushanba';

//   day = day.toLowerCase()

// if (day == 'dushanba' || day == 'seshanba' || day == 'chorshanba' || day =='payshanba' || day == "juma") {
//   console.log('ish kuni');
// } 
// else if( day == 'shanba' || day == 'yakshanba')
// {
//   console.log('dam olish kuni');
// }
// else
// {
//   console.log('bunday hafta nomi yoq');
// }

// let a = 17;
// let b = 13;
// let c = 17;

// if (a > b) {
//   if (a>c) {
//     console.log('a');
//   }
//   else
//   {
//     console.log('c');
//   }
// }
// else
// {
//   if (b>c) {
//     console.log('b');
//   }
//   else
//   {
//     console.log('c');
//   }
// }


// let e = 0;
// for(let d = 1; d<=100; d++)
// {
//   e=e+d
// }

// console.log(e);


// let text = 'sdfgsafggjgjgjgjgjgjgjgjgjgjgjgjgh';

//   text.length > 10 ? console.log('10 tadan kop'):  console.log('10 tadan kam');
  
//   // if (text.length > 10) {
//   //   console.log('10 tadan kop');
//   // }
//   // else
//   // {
//   //   console.log('10 tadan kam');
//   // }



//   function salom(x)
//   {
//     console.log('salom '+x);
//   }

//   salom('asdsd') 



//   function bolish(y) {
//     console.log(y/10);
//   }

//   bolish(8)



console.log('Massiv elementlarini chiqarish: Massivdagi barcha elementlarni chiqarish uchun for loopdan foydalaning. let array = [10, 20, 30, 40, 50];');
let array = [10, 20, 30, 40, 50];
for(let a = 0; a < array.length; a++)
{
  console.log(array[a]);
}
console.log('<----------------->');

console.log(`Juft sonlarni chiqarish: 1 dan 50 gacha bo'lgan juft sonlarni chiqaradigan dastur yozing.`);
for(let x = 1;x<=50;x++)
{
  x%2 == 0 ? console.log(x):  console.log(x + '= 2 ga qoldiqsiz bolinmaydi');
} 
console.log('<----------------->');
console.log(`Faktorial hisoblash: N sonining faktorialini hisoblaydigan dastur yozing (masalan, N = 5 bo'lsa, 5! = 5 * 4 * 3 * 2 * 1).`);
let son = 5;
let fakt = '';
let javob = 1;
for(son; son <= son && son !=0 ;son--)
{
  son != 1 ? fakt=fakt + son +'*': '' ;
  javob = javob*son;
}
console.log(javob);
console.log('<----------------->');
console.log(`Arifmetik progressiya: Boshlang'ich soni 2 bo'lgan, har bir soniga 3 qo'shiladigan 10 ta sonning yig'indisini hisoblang.`);
let num = 2
let numjavob = 0;
for(let a = 1; a<=10; a++)
{  
  numjavob=numjavob + num;
  num = num + 3;
}
console.log(numjavob);
console.log('<----------------->');
console.log(`Harflarni takrorlash: Foydalanuvchidan matn kiritib, har bir harfni 3 marta takrorlab chiqaruvchi dastur yozing.`);
let soz = 'farhod';
let soz2 = '';
for(let x = 0; x < soz.length; x++)
{
  soz2 = soz2 + soz[x] + soz[x] + soz[x];
}
console.log(soz2);
console.log('<----------------->');
console.log(`Sonlarning kvadratlarini chiqarish: 1 dan 10 gacha bo'lgan sonlarning kvadratlarini chiqaradigan dastur yozing.`);
let kvadrat = 12;
for(let x = 1; x <= kvadrat; x++)
{
  console.log(x*x);
}
console.log('<----------------->');
console.log(`Teskari sonlarni chiqarish: 20 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaradigan dastur yozing.`);
let teskari = 32;
for(let x = 1; x<=teskari;teskari--)
{
  console.log(teskari);
}
console.log('<----------------->');
console.log(`Eng katta sonni topish: Massivdagi eng katta sonni topish uchun for loopdan foydalaning.let numbers = [3, 17, 2, 10, 26];`);
let numbers = [3, 227, 2, 110, 26];
let numbersbig = 0;
for(x = 0; x<=numbers.length-1;x++)
{
  console.log(numbers[x]);
  

  if( numbers[x]>numbersbig )
  {
    numbersbig = numbers[x];
  }
  else if(numbers[x]>numbers[x+1] && numbers[x]>numbersbig )
  {
    numbersbig = numbers[x];
  }
  console.log(numbersbig);
}
console.log('<----------------->');
console.log(`Harflarni sanash: Matnda nechta "a" harfi borligini sanaydigan dastur yozing.`);
let atakror = "assalamu alaykum";
let atakrorlar = 0;
for(x = 0; x<atakror.length; x++)
{
  atakror[x] == 'a' ? atakrorlar = atakrorlar + 1 : '';
}
console.log(atakrorlar);
console.log('<----------------->');
console.log(`O'rtacha qiymatni hisoblash: Massivdagi sonlarning o'rtacha qiymatini hisoblang.`);
let numbersarifm = [10, 20, 30, 40, 50];
let numbersarifmjav = 0;
for(x = 0; x < numbersarifm.length ; x++)
{
  numbersarifmjav = numbersarifmjav + numbersarifm[x]
}
console.log(numbersarifmjav/numbersarifm.length);
console.log('<----------------->');






























