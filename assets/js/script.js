const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("#dayRegisterBtn")

btn.addEventListener("click", () => dayRegister())
form.addEventListener("change", () => saveDay())

const saveDay = () => localStorage.setItem("CompletedDays@habits", JSON.stringify(nlwSetup.data))

const dayRegister = () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    return alert("Dia já adicionado!")
  }

  nlwSetup.addDay(today)
}

const savedData = JSON.parse(localStorage.getItem("CompletedDays@habits")) || {}

nlwSetup.setData(savedData)
nlwSetup.load()