let arrayb3 = [1, 3, 5, 1, 2, 5, 1, 5, 1, 6, 2, 9, 1];
function bai3e() {
    let uniqueArray1 = arrayb3.filter((element, index) => {
      return arrayb3.indexOf(element) !== index;
    });
    uniqueArray = [...new Set(uniqueArray1)];
    console.log(uniqueArray);
  }
  bai3e()