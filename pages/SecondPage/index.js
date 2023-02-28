import { ButtonComponent } from "../../components/button/index.js"
import { MainPage } from "../main/index.js"
import { ToastComponent } from "../../components/toast/index.js"

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


        `)
    }

    render(){
       this.parent.innerHTML = ''
       this.parent.insertAdjacentHTML('beforeend', this.getHTML())
       const button = new ButtonComponent(this.parent)
       const data = this.getData()
       button.render(data, this.clickBack.bind(this))
       const toast = new ToastComponent(this.parent)
       toast.render()
    }
}