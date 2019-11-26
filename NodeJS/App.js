var url = require('url');
var fs = require('fs');
//obtains the path from the files we are looking for and directs them to the file if the path is located
function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
//Throws error if file is not found
            response.writeHead(404);
            response.write('File not found!');
        } else {
		//otherwise we write the data
            response.write(data);
        }
	  //now end the response
        response.end();
    });
}

//The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
module.exports = {
  handleRequest: function(request, response) {
	//give the response
      response.writeHead(200, {'Content-Type': 'text/html'});

	//get path of file
      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
	//redirect to index.html
              renderHTML('index.html', response);
              break;
          case '/login':
		//redirect to login.html
            renderHTML('login.html', response);
            break;
          default:
		//by default give error
            response.writeHead(404);
            response.write('Route not defined');
            response.end();
      }
  }
};

