function draw(){

	c = document.getElementById("myCanvas")
	ctx = c.getContext("2d")

	ctx.canvas.height = window.innerHeight-8
	ctx.canvas.width = window.innerWidth-8

	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
	ctx.lineJoin="round"
	ctx.lineCap="round"
	
	//console.log(document.getElementById('2D').checked)

	if(document.getElementById('2D').checked==true){

	//ctx.fillStyle="rgba(255,255,255,0)"
	ctx.fillStyle="#fff"
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

	ctx.fillStyle="rgba(210,185,160,0.8)"
	//ctx.fillStyle="#fff"

	//ctx.rect(ctx.canvas.width/2-18,ctx.canvas.height/2-18,36,36)
	//ctx.fill()
	//ctx.stroke()

	/*

	for(i=0;i<part.length;i++){

		//console.log(part[i].depth)

		if(part[i].name=="top"){
			ctx.rect(ctx.canvas.width/2-(part[i].width/2)*sf2,ctx.canvas.height/2-(part[i].depth/2)*sf2,part[i].width*sf2,part[i].depth*sf2)
		}

		if(part[i].name=="leg"){
			ctx.rect(ctx.canvas.width/2-(part[i].width/2)*sf2,ctx.canvas.height/2-(part[i].height/2)*sf2,part[i].width*sf2,part[i].height*sf2)
		}

	}

	*/

	space=2

	ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2)

	ctx.lineWidth=0.5	

	ctx.strokeStyle="#000"

	//ctx.fillStyle="rgb(210,185,160)"
	//ctx.fillStyle="rgb(210,185,160)"

	ctx.beginPath()

	for(i=0;i<tableTop.cutout.length;i++){
		ctx.lineTo(tableTop.cutout[i].X*sf2,tableTop.cutout[i].Y*sf2)
	}
	ctx.lineTo(tableTop.cutout[0].X*sf2,tableTop.cutout[0].Y*sf2)

	ctx.fill()
	ctx.stroke()

	ctx.strokeStyle="#0000aa"
	
	for(i=0;i<tableTop.pockets.length;i++){

		ctx.beginPath()
		for(j=0;j<tableTop.pockets[i].length;j++){
			ctx.lineTo(tableTop.pockets[i][j].X*sf2,tableTop.pockets[i][j].Y*sf2)
		}
		ctx.lineTo(tableTop.pockets[i][0].X*sf2,tableTop.pockets[i][0].Y*sf2)
		ctx.stroke()

	}


	ctx.strokeStyle="#000"

	//front support

	ctx.beginPath()
	for(i=0;i<tableSupportFront.cutout.length;i++){
		ctx.lineTo(tableSupportFront.cutout[i].X*sf2,(tableSupportFront.cutout[i].Y+table.supportWidth/2+space+table.depth/2)*sf2)
	}
	ctx.lineTo(tableSupportFront.cutout[0].X*sf2,(tableSupportFront.cutout[0].Y+table.supportWidth/2+space+table.depth/2)*sf2)


	for(i=0;i<tableSupportFront.holes.length;i++){
		ctx.moveTo(tableSupportFront.holes[i][0].X*sf2,(tableSupportFront.holes[i][0].Y+table.supportWidth/2+space+table.depth/2)*sf2)
		for(j=0;j<tableSupportFront.holes[i].length;j++){
		ctx.lineTo(tableSupportFront.holes[i][j].X*sf2,(tableSupportFront.holes[i][j].Y+table.supportWidth/2+space+table.depth/2)*sf2)
		}
	}


	ctx.fill()
	ctx.stroke()

	//side

	ctx.beginPath()
	for(i=0;i<tableSupportSide.cutout.length;i++){
		ctx.lineTo((tableSupportSide.cutout[i].X-table.width/2-table.supportWidth/2-space)*sf2,tableSupportSide.cutout[i].Y*sf2)
	}
	ctx.lineTo((tableSupportSide.cutout[0].X-table.width/2-table.supportWidth/2-space)*sf2,tableSupportSide.cutout[0].Y*sf2)


	for(i=0;i<tableSupportSide.holes.length;i++){

		ctx.moveTo((tableSupportSide.holes[i][0].X-table.width/2-table.supportWidth/2-space)*sf2,tableSupportSide.holes[i][0].Y*sf2)
		for(j=1;j<tableSupportSide.holes[i].length;j++){
			ctx.lineTo((tableSupportSide.holes[i][j].X-table.width/2-table.supportWidth/2-space)*sf2,tableSupportSide.holes[i][j].Y*sf2)
		}
	}

	ctx.fill()
	ctx.stroke()

	//leg1

	ctx.beginPath()
	for(i=0;i<tableLeg1.cutout.length;i++){
		ctx.lineTo((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2)
	}
	ctx.lineTo((tableLeg1.cutout[0].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[0].Y*sf2)

	for(i=0;i<tableLeg1.holes.length;i++){
		ctx.moveTo((tableLeg1.holes[i][0].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.holes[i][0].Y*sf2)
		for(j=0;j<tableLeg1.holes[i].length;j++){
			ctx.lineTo((tableLeg1.holes[i][j].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.holes[i][j].Y*sf2)
		}
		ctx.lineTo((tableLeg1.holes[i][0].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.holes[i][0].Y*sf2)
	}

	ctx.fill()
	ctx.stroke()


	//leg2	

	ctx.beginPath()
	for(i=0;i<tableLeg2.cutout.length;i++){
		ctx.lineTo((tableLeg2.cutout[i].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[i].Y*sf2)
	}
	ctx.lineTo((tableLeg2.cutout[0].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[0].Y*sf2)

	for(i=0;i<tableLeg2.holes.length;i++){
		ctx.moveTo((tableLeg2.holes[i][0].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.holes[i][0].Y*sf2)
		for(j=0;j<tableLeg2.holes[i].length;j++){
			ctx.lineTo((tableLeg2.holes[i][j].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.holes[i][j].Y*sf2)
		}
		ctx.lineTo((tableLeg2.holes[i][0].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.holes[i][0].Y*sf2)
	}

	ctx.fill()
	ctx.stroke()

	//foot1	

	ctx.beginPath()
	for(i=0;i<tableFoot1.cutout.length;i++){
		ctx.lineTo((tableFoot1.cutout[i].X+table.width/2+table.legWidth*0.75+space)*sf2,(tableFoot1.cutout[i].Y+table.height/2+table.legWidth/4+space)*sf2)
	}
	ctx.lineTo((tableFoot1.cutout[0].X+table.width/2+table.legWidth*0.75+space)*sf2,(tableFoot1.cutout[0].Y+table.height/2+table.legWidth/4+space)*sf2)
	
	ctx.moveTo((tableFoot1.holes[0][0].X+table.width/2+table.legWidth*0.75+space)*sf2,(tableFoot1.holes[0][0].Y+table.height/2+table.legWidth/4+space)*sf2)
	for(i=0;i<tableFoot2.holes[0].length;i++){
		ctx.lineTo((tableFoot1.holes[0][i].X+table.width/2+table.legWidth*0.75+space)*sf2,(tableFoot1.holes[0][i].Y+table.height/2+table.legWidth/4+space)*sf2)
	}


	ctx.fill()
	ctx.stroke()

	//foot2	

	ctx.beginPath()
	for(i=0;i<tableFoot2.cutout.length;i++){
		ctx.lineTo((tableFoot2.cutout[i].X+table.width/2+table.legWidth*2+space-+table.legWidth*0.25)*sf2,(tableFoot2.cutout[i].Y+table.height/2+table.legWidth/4+space)*sf2)
	}
	ctx.lineTo((tableFoot2.cutout[0].X+table.width/2+table.legWidth*2+space-table.legWidth*0.25)*sf2,(tableFoot2.cutout[0].Y+table.height/2+table.legWidth/4+space)*sf2)

	ctx.moveTo((tableFoot2.holes[0][0].X+table.width/2+table.legWidth*2+space-table.legWidth*0.25)*sf2,(tableFoot2.holes[0][0].Y+table.height/2+table.legWidth/4+space)*sf2)
	for(i=0;i<tableFoot2.holes[0].length;i++){
		ctx.lineTo((tableFoot2.holes[0][i].X+table.width/2+table.legWidth*2+space-table.legWidth*0.25)*sf2,(tableFoot2.holes[0][i].Y+table.height/2+table.legWidth/4+space)*sf2)
	}

	ctx.fill()

	ctx.moveTo((tableFoot2.pockets[0].X+table.width/2+table.legWidth*2+space-+table.legWidth*0.25)*sf2,(tableFoot2.pockets[0].Y+table.height/2+table.legWidth/4+space)*sf2)

	ctx.strokeStyle="#0000aa"

	for(i=0;i<tableFoot2.pockets.length;i++){
		ctx.lineTo((tableFoot2.pockets[i].X+table.width/2+table.legWidth*2+space-+table.legWidth*0.25)*sf2,(tableFoot2.pockets[i].Y+table.height/2+table.legWidth/4+space)*sf2)
	}
	ctx.stroke()

	ctx.strokeStyle="#000"

	//ctx.fillStyle="#0000ff"

	//shelf
	if(document.getElementById('shelf').checked==true){

	ctx.beginPath()

	for(i=0;i<tableShelf.cutout.length;i++){
		ctx.lineTo(tableShelf.cutout[i].X*sf2,(tableShelf.cutout[i].Y-table.depth+table.overHang+(thickness/2)-space)*sf2)
	}
	ctx.lineTo(tableShelf.cutout[0].X*sf2,(tableShelf.cutout[0].Y-table.depth+table.overHang+(thickness/2)-space)*sf2)
	ctx.stroke()
	ctx.fill()


	ctx.strokeStyle="#0000aa"
	
	if(tableShelf.pockets.length>0){

		for(i=0;i<tableShelf.pockets.length;i++){

			ctx.beginPath()
			for(j=0;j<tableShelf.pockets[i].length;j++){
				ctx.lineTo(tableShelf.pockets[i][j].X*sf2,(tableShelf.pockets[i][j].Y-table.depth+table.overHang+(thickness/2)-space)*sf2)
			}
			ctx.lineTo(tableShelf.pockets[i][0].X*sf2,(tableShelf.pockets[i][0].Y-table.depth+table.overHang+(thickness/2)-space)*sf2)
			ctx.stroke()

	}

	}


	ctx.strokeStyle="#000"

	//block

	ctx.beginPath()
	for(i=0;i<tableShelfBlock.cutout.length;i++){
		ctx.lineTo((tableShelfBlock.cutout[i].X+table.width/2)*sf2,(tableShelfBlock.cutout[i].Y-(table.depth/2)-2-space)*sf2)
	}
	ctx.lineTo((tableShelfBlock.cutout[0].X+table.width/2)*sf2,(tableShelfBlock.cutout[0].Y-(table.depth/2)-2-space)*sf2)

	ctx.moveTo((tableShelfBlock.holes[0][0].X+table.width/2)*sf2,(tableShelfBlock.holes[0][0].Y-(table.depth/2)-2-space)*sf2)
	for(i=0;i<tableShelfBlock.holes[0].length;i++){
		ctx.lineTo((tableShelfBlock.holes[0][i].X+table.width/2)*sf2,(tableShelfBlock.holes[0][i].Y-(table.depth/2)-2-space)*sf2)
	}
	ctx.lineTo((tableShelfBlock.holes[0][0].X+table.width/2)*sf2,(tableShelfBlock.holes[0][0].Y-(table.depth/2)-2-space)*sf2)

	ctx.stroke()
	ctx.fill()

	}

	//points

	/*

	ctx.beginPath()
	for(i=0;i<tableLeg1.cutout.length;i++){
		if(tableLeg1.cutout[i].dogbone==true){
			ctx.moveTo((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2)
			ctx.arc((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2,0.25*sf2,0,Math.PI*2)
		}
		else if(tableLeg1.cutout[i].fillet!=undefined){
			ctx.moveTo((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2)
			ctx.arc((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2,tableLeg1.cutout[i].fillet*sf2,0,Math.PI*2)
		}
		else{
			ctx.moveTo((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2)
			ctx.arc((tableLeg1.cutout[i].X+table.width/2+table.legWidth/2+space)*sf2,tableLeg1.cutout[i].Y*sf2,0.1*sf2,0,Math.PI*2)
		}
	}
	ctx.fill()

	for(i=0;i<tableLeg2.cutout.length;i++){
		if(tableLeg2.cutout[i].dogbone==true){
			ctx.moveTo((tableLeg2.cutout[i].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[i].Y*sf2)
			ctx.arc((tableLeg2.cutout[i].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[i].Y*sf2,0.25*sf2,0,Math.PI*2)
		}
		else{
			ctx.moveTo((tableLeg2.cutout[i].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[i].Y*sf2)
			ctx.arc((tableLeg2.cutout[i].X+table.width/2+table.legWidth*2+space)*sf2,tableLeg2.cutout[i].Y*sf2,0.1*sf2,0,Math.PI*2)
		}	
	}
	ctx.fill()



	

	*/
	}

}
