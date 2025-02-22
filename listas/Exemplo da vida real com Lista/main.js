const items = []

function clear(){
    console.log("estou no clear()")
    items.length = 0
    let playlist = document.get("playlist")
    playlist.parentElement.removeChild(playlist)
}

function addVideo() {
    console.log("estou no addVideo()")
    const video = document.getElementById("video").value
    
    if (!video){
        return
    }

    items.push(video)
    atuaizarTela()
}



function removeAt(index) {
    items.splice(index, 1)
    atuaizarTela()
}

function atuaizarTela() {
    const playlist = document.getElementById("playlist")
    playlist.innerHTML = ""

    items.forEach((video, index) => {
        const li = document.createElement("li")
        li.draggable = true
        li.dataset.index = index
        li.innerHTML = `${video} <button onclick="removeAt(${index})">❌</button>`

        li.addEventListener("dragstart", dragStart)
        li.addEventListener("dragover", dragOver)
        li.addEventListener("drop", drop)

        playlist.appendChild(li)
    })
}

let draggedItem = null

function dragStart(event) {
    draggedItem = event.target.dataset.index
}

function dragOver(event) {
    event.preventDefault()
}

function drop(event) {
    event.preventDefault()
    const targetIndex = event.target.closest("li")?.dataset.index
    
    if (draggedItem !== null && targetIndex !== undefined && draggedItem !== targetIndex) {
        const movedItem = items.splice(draggedItem, 1)[0]
        items.splice(targetIndex, 0, movedItem)
        atuaizarTela()
    }
}
