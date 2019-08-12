class Menu {
	constructor() {
		this.db = TAFFY();
		this.set();
		
		this.row = this.db({id:lang}).first();
		this.keys = Object.keys(this.row).slice(1,-2);
		
		this.fill();
		this.translate();
	}
	
	set() {
		this.db.insert({id:"en", home:"Home", curriculum:"Curriculum", links:"Links", materials:"Materials", music:"Music", online:"Online", portfolio:"Portfolio", studies:"Studies", tutorials:"Tutorials", contact:"Contact"});
		this.db.insert({id:"pt", home:"Home", curriculum:"Currículo", links:"Links", materials:"Materiais", music:"Música", online:"Online", portfolio:"Portfólio", studies:"Estudos", tutorials:"Tutoriais", contact:"Contato"});
		this.db.insert({id:"es", home:"Home", curriculum:"Currículo", links:"Links", materials:"Materiales", music:"Música", online:"Online", portfolio:"Portfólio", studies:"Estudios", tutorials:"Tutoriales", contact:"Contacto"});
	}
	
	fill() {
		this.keys.forEach((key) => {
			$("#menu ul").append("<li><a href="+key+".html></a></li>");
		});
		var location = window.location.href.split("html/")[1].split(".")[0];
		$("a[href$='"+location+".html']").css("background-color", "#0f0").css("opacity", 0.5);
	}
	
	translate() {
		this.keys.forEach((key) => {
			$("a[href$='"+key+".html']").text(this.row[key]);
		});
	}
}