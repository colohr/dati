const Type = services=>{
	return Base => class extends Base{
		static get micro(){ return services[this.name] }
	}
}

//exports
module.exports = Type