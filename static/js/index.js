function loadFile() {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function removeInput(output, name) {
    var elem = document.getElementById('output');
    var name = document.getElementById('name');
    elem.remove()
    name.value = null
}