export class ToastComponent{
    constructor(parrent){
        this.parrent = parrent
    }
    getHTML(){
        return (`<div id="liveToast" class="toast">
        <div class="toast-header">
          <strong class="me-auto">Toast Header</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">
          <p>Some text inside the toast body</p>
        </div>
      </div>button
      `)
    }

    render(){
        this.parrent.insertAdjacentHTML('beforeend', this.getHTML())
        const toast = new bootstrap.Toast(document.getElementById('liveToast'))
        toast.show()

        // window.onload = function() {
        //     var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        //     var toastList = toastElList.map(function(toastEl) {
        //       return new bootstrap.Toast(toastEl)
        //     })
        //     toastList.forEach(toast => toast.show()) 
            
        //   }
    }
}