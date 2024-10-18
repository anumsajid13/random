const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyyy I love u too jaani";
  gif.src = "/Love Peach Sticker - Love Peach Goma - Discover & Share GIFs.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});


noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();


  const maxX = 100;
  const maxY =100;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});