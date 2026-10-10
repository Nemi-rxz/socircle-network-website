const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8'};
http.createServer((req,res)=>{
 const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 const file = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
 const full = path.join(root,file);
 if (!full.startsWith(root)) {res.writeHead(403); return res.end('Forbidden');}
 fs.readFile(full,(err,data)=>{ if(err){fs.readFile(path.join(root,'index.html'),(e,d)=>{res.writeHead(e?404:200,{'Content-Type':'text/html; charset=utf-8'});res.end(e?'Not found':d)});return;} res.writeHead(200,{'Content-Type':types[path.extname(full)]||'application/octet-stream'});res.end(data); });
}).listen(process.env.PORT||3000,()=>console.log('Socircle site ready on port '+(process.env.PORT||3000)));
