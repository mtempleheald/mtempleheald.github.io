<script src="/assets/js/RoundCorners.js" type="text/javascript"></script>

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

<script type="text/javascript">
RoundCorners("rounded-example",10,10,1,1,1,1);
</script>