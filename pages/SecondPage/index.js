import { ButtonComponent } from "../../components/button/index.js"
import { MainPage } from "../main/index.js"

export class SecondPage {
    constructor (parent){
        this.parent = parent
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render();
    }

    getData(){
        return {
            id: 1,
            text : "Hello World"
        }
    }

    getHTML(){
        return (`
            <h1><del>Hello world!</del></h1>
            

            <button type="button" class="btn btn-primary" id="liveToastBtn">Показать лайв тосты</button>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Domestic_Goose.jpg" class="rounded me-2" alt="rfrfr">
                  <strong class="me-auto">Bootstrap</strong>
                  <small>11 мин назад</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                </div>
                <div class="toast-body">
                  Привет, мир! Это тост-сообщение.
                </div>
              </div>
            </div>



        `)
    }

    render(){
       this.parent.innerHTML = ''
       this.parent.insertAdjacentHTML('beforeend', this.getHTML())
       const button = new ButtonComponent(this.parent)
       const data = this.getData()
       button.render(data, this.clickBack.bind(this))
    }
}