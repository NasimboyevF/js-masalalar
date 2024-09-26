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

// console.log('Massiv elementlarini chiqarish: Massivdagi barcha elementlarni chiqarish uchun for loopdan foydalaning. let array = [10, 20, 30, 40, 50];');
// let array = [10, 20, 30, 40, 50];
// for(let a = 0; a < array.length; a++)
// {
//   console.log(array[a]);
// }
// console.log('<----------------->');

// console.log(`Juft sonlarni chiqarish: 1 dan 50 gacha bo'lgan juft sonlarni chiqaradigan dastur yozing.`);
// for(let x = 1;x<=50;x++)
// {
//   x%2 == 0 ? console.log(x):  console.log(x + '= 2 ga qoldiqsiz bolinmaydi');
// }
// console.log('<----------------->');

// console.log(`Faktorial hisoblash: N sonining faktorialini hisoblaydigan dastur yozing (masalan, N = 5 bo'lsa, 5! = 5 * 4 * 3 * 2 * 1).`);
// let son = 5;
// let fakt = '=';
// let javob = 1;
// for(son; son <= son && son !=0 ;son--)
// {
//   son != 1 ? fakt=fakt + son +'*': '' ;
//   javob = javob*son;
// }

// console.log(javob,fakt);
// console.log('<----------------->');

// console.log(`Arifmetik progressiya: Boshlang'ich soni 2 bo'lgan, har bir soniga 3 qo'shiladigan 10 ta sonning yig'indisini hisoblang.`);
// let num = 2
// let numjavob = 0;
// for(let a = 1; a<=10; a++)
// {
//   numjavob=numjavob + num;
//   num = num + 3;
// }
// console.log(numjavob);
// console.log('<----------------->');

// console.log(`Harflarni takrorlash: Foydalanuvchidan matn kiritib, har bir harfni 3 marta takrorlab chiqaruvchi dastur yozing.`);
// let soz = 'farhod';
// let soz2 = '';
// for(let x = 0; x < soz.length; x++)
// {
//   soz2 = soz2 + soz[x].repeat(3);
// }
// console.log(soz2);
// console.log('<----------------->');

// console.log(`Sonlarning kvadratlarini chiqarish: 1 dan 10 gacha bo'lgan sonlarning kvadratlarini chiqaradigan dastur yozing.`);
// let kvadrat = 12;
// for(let x = 1; x <= kvadrat; x++)
// {
//   console.log(x*x);
// }
// console.log('<----------------->');

// console.log(`Teskari sonlarni chiqarish: 20 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaradigan dastur yozing.`);
// let teskari = 32;
// for(let x = 1; x<=teskari;teskari--)
// {
//   console.log(teskari);
// }
// console.log('<----------------->');

// console.log(`Eng katta sonni topish: Massivdagi eng katta sonni topish uchun for loopdan foydalaning.let numbers = [3, 17, 2, 10, 26];`);
// let numbers = [3, 227, 2, 110, 26];
// let numbersbig = 0;
// for(x = 0; x<=numbers.length-1;x++)
// {
//   if( numbers[x]>numbersbig )
//   {
//     numbersbig = numbers[x];
//   }
// }
// console.log(numbersbig);
// console.log('<----------------->');

// console.log(`Harflarni sanash: Matnda nechta "a" harfi borligini sanaydigan dastur yozing.`);
// let atakror = "assalamu alaykum";
// let atakrorlar = 0;
// for(x = 0; x<atakror.length; x++)
// {
//   atakror[x] == 'a' ? atakrorlar = atakrorlar + 1 : '';
// }
// console.log(atakrorlar);
// console.log('<----------------->');

// console.log(`O'rtacha qiymatni hisoblash: Massivdagi sonlarning o'rtacha qiymatini hisoblang.`);
// let numbersarifm = [10, 20, 30, 40, 50];
// let numbersarifmjav = 0;
// for(x = 0; x < numbersarifm.length ; x++)
// {
//   numbersarifmjav = numbersarifmjav + numbersarifm[x]
// }
// console.log(numbersarifmjav/numbersarifm.length);
// console.log('<----------------->');

// let sonlar = "";
// for (let x = 1; x <= 100; x++) {
//   x % 5 == 0 ? (sonlar += x + ",") : "";
// }
// console.log(sonlar);

// let matin = "farhod";
// let teskariMatin = "";
// for (let x = matin.length - 1; x >= 0; x--) {
//   teskariMatin += matin[x];
// }
// console.log(teskariMatin);

// const vazifa1 = function (s) {
//   javob = [];
//   for (let x = 1; x <= s; x++) {
//     let z = 0;
//     for (let y = 2; y < x; y++) {
//       if (x % y == 0) {
//         z++;
//       }
//     }
//     if (z != 0) {
//       javob += x + ",";
//     }
//   }
//   return javob;
// };

// console.log(vazifa1(30));

// // 1------------------------------------------

// const quastion1 = function (x){
//   let y = 0;
//   let z ='';
//   for(let value of x)
//   {
//     y+=value;
//     z+='+'+value;
//   }
//   z+='='+y
//   return z;
// }

// const questVal1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(quastion1(questVal1));

// // 2------------------------------------------

// const quastion2 = x =>  x = x.toString();

// const questVal2 = 123;
// console.log(typeof quastion2(questVal2), quastion2(questVal2));

// // 3------------------------------------------

// const quastion3 = (x) => x>0 ? x= x*-1 : x;

// const questVal3 = 123;
// console.log(quastion3(questVal3));

// // 4------------------------------------------

// const quastion4 = function (x) {
//   let y = 0;
//   for (let value of x) value > 0 ? (y += value) : "";
//   return y;
// };

// const questVal = [1, 2, -3, 4, 5, -6, -7];
// console.log(quastion4(questVal));

// // 5------------------------------------------

// const quastion5 = (x) => x%2==0 ? 'juft' : 'toq son';

// const questVal5 = 122;
// console.log(quastion5(questVal5));

// // 6------------------------------------------

// x =10;
// console.log(x*-1);

// // 7------------------------------------------

// const quastion7 = function (x) {
//   let y = 0;
//   for (let value of x) value === true ? y++ : "";
//   return y;
// };

// const questVal7 = [1, 2,true, -3,true, 4, 5,true, -6, -7];
// console.log(quastion7(questVal7));

// // 8------------------------------------------

// const quastion8 = function (x) {
//   let y = x[0];
//   let z = x[0]
//   for (let value of x) {
//     y < value ? (y = value) : "";
//     z > value ? (z = value) : "";
//   }
//   return (y+','+ z);
// };

// const questVal8 = [2,5,9,4,11];
// console.log(quastion8(questVal8));

// // 9------------------------------------------

// const quastion9 = function (x) {
//   if(x === true)
//   {
//     return 'yes'
//   }
//   else if (x === false) {
//     return "no";
//   }
//   else
//   {
//     return 'error'
//   }

// };

// const questVal9 = false;
// console.log(quastion9(questVal9));

// // 10------------------------------------------

// const quastion10 = (x) => x.toUpperCase();

// const questVal10 = "salom";
// console.log(quastion10(questVal10));

// // 11------------------------------------------

// const quastion11 = (x) => {
//   z = 0;
//   for(let y = 1; y <= x; y++)  z+=y;
//   return z
// }

// const questVal11 = 5;
// console.log(quastion11(questVal11));

// // 11------------------------------------------

// const quastion12 = (x) => {
//   z=''
//   for(let y = x.length -1 ; y >= 0; y--)  z+=x[y];
//   return z
// }

// const questVal12 = 'qwerty ';
// console.log(quastion12(questVal12));


const getAvarage = x => x.reduce((acc, num) => acc + num,0)/ x.length

console.log(getAvarage([1,2,3,8]));



const invert = x => {
  let z=[]
  for(let y in x) x[y] === 0 ? z.push(x[y]) : z.push(-x[y]);
  return z
}

let a =[-1,2,-3,0,-5];

console.log(invert(a));

// 1 vazifa

const getBonus = (x, y) => (y === true ? x * 10 : x);

console.log(getBonus(1200, false));

// 1 vazifa
// 2 vazifa

const solution = (x) => {
  let z = "";
  for (y = x.length - 1; y >= 0; y--) z += x[y];

  return z;
};

console.log(solution("word"));

// 2 vazifa
// 3 vazifa

const enough = (x) => {
  let y = x[0];
  for (z = 1; z < x.length; z++) {
    if (y > x[z]) y = y - x[z];
    else y = x[z] - y;
  }
  return y;
};

console.log(enough([10, 5, 5, 10, 7, 6, 3, -4]));

// 3 vazifa
// 4 vazifa

const formatMoney = (x) => (x = "$" + x.toFixed(2));

console.log(formatMoney(3));

// 4 vazifa
// 5 vazifa

const position = (y) => {
  const x = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ];
    return x.indexOf(y.toLowerCase()) + 1;

  //  for (let z in x)
  //  {
  //   if(x[z]==y)
  //   {
  //     return z*1+1
  //   }
      // }
};

console.log(position("f"));

