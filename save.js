async function load() {
    // load 
    const id = document.getElementById("id").value;
    const notes = localStorage.getItem(id);

    document.getElementById('notes').value = notes;
}

load()

document.getElementById('id').addEventListener('input', load)

document.getElementById('notes').addEventListener('input', save);

async function save() {
    const id = document.getElementById("id").value;

    const notes = document.getElementById('notes').value;

    // save notes in local storage
    console.log(notes)
    localStorage.setItem(id, notes);
}