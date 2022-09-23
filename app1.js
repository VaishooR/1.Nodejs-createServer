const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Empty Form:</title></head>');
        res.write('<body>
                     <h3>Fill the form below:</h3>
                     <form action="/message" method="POST">
                         <input type="text" name="message">
                         <input type="submit" value="Click">
                     </form>
                   </body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>
                   <head><title>Form filled</title></head>
                   <body><h2>Welcome to Node.js Server</h2></body>
               </html>');
    res.end();    
})
server.listen(3001)
