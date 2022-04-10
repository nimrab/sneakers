export default {
    state: {
        shopList:[{
            id: 1,
            title: 'Nike Red',
            descr: 'Some desrcripton of brand new sneakers',
            img: require('../assets/img/1.png'),
            gallery: [
                {name:'Nike Red First', img: require('../assets/img/1.png')},
                {name:'Nike Red Second', img: require('../assets/img/2.png')},
                {name:'Nike Red Third', img: require('../assets/img/3.png')},
            ]
        },
        {
            id: 2,
            title: 'Nike Brown',
            descr: 'Some desrcripton of brand new sneakers',
            img: require('../assets/img/4.png'),
            gallery:[
                {name:'Nike Brown First', img: require('../assets/img/4.png')},
                {name:'Nike Brown Second', img: require('../assets/img/5.png')},
                {name:'Nike Brown Third', img: require('../assets/img/6.png')},
            ]
        },
        {
            id: 3,
            title: 'Nike Green',
            descr: 'Some desrcripton of brand new sneakers',
            img: require('../assets/img/7.png'),
            gallery:[
                {name:'Nike Green First', img: require('../assets/img/7.png')},
                {name:'Nike Green Second', img: require('../assets/img/8.png')},
                {name:'Nike Green Third', img: require('../assets/img/9.png')},
            ]
        },
        {
            id: 4,
            title: 'Nike Flower',
            descr: 'Some desrcripton of brand new sneakers',
            img: require('../assets/img/10.png'),
            gallery:[
                 {name:'Nike Flower Second', img: require('../assets/img/11.png')},
                {name:'Nike Flower Third', img: require('../assets/img/12.png')},
            ]
        }]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(el => el.id === id)
        }
    }
}