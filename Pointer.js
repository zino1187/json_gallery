class Pointer{
	constructor(container, width,height,x,y){
		this.container=container;
		this.div=document.createElement("div");
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		
		$(this.div).css({
			width:this.width+"px",
			height:this.height+"px",
			border:"5px solid red",
			position:"absolute",
			left:this.x+"px",
			top:this.y+"px",
			background:"yellow",
			opacity:0.4

		});
		$(this.container).append(this.div);
	}
}