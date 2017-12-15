const fxy = require('fxy')
const fetch = require('node-fetch')

class Service{
	constructor(data){ Object.assign(this,data) }
	load(input){ return load_data(this,input) }
}

//exports
module.exports = Service

//shared actions
function load_data(service,input){
	let options = {method:service.method || 'POST'}
	if(fxy.is.data(input)) options.body = JSON.stringify(input)
	if(fxy.is.data(service.headers)) options.headers = service.headers
	return fetch(service.endpoint,options).then(response=>response[service.type || 'json']())
}