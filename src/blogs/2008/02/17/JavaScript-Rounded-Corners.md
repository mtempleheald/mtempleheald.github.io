# Rounded corners using JavaScript without CSS3

This page is no longer displaying due to incompatibility with Sveltekit and my laziness.
So I've included the scripts inline below instead.


```js
<script src="/assets/js/RoundCorners.js" type="text/javascript"></script>
```



<div markdown="1" class="rounded-example" style="background-color: lightsteelblue; color: blue; margin: 10px;">

  Before CSS3 introduced the border-radius property rounded corners were achieved on the web using 4 tiny images, held in location using div soup.  
  There was no separation of content from styles, ugly to maintain and inflexible to change.  
  I figured that JavaScript could fill the gap for me, so I built this.

</div>

<div markdown="1" class="rounded-example" style="background-color: lightsteelblue; color: blue; margin: 10px;">

  It is quite simple, using the ellipse equation x&sup2;/a&sup2; + y&sup2;/b&sup2; = 1   
1. Find div(s) with given tag.
2. Infer the background-color of this element and its parent.
3. Loop through, pixel by pixel, the height of the curve (10 in this example)
4. Loop through, pixel by pixel, the width of the curve (again 10 in this example)
5. Calculate the colour needed to blend smoothly between the child and parent element (antialiasing)
6. Create a new div, positioned appropriately that when all combined we see a curve.

</div>

<div markdown="1" class="rounded-example" style="background-color: lightsteelblue; color: blue; margin: 10px;">

  This solution is far from perfect but was sufficient for my needs, notable issues:  
* increases the size of the div by the vertical curve depth chosen
* only works with divs, which wasn't a problem when I wrote this prior to HTML5 semantic markup
* redundant with the introduction of border-radius

</div>

```js
<script type="text/javascript">
  RoundCorners("rounded-example",10,10,1,1,1,1);
</script>
```

---

## RoundCorners.js

```javascript
  function Check() {						//Check if browser supports this, if not then quit
	if(!document.getElementById || !document.createElement) {
	    return false;
	}
	var b = navigator.userAgent.toLowerCase();
	if (b.indexOf("msie 5") > 0 && b.indexOf("opera") == -1) {
		return false;
	}
	return true;
}

function Blend(a, b, alpha) {				//Returns a colour equal to a blend of the fore and background colours
	var fgc = [];
		fgc[0] = parseInt('0x' + a.substring(1, 3),16);
		fgc[1] = parseInt('0x' + a.substring(3, 5),16);
		fgc[2] = parseInt('0x' + a.substring(5, 7),16);
	var bgc = [];
		bgc[0] = parseInt('0x' + b.substring(1, 3),16);
		bgc[1] = parseInt('0x' + b.substring(3, 5),16);
		bgc[2] = parseInt('0x' + b.substring(5, 7),16);
	return '#'+ ('0'+Math.round(fgc[0] + (bgc[0] - fgc[0])*alpha).toString(16)).slice(-2).toString(16) +
				('0'+Math.round(fgc[1] + (bgc[1] - fgc[1])*alpha).toString(16)).slice(-2).toString(16) +
				('0'+Math.round(fgc[2] + (bgc[2] - fgc[2])*alpha).toString(16)).slice(-2).toString(16);
}

function rgb2hex(value) {
	var hex = '';
	var i;
	var regexp=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;
	var array = [];
	array = regexp.exec(value);
	for(i=1;i<4;i++) {
		hex += ('0'+parseInt(array[i],10).toString(16)).slice(-2);
	}
	return '#'+hex;
}

function getDivStyle(xdiv, IEStyleAttr, CSSStyleAttr) {
    var elem = xdiv;
	var xproperty;
    if (elem.currentStyle) {
        xproperty = elem.currentStyle[IEStyleAttr];
    } 
	else if (window.getComputedStyle) {
        var compStyle = window.getComputedStyle(elem, "");
        xproperty = rgb2hex(compStyle.getPropertyValue(CSSStyleAttr));
    }
	else {
		return "transparent";
	}
	return xproperty;
}

function getDivs(className) {			//Create array of divs with class='rounded'
	var divs = [];
	var el = document.getElementsByTagName('div');  //create an array containing ALL divs on the page
	var regexp=new RegExp("\\b"+className+"\\b");
	for (var i = 0; i < el.length; i++) {
		if (regexp.test(el[i].className)) {		//If div has class='rounded'...
			divs.push(el[i]);					//add to divs array
		}
	}
	return divs;					//return array
}

Math.sqr = function (x) {
	return x*x;
}; 

function MakeDivs(divSquare, bgcolour, colour, radiusx, radiusy, topl, topr, botl, botr) {
	var divT = document.createElement("div");			//Create top container div
		divT.style.backgroundColor = bgcolour;
	var divB = document.createElement("div");			//Create bottom container div
		divB.style.backgroundColor = bgcolour;
	var marginArr = [];
	var y, newMargin, k, bgcount, fgcount, blendcount;
	var subdivT, subdivB, divTempT, divTempB, blendratio, u1, u2, v1, v2;
//Create an array representing margins...
	marginArr.push(radiusx);
	for (y = 1; y <= radiusy; y++) {
		newMargin = radiusx * (1.0 - Math.sqrt(1.0 - Math.sqr((radiusy - y)/ radiusy)));
		marginArr.push(Math.round(newMargin*10000)/10000); 		//Calculate x for given y to 4 d.p.s, add to array...
//Build divs based on the array values...
		bgcount = Math.floor(marginArr[y]);				//number of pixels on row which are background
		fgcount = radiusx - Math.ceil(marginArr[y-1]);	//number of pixels on row which are foreground
		blendcount = radiusx - bgcount - fgcount;		//number of pixels on row which are blended between the two
		subdivT = document.createElement("div");			//Create row wrapper div with margins set by bgcount and options in function call
		subdivT.style.margin = "0px " + (topr * bgcount) + "px 0px " + (topl * bgcount) + "px";
		subdivT.style.height = "1px";
		subdivT.style.overflow = "hidden";
		subdivB = document.createElement("div");			//Create row wrapper div with margins set by bgcount and options in function call
		subdivB.style.margin = "0px " + (botr * bgcount) + "px 0px " + (botl * bgcount) + "px";
		subdivB.style.height = "1px";
		subdivB.style.overflow = "hidden";
		divTempT = divT;
		divTempB = divB;
//Create wrapper for each blended pixel...
		for (k = 1; k <= blendcount; k++) {
			//calculate x when y is at pixel edge  &  y when x is at pixel edge...
			u1 = marginArr[y]   - (bgcount + k - 1);
			u2 = marginArr[y-1] - (bgcount + k - 1);
			v1 = radiusy * (1.0 - Math.sqrt( 1.0 - Math.sqr((radiusx - (bgcount + k - 1))/ radiusx))) - (y - 1);
			v2 = radiusy * (1.0 - Math.sqrt( 1.0 - Math.sqr((radiusx - (bgcount + k    ))/ radiusx))) - (y - 1);
			//Approximate to 0 or 1 if these values lie outside the box (to ensure that blendratio stays between 0 and 1)...
			if (u1 < 0) {u1 = 0;}
			else if (u1 > 1) {u1 = 1;}
			if (u2 < 0) {u2 = 0;}
			else if (u2 > 1) {u2 = 1;}
			if (v1 < 0) {v1 = 0;}
			else if (v1 > 1) {v1 = 1;}
			if (v2 < 0) {v2 = 0;}
			else if (v2 > 1) {v2 = 1;}
			//calculate blendratio (accurate when slope cuts through both sides OR both top and bottom, 1 of each results in approximation)...
			blendratio = 1 - (0.5 * (u1 + u2) * (v1 + v2));
			if (blendratio > 1) {blendratio = 1;}
			else if (blendratio < 0) {blendratio = 0;}
			subdivT.style.backgroundColor = Blend(bgcolour, colour, blendratio);
			divTempT.appendChild(subdivT);					//add div within containing div (first div appended within top container div)
			divTempT = subdivT;
			subdivT = document.createElement("div");
			subdivT.style.margin = "0px " + topr + "px 0px " + topl + "px";
			subdivT.style.height = "1px";
			subdivT.style.overflow = "hidden";
			subdivB.style.backgroundColor = Blend(bgcolour, colour, blendratio);
			divTempB.insertBefore(subdivB,divTempB.firstChild);
			divTempB = subdivB;
			subdivB = document.createElement("div");
			subdivB.style.margin = "0px " + botr + "px 0px " + botl + "px";
			subdivB.style.height = "1px";
			subdivB.style.overflow = "hidden";
		}
		subdivT.style.backgroundColor = colour;
		subdivB.style.backgroundColor = colour;
		divTempT.appendChild(subdivT);						//add final nested div (foreground)
		divTempB.insertBefore(subdivB,divTempB.firstChild);
	}
	divSquare.insertBefore(divT,divSquare.firstChild);	//add top div to html before the div we are rounding
	divSquare.appendChild(divB);
}
	
function RoundCorners(className, radiusx, radiusy, topl, topr, botl, botr) {
	//if (!Check()) return;
	var bgcolour, colour;
	var v = getDivs(className);			//Create array of divs with class='rounded'
	var l = v.length;					//Count number of entries in the array
	for (var i = 0; i < l; i++) {		//Do for each entry in the array
		colour = getDivStyle(v[i], "backgroundColor", "background-color");
		bgcolour = getDivStyle(v[i].parentNode, "backgroundColor", "background-color");
		MakeDivs(v[i], bgcolour, colour, radiusx, radiusy, topl, topr, botl, botr);
	}
}
```