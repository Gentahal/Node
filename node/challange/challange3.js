const genta = require('http')

const halilintar = genta.createServer((req, res) => {
    let url,
    method,
    dataResponse

    res.setHeader('Content-Type', 'application/json')

    url = req.url

    method = req.method ?? 'get'

    if (url.toLocaleLowerCase === '/') {
        dataResponse = {
            data: "ini adalah halaman homePage"
        }
    }else if(url.toLocaleLowerCase === '/about') {
        dataResponse = {
            data: " Ini adalah About"
        }
    }else if (url.toLocaleLowerCase === '/from') {
        if (method === 'POST') {
            dataResponse = {
                data: 'Kamu masuk from dengan method post'
            }
        }else{
            dataResponse = {
                data: 'Maaf silahkan coba kembali,dan ubah method ${method},menjadi POST'
            }
        }
    }else{
        dataResponse = {
            data: 'Page no Found {404}'
        }
    }
})

genta.listen(3400)