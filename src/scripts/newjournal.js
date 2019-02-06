const container = document.querySelector(".container")
let allEntries = []

const createJournalHTML = (entry) => {
    return `
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

const getEntries = () => {
    return fetch("http://127.0.0.1:8088/entries")
        .then(res => res.json())
        .then(parsedEntries => {
            allEntries = parsedEntries
            parsedEntries.forEach(element => {
                const html = createJournalHTML(element)
                addToDOM(html)
            });

            createJournalHTML(parsedEntries)
        })
}

getEntries()

const createObject = (text, title, emotion, objectDate) => {

    return {
        title: title,
        date: objectDate,
        mood: emotion,
        text: text
    }
}

const addToDOM = (entryAsHtml) => {
    document.querySelector(".container").innerHTML += entryAsHtml
}


const postEntry = (entryObject) => {
    return fetch("http://127.0.0.1:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(res => res.json())
}
const textarea = document.querySelector("#textarea")
const conceptsCovered = document.querySelector("#conceptsCovered")
const emotionList = document.querySelector("#emotionList")
const inputDate = document.querySelector("#journalDate")
const saveButton = document.querySelector("#save_button")

saveButton.addEventListener("click", (event) => {
    const text = textarea.value
    const title = conceptsCovered.value
    const mood = emotionList.value
    const objectDate = inputDate.value
    const newObject = createObject(text, title, mood, objectDate)
    postEntry(newObject)
    const newHTML = createJournalHTML(newObject)
    addToDOM(newHTML)
})
const radioButtons = document.querySelector("#radio_buttons")
radioButtons.addEventListener("click", (event) => {
    console.log(container)
    console.log(container.firstChild)
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    console.log(container.innerHTML)
    const mood = event.target.value
    const filteredEntries = allEntries.filter((entry) => {
        return entry.mood === mood
    })
    filteredEntries.forEach((entry) => {
        const newHTML = createJournalHTML(entry)
        addToDOM(newHTML)

    })

})