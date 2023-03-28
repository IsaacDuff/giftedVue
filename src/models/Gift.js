export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened ? data.opened : false
    }
}


// let giftData ={

//     createdAt: "2023-03-17T15:04:21.343Z"
//     id: "64148175b838c11cf9ce8db5"
//     opened: true
//     tag: "Unicorn!"
//     updatedAt: "2023-03-28T18:34:56.883Z"
//     url: "https://media4.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy-downsized.gif?cid=5e0f5edesopbocgvbc4cpvc1ive3si5frombujd4knhnht3c&rid=giphy-downsized.gif&ct=g"
//     __v: 0
//     _id: "64148175b838c11cf9ce8db5"
// }