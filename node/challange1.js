const genta = require("http")

const requestListener = function (req,res) {
    res.dataHead(200)
    res.end('Hello genta')
}

const halilintar = genta.createServer(requestListener);

halilintar.listen(8000)