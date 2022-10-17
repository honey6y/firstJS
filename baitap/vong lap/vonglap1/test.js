var data = [1, 3, 25, 41, 3, 2, 2,3,3,3,3, 66, 22, 5, 1, 1, 2, 651, 51, 5, 2];

var data6 = "";
var dem = 0;
for (i = 0; i < data.length; i++) {
  data6 = "";
  data6 += data[i];
  for (x = 0; x < data6.length; x++) {
    if (data6[x] == 2) {
      dem++;
    }
    if (dem === 4) {
      console.log(`vi tri cua so chua phan thu 2 thu 4 la ${i}`);
    }
  }
}