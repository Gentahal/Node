const {setServer} = require('dns')
const genta = require('http')
const { json } = require('stream/consumers')

const halilintar =genta.createServer((req,res) => {
    let url,
    dataResponse

    res.setHeader('Content-Type', 'application/json')
    url = req.url

    if(url === '/home') {
        dataResponse = {
            data: "Ini Home"
        }
    }else if (url === '/about') {
        dataResponse = {
            data: "Ini about"
        }
    }else if (url === '/from') {
        dataResponse = {
            data: "ini from"
        }
    }else {
        dataResponse = {
            data: '404 Notfound'
        }
    }
    return res.end(JSON.stringify(dataResponse))
})
halilintar.listen(2000)