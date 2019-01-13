// Function that takes a string of <photoName>.<ext>, <cityName>, <date> <time>
// if two pictures are taken at the same place, numbered chronologically

// reg /(\w+\.\w+\,\s)(\w+\,s\)(\d+\-\d+\-\d+\s)(\d+\:\d+\:\d+)/g

function photoSorter(str) {
  //   let re = /(\.\w+)/g;
  //   let re2 = /(^\w\:\d{2}\:\d{2}\s)/g;
  let strArr = [];
  let file = /\w+(\.\w{3,4})/g;
  let name = /^(\s\w+)\,/g;
  let fullex = /\w+(\.\w{3,4}\,\s\w+)\,/g;
  let full = /(\S+\s\S+\s\S{10}\s\S{8})/g;
  let fileExt = str.split(file);
  let fileCity = str.split(fullex);
  let city = str.split(name);
  let cityFile = fileCity.map((item, i) => {
    let re = /(\.\w+)\,\s(\w+)/;
    i % 2 !== 0 ? (item = item.replace(re, "$2$1")) : null;
  });
  console.log(cityFile);
}

// 1 .
// 2 , ,
// 2 - -
// 2 : :

let testStr =
  "photo.jpg, Warsaw, 2013-09-05 14:08:15 john.png, London, 2015-06-20 15:13:22 myFriends.png, Warsaw, 2013-09-05 14:07:13 Eiffel.jpg, Paris, 2015-07-23 08:03:02 pisatower.jpg, Paris, 2015-07-22 23:59:59 BOB.jpg, London, 2015-08-05 00:02:03 notredame.png, Paris, 215-09-01 12:00:00";

photoSorter(testStr);
