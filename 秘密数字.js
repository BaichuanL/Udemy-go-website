let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = Number(prompt("请输入您的猜测 (" + n1 + " ~ " + n2 + ")"));

  if (guess < n1 || guess > n2) {
    alert("无效猜测。请重新猜测一个数字");
    continue;
  }

  if (guess == answer) {
    alert("您猜对了！秘密数字是" + answer);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
