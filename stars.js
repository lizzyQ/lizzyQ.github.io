// JavaScript Document
function getNewSize(){
		     w = window.innerWidth;
			   h = window.innerHeight;
			  return Array(w,h);
}

window.onload = function(){

	 var canvas = document.getElementById("sky"),
		   c = canvas.getContext("2d"),
       stars = {},
		   starN = 0,
		   starNum = 35;

			 canvas.width = getNewSize()[0];
			 canvas.height = getNewSize()[1];

			 var hw = canvas.width/2;
			 var hh = canvas.height/2;
       var fov = hw + hh; //stars are fov px away from us


		 c.fillStyle = "rgb(0,0,0)";
		 c.fillRect(0,0,canvas.width,canvas.height);

	function star(){

				this.vx = Math.floor(Math.random()*hw*4)-hw*2;
		    this.vy = Math.floor(Math.random()*hh*4)-hh*2;
        this.vz = Math.floor(Math.random()*fov);

			  starN++;
				stars[starN] = this;
				this.id = starN;

		    this.life = 0;
				this.maxLife = Math.random()*15+35;
				//by setting it random number it disappear in different time
	}

	star.prototype.draw = function(){
        this.vz-=5; //speed = 0.8
		      //mapping 3D to 2D
		    this.x =hw+(this.vx/this.vz)*fov;
	      this.y =hh+(this.vy/this.vz)*fov;
				        //var scale = fov/(this.vz+fov);
				       //this.x = this.vx * scale + hw;
				      //this.y = this.vy * scale + hh;

             //delete star if it reach maxLife
				this.life++;
				if(this.life >= this.maxLife){
				    delete stars[this.id];
				}

				c.fillStyle= "rgba( 255,255,255,0.7)";
		    c.fillRect(this.x, this.y, 1, 1);
	};
	setInterval(function(){
			       canvas.width = w;
		         canvas.height = h;
		         c.clearRect(0,0,w,h);
			       for(var i=0; i<starNum; i++){
								 new star();
					   };
			      for(var i in stars){
				        stars[i].draw();
				    };
	 }, 40);


};


function resize(){
	w=Math.round(getNewSize()[0]);
	h=Math.round(getNewSize()[1]);
	}
