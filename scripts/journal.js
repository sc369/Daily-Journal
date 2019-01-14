const allJournalEntries = []

function makeJournalEntry(thisDate, thisTitle, thisTextEntry, thisMood) {
    let journalEntry = {
        date: thisDate,
        title: thisTitle,
        text: thisTextEntry,
        mood: thisMood,
    }
    allJournalEntries.push(journalEntry)
}

makeJournalEntry("Jan 14", "ChickenMonkey", "Chicken Monkey was interesting", "happy")
makeJournalEntry("Jan 14", "Concatenating output", "This was an elegant way to do the exercise", "happy")

console.log(allJournalEntries[0])
console.log(allJournalEntries[1])
