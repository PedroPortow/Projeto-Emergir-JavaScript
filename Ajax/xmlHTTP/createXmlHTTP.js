function createXMLHTTPRequest(method, url, data = null, cb){
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {

        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                console.log(xhr.responseText)
                const json = JSON.parse(xhr.responseText)

               
                cb(json)
                
            }
            else if(typeof cb === 'function'){
                cb({
                    error: true,
                    status: xhr.status,
                    message: 'algo deu errado',
                })
            }
        }

    }

}

