let string = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    string += "Loopy";
  }
  if (i % 4 === 0) {
    string += "Lighthouse";
  }
  if (string) {
    console.log(string);
    string = "";
  } else {
    console.log(i);
  }
}