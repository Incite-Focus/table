function make(){

		partSpace=2

		dxf = "0\nSECTION\n2\nENTITIES\n999\nw4rd.com\n0\n"

		dxf+="POLYLINE\n8\ntop\n62\n1\n70\n1\n0\n"

		for(i=0;i<tableTop.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= tableTop.cutout[i].X.toFixed(3) + "\n20\n"
			dxf+= tableTop.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= tableTop.cutout[0].X.toFixed(3) + "\n20\n"
		dxf+= tableTop.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"
		

		for(i=0;i<tableTop.pockets.length;i++){
			dxf+="POLYLINE\n8\npocket\n62\n12\n70\n1\n0\n"
			for(j=0;j<tableTop.pockets[i].length;j++){			
				dxf+="VERTEX\n10\n"
				dxf+= tableTop.pockets[i][j].X.toFixed(3) + "\n20\n"
				dxf+= tableTop.pockets[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n10\n"
			dxf+= tableTop.pockets[i][0].X.toFixed(3) + "\n20\n"
			dxf+= tableTop.pockets[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//front support
		dxf+="POLYLINE\n8\nfront\n62\n44\n70\n1\n0\n"
		for(i=0;i<tableSupportFront.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= tableSupportFront.cutout[i].X.toFixed(3) + "\n20\n"
			dxf+= (tableSupportFront.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= tableSupportFront.cutout[0].X.toFixed(3) + "\n20\n"
		dxf+= (tableSupportFront.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableSupportFront.holes.length;i++){
			dxf+="POLYLINE\n8\nfront\n62\n44\n70\n1\n0\n"
			for(j=0;j<tableSupportFront.holes[i].length;j++){			
				dxf+="VERTEX\n10\n"
				dxf+= tableSupportFront.holes[i][j].X.toFixed(3) + "\n20\n"
				dxf+= (tableSupportFront.holes[i][j].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n10\n"
			dxf+= tableSupportFront.holes[i][0].X.toFixed(3) + "\n20\n"
			dxf+= (tableSupportFront.holes[i][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}


		//Side support
		dxf+="POLYLINE\n8\nside\n62\n34\n70\n1\n0\n"
		for(i=0;i<tableSupportSide.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableSupportSide.cutout[i].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableSupportSide.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableSupportSide.cutout[0].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableSupportSide.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableSupportSide.holes.length;i++){
			dxf+="POLYLINE\n8\nside\n62\n34\n70\n1\n0\n"
			for(j=0;j<tableSupportSide.holes[i].length;j++){			
				dxf+="VERTEX\n10\n"
				dxf+= (tableSupportSide.holes[i][j].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableSupportSide.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n10\n"
			dxf+= (tableSupportSide.holes[i][0].X-(table.width/2+table.supportWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableSupportSide.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//Leg1
		dxf+="POLYLINE\n8\nleg_a\n62\n84\n70\n1\n0\n"
		for(i=0;i<tableLeg1.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableLeg1.cutout[i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg1.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableLeg1.cutout[0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableLeg1.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableLeg1.holes.length;i++){
			dxf+="POLYLINE\n8\nleg_a\n62\n84\n70\n1\n0\n"
			for(j=0;j<tableLeg1.holes[i].length;j++){			
				dxf+="VERTEX\n10\n"
				dxf+= (tableLeg1.holes[i][j].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableLeg1.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n10\n"
			dxf+= (tableLeg1.holes[i][0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg1.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}

		//Leg2
		dxf+="POLYLINE\n8\nleg_b\n62\n94\n70\n1\n0\n"
		for(i=0;i<tableLeg2.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableLeg2.cutout[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg2.cutout[i].Y.toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableLeg2.cutout[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= tableLeg2.cutout[0].Y.toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		for(i=0;i<tableLeg2.holes.length;i++){
			dxf+="POLYLINE\n8\nleg_b\n62\n94\n70\n1\n0\n"
			for(j=0;j<tableLeg2.holes[i].length;j++){			
				dxf+="VERTEX\n10\n"
				dxf+= (tableLeg2.holes[i][j].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
				dxf+= tableLeg2.holes[i][j].Y.toFixed(3) + "\n0\n"
			}

			dxf+="VERTEX\n10\n"
			dxf+= (tableLeg2.holes[i][0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= tableLeg2.holes[i][0].Y.toFixed(3) + "\n0\n"
			dxf+="SEQEND\n0\n"
		}


		//Foot1
		dxf+="POLYLINE\n8\nfoot_a\n62\n5\n70\n1\n0\n"
		for(i=0;i<tableFoot1.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableFoot1.cutout[i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot1.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableFoot1.cutout[0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot1.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"
		//

		dxf+="POLYLINE\n8\nfoot_a\n62\n5\n70\n1\n0\n"
		for(i=0;i<tableFoot1.holes[0].length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableFoot1.holes[0][i].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot1.holes[0][i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableFoot1.holes[0][0].X+(table.width/2+table.legWidth/2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot1.holes[0][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		//Foot2
		dxf+="POLYLINE\n8\nfoot_b\n62\n162\n70\n1\n0\n"
		for(i=0;i<tableFoot2.cutout.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableFoot2.cutout[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.cutout[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableFoot2.cutout[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.cutout[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		dxf+="POLYLINE\n8\nfoot_b\n62\n162\n70\n1\n0\n"
		for(i=0;i<tableFoot2.holes[0].length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableFoot2.holes[0][i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.holes[0][i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableFoot2.holes[0][0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.holes[0][0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		//pockets
		dxf+="POLYLINE\n8\npocket\n62\n154\n70\n1\n0\n"
		for(i=0;i<tableFoot2.pockets.length;i++){
			dxf+="VERTEX\n10\n"
			dxf+= (tableFoot2.pockets[i].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
			dxf+= (tableFoot2.pockets[i].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		}

		dxf+="VERTEX\n10\n"
		dxf+= (tableFoot2.pockets[0].X+(table.width/2+table.legWidth*2+partSpace)).toFixed(3) + "\n20\n"
		dxf+= (tableFoot2.pockets[0].Y-(table.depth/2+table.supportWidth/2+partSpace+thickness/2)).toFixed(3) + "\n0\n"
		dxf+="SEQEND\n0\n"

		//shelf
		////


		if(document.getElementById('shelf').checked==true){
		
			dxf+="POLYLINE\n8\nshelf\n62\n190\n70\n1\n0\n"	

			for(i=0;i<tableShelf.cutout.length;i++){

				dxf+="VERTEX\n10\n"
				dxf+= tableShelf.cutout[i].X.toFixed(3) + "\n20\n" 
				dxf+= tableShelf.cutout[i].Y+table.depth-table.overHang+(thickness/2) + "\n0\n"

			}
			dxf+="VERTEX\n10\n"
			dxf+= tableShelf.cutout[0].X.toFixed(3) + "\n20\n" 
			dxf+= tableShelf.cutout[0].Y+table.depth-table.overHang+(thickness/2) + "\n0\n"

			dxf+="SEQEND\n0\n"

			dxf+="POLYLINE\n8\nshelf_block\n62\n200\n70\n1\n0\n"	

			for(i=0;i<tableShelfBlock.cutout.length;i++){

				dxf+="VERTEX\n10\n"
				dxf+= (tableShelfBlock.cutout[i].X+table.width/2).toFixed(3) + "\n20\n" 
				dxf+= tableShelfBlock.cutout[i].Y+table.depth/2+2 + "\n0\n"

			}

			dxf+="VERTEX\n10\n"
			dxf+= (tableShelfBlock.cutout[0].X+table.width/2).toFixed(3) + "\n20\n" 
			dxf+= tableShelfBlock.cutout[0].Y+table.depth/2+2 + "\n0\n"

			dxf+="SEQEND\n0\n"

			dxf+="POLYLINE\n8\nshelf_block\n62\n200\n70\n1\n0\n"	

			for(i=0;i<tableShelfBlock.holes[0].length;i++){

				dxf+="VERTEX\n10\n"
				dxf+= (tableShelfBlock.holes[0][i].X+table.width/2).toFixed(3) + "\n20\n" 
				dxf+= tableShelfBlock.holes[0][i].Y+table.depth/2+2 + "\n0\n"

			}
			dxf+="VERTEX\n10\n"
			dxf+= (tableShelfBlock.holes[0][0].X+table.width/2).toFixed(3) + "\n20\n" 
			dxf+= tableShelfBlock.holes[0][0].Y+table.depth/2+2 + "\n0\n"
	
			dxf+="SEQEND\n0\n"

		}

		////


		//end
		dxf+="ENDSEC\n0\nEOF"

		var link = document.getElementById("downloadLink")

		link.setAttribute("href", "data:text/plain;base64," + btoa(dxf))
		link.setAttribute("download", "table.dxf")
		link.click()


}
