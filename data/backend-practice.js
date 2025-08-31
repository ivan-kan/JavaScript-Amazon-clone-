/*
To send message to the backend side, we will use XMLHttpRequest: a built-in class of JS 
*/ 

const xhr = new XMLHttpRequest();  // This creates a new HTTP message to send to the backend 

xhr.addEventListener('load', () => {         // to wait after we receive the response 
    console.log(xhr.response); 
});

xhr.open('GET', 'https://supersimplebackend.dev');   
/*
1st: type of HTTP message
- 'GET': get some info from the backend 
- 'POST': create something
- 'PUT': update something 
- 'DELETE': delete something 

2nd: where to send this HTTP message (url)
*/
xhr.send();