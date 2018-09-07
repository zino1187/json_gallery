class Movie{
	constructor(container, title, url, category,release,running_time,budget,gross,width,height,x,y){
		/*정보*/
		this.container=container;
		this.title=title;
		this.url=url;
		this.category=category;
		this.release=release;
		this.running_time=running_time;
		this.budget=budget;
		this.gross=gross;

		/*디자인 관련*/
		this.img=document.createElement("img");
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		
		$(this.img).attr("src", this.url);

		$(this.img).css({
			position:"absolute",
			left:this.x+"px",
			top:this.y+"px",
			width:this.width+"px",
			height:this.height+"px",
		});
		
		$(this.container).append(this.img);

		$(this.img).click(()=>{
			//movePointer(this.x);
			$(pointer.div).animate({
				left:(this.x%1000)+"px"
			}).promise().then(()=>{
				showDetail(this.url, this.title,this.category, this.release,this.running_time,this.budget, this.gross);
			});
		});
	}	
	
}