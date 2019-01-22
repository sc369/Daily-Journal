const allJournalEntries = []

function makeJournalEntry(thisDate, thisTitle, thisTextEntry, thisMood, thisId) {
    let journalEntry = {
        date: thisDate,
        title: thisTitle,
        text: thisTextEntry,
        mood: thisMood,
        id: thisId
    }
    allJournalEntries.push(journalEntry)
}

makeJournalEntry("Jan 14", "ChickenMonkey", "Chicken Monkey was interesting", "happy", 1)
makeJournalEntry("Jan 14", "Concatenating output", "This was an elegant way to do the exercise", "happy", 2)

const createJournalHTML = (entry) => `
         <h3>${entry.title}</h3>
         <p>${entry.date}</p>
         <p>${entry.text}</p>
         <p>mood: ${entry.mood}</p>
        `

const addToDom = (entryAsHtml) => {
document.querySelector(".container").innerHTML += entryAsHtml
}

fetch('http://localhost:3000/entries')
  .then(entries => entries.json())
  .then(parsedEntries => {
    parsedEntries.forEach(entry => {
    const entryAsHtml = createJournalHTML(entry)
    addToDom(entryAsHtml)
})
}) 

  

allJournalEntries.forEach(entry => {
    const entryAsHtml = createJournalHTML(entry)
    addToDom(entryAsHtml)
})