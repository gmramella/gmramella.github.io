class Page {
	constructor() {
		this.db = TAFFY();
		this.set();
		
		this.row = this.db({id:lang}).first();
		this.key = Object.keys(this.row).slice(1,-2);
		
		this.fill();
		this.translate();
	}
	
	set() {
		this.db.insert({id:"en", title:"Home"});
		this.db.insert({id:"es", title:"Home"});
		this.db.insert({id:"pt", title:"Home"});
	}
	
	fill() {
		$("title").append(this.row[this.key]);
	}
	
	translate() {
		$("title").text(this.row[this.key]);
	}
}