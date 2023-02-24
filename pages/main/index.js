import {ButtonComponent} from "../../components/button/index.js";
import {ProductPage} from "../product/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://sun9-west.userapi.com/sun9-40/s/v1/ig2/3FCa--x-ksg1v_NL15ErX49jyeG8JrtsuZ58EckTU7L-D3LDIxr-XiwKEL-OuHwU-8dtCXbOHMPpAZ_sdf-y_9Hi.jpg?size=1620x2160&quality=96&type=album",
                title: "Акция",
                text: "Такой акции вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://sun1.userapi.com/sun1-47/s/v1/ig2/yJUiHeKhWSUDrCuuqevYdqrSoofHA9Y5gyP_FSleh3cFfSqCjxQWJ47fmK-VVykeL3NcjG9Qk7NO0SORVEGMVr10.jpg?size=971x2160&quality=95&type=album",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://sun9-west.userapi.com/sun9-56/s/v1/if1/haPcri5rJ4vGtJvdlnrbg7vofVrxchz92R8TWS6UNhB4trIv5DpM0ypkreWExWCYnWBzSUOV.jpg?size=1621x2160&quality=96&type=album",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
        ]
    }
     
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })

        
    }
}
