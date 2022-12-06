const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')
const path = require('path')

const renderHtml =(path, res) =>{
    fs.readFile(path, (err, data) =>{
        if(err){
            res.writeHead(404)
            res.write('error: file not found')
        }else{
            res.write(data)
        }
        res.end()
    })
}
// const server = http.createServer((req, res) =>{

// })

// server.listen(3000, () => {
//     console.log('server is listening on port 3000')
// })

//atau
http
    .createServer((req, res) =>{
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })

        const url = req.url
        console.log(url)

        switch (url){
            case '/about':
                renderHtml('./about.html', res)
                break
            case '/contact':
                renderHtml('./contact.html', res)
                break  
            default:
                renderHtml('./index.html', res) 
                break
        }

        // if (url === '/about'){
        //    renderHtml('./about.html', res)
        // } else if (url === '/contact'){
        //     res.write('<h1>ini contact</h1>')
        //     res.end()
        // }else{
        //     // res.write('hello world')
        //    renderHtml('./index.html', res)
        // }
        
    })
    .listen(3000, () => {
    console.log('server is listening on port 3000..')

    })