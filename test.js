
countries = ["Canada","Russia","India","Australia"]
var move = function(dx,dy) {
        this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                });
        for(var i=0; i<countries.length;i++){
        	var path = s.select("#"+countries[i])
        	var curBox = this.getBBox()
        	if (!(this.data("name__")==countries[i])){
        		
        		if(Snap.path.isBBoxIntersect(curBox,path.getBBox())){
        			path.attr({"class":"orange"}).animate({transform:"s1.3,1.3"},500,mina.ease)

        		}  
        		else{
        			path.attr({"class":"sym"}).animate({transform:"s1,1"},500,mina.ease)
        		}		
        	}
        }

}

var start = function() {
        this.data('origTransform', this.transform().local );
        this.data('start', this.transform().local );
}
var stop = function() {
		this.animate({transform:this.data("start")},500);
		for(var i=0; i<countries.length;i++){
			path = s.select("#"+countries[i]);
			path.attr({"class":"sym"}).animate({transform:"s1,1"},500,mina.ease)

		}
}

var s = Snap("#paper");
Snap.load("countries.svg",onLoad);
function onLoad(data){
	s.append(data)
	var pathes = {}
	for(var i=0; i<countries.length;i++){
		path = s.select("#"+countries[i])
		path.data("name__",countries[i]).attr({class:"sym"})
		pathes[countries[i]] = path
		path.drag(move, start, stop );
		path.hover(
			function(el){
				this.attr({"opacity":1,class:"fadein"});
			},
			function(el){
				this.attr({class:"sym"});
			})

	}
	s.text(100,50,'Snap.js').attr({"class":"text"});

			
};