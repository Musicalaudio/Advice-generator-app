document.querySelector(".btn").addEventListener("click", getAdvice)


function getAdvice () {
  console.log('hi')
  fetch(`https://api.adviceslip.com/advice`, {cache: "no-cache"})
  .then(res => res.json())
  .then(data => {
    console.log(data.slip["advice"])
    document.querySelector(".card__advice").textContent = data.slip.advice
    document.querySelector(".card__advice-number").textContent = data.slip.id
  }).catch(err =>{
    console.log(`Error: ${err}`)
  })
}


window.onload = () =>{
  getAdvice();
}