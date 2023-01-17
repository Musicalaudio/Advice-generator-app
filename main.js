document.querySelector(".btn").addEventListener("click", ()=>{
  console.log('hi')
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
    console.log(data.slip["advice"])
    document.querySelector(".card__advice").textContent = data.slip["advice"]
    document.querySelector(".card__advice-number").textContent = data.slip["id"]
  }).catch(err =>{
    console.log(`Error: ${err}`)
  })
})