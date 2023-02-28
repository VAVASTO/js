export class ButtonComponent{
    constructor(parrent){
        this.parrent = parrent;
    }

    getHTML(data){
        return('<button type="button" id = "1" class="btn btn-primary">Click here</button>')
    }

    addListeners(data, listener) {
        document.getElementById('1').addEventListener("click", listener)
    }

    render(data, listener){
        this.parrent.insertAdjacentHTML('beforeend', this.getHTML(data))
        this.addListeners(data, listener)
    }
}