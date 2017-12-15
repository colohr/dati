const fxy = require('fxy')
const Service = require('./Service')

class MicroServices{
	constructor(folder){
		let items = fxy.tree(folder,'json').items.only
		for(let item of items){
			let data = JSON.parse(item.content)
			let name = get_service_name(item)
			data.name = name
			this[name] = new Service(data)
		}
	}
}

//exports
module.exports = Service
module.exports.Services = get_services

//shared actions
function get_service_name(item){
	let name = item.name.replace('.json','')
	return item.identity = name
}
function get_services(folder){
	return new MicroServices(folder)
}
