import {ButtonComponent} from "../../components/button/index.js";
import {SecondPage} from "../SecondPage/index.js";

export class MainPage{
    constructor(parent) {
        this.parent = parent;
    }

    clickCard(){
        const Page = new SecondPage(this.parent)
        Page.render(); 
    }

    getData(){
        return {
            id: 1,
            text : "Hello World"
        }
    }

    render(){
        this.parent.innerHTML = ''
        const button = new ButtonComponent(this.parent)
        const data = this.getData()
        button.render(data, this.clickCard.bind(this))
    }
}