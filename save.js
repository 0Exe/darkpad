async function load() {
    // load 
    const notes = localStorage.getItem('notes');
    console.log(notes)

    document.getElementById('notes').value = notes;
}

load()

document.getElementById('notes').addEventListener('input', save);

async function save() {
    const notes = document.getElementById('notes').value;

    // save notes in local storage
    console.log(notes)
    localStorage.setItem('notes', notes);
}