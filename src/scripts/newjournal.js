const createJournalHTML = (entry) => { `
<article class = "journalEntry">         
  <section class = "title">
  <h3>${entry.title}</h3>
  </section>
  <section class = "date">
  <p>${entry.date}</p>
  </section>
  <section class = "text">
  <p>${entry.text}</p>
  </section>
  <section class = "mood">
  <p>mood: ${entry.mood}</p>
  </section>
  `
}
const addToDom = (entryAsHtml) => {
    document.querySelector(".container").innerHTML += entryAsHtml
}

const getEntries = () => {
    return fetch("http://127.0.0.1:8088/entries")
        .then(res => res.json())
}
const postEntry = (entryObject) => {
    return fetch("http://127.0.0.1:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObject)
    })
        .then(res => res.json())
}
const container = document.querySelector("#container")
const createObject = () => {



}

const textarea = document.querySelector("#textarea")
const conceptsCovered = document.querySelector("#conceptsCovered")
console.log(conceptsCovered)

container.addEventListener("click", (event) => {
console.log(textarea.value)
console.log(conceptsCovered.value)

})