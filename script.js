const forms = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(forms)
const button = document.querySelector("header button")

button.addEventListener("click", add)
forms.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habtis", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habtis")) || {}
nlwSetup.setData(data)
nlwSetup.load() 
