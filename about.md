---
layout: page
title: Examples
subtitle:  Dynamic Mathematics with JavaScript
---

### Features

* Euclidean Geometry:
    [Points](/wiki/index.php/Point), [lines](/wiki/index.php/Line), [circle](/wiki/index.php/Circle), intersections, perpendicular lines, angles
* [Curve](/wiki/index.php/Curve) plotting: [Graphs](/wiki/index.php/Simple_function_plotter),     [parametric curves](/wiki/index.php/Lissajous_curves), [polar curves](/wiki/index.php/Archimedean_spiral), [data plots](/wiki/index.php/Data_plot_of_live_data_via_AJAX), [Bezier curves](/wiki/index.php/Bezier_curves)
* [Differential equations](/wiki/index.php/Lotka-Volterra_equations)
* [Turtle graphics](/wiki/index.php/Category:Turtle_Graphics)
* [Lindenmayer systems](/wiki/index.php/L-systems)
* [Interaction via sliders](/wiki/index.php/Lissajous_curves)
* [Animations](/wiki/index.php/Animation_II)
* [Polynomial interpolation](/wiki/index.php/Lagrange_interpolation), [spline interpolation](/wiki/index.php/Cubic_spline_interpolation)
* [Tangents](/wiki/index.php/Mean_Value_Theorem), normals
* Basic support for [charts](/wiki/index.php/Category:Charts)
* [Vectors](/wiki/index.php/Matrix_multiplication)
* ...

### Examples

* <a href="/showcase">Showcases</a>
* <a href="/wiki/index.php/Showcases">Selected examples from the JSXGraph-Wiki</a>
* <a href="/wiki/index.php/Category:Examples">All examples in the JSXGraph-Wiki</a>
* JSXGraph is the basis of [sketchometry](//sketchometry.org). (Our attempt on dynamic geometry software)

First impressions (the points **A,B,C,D,E** can be dragged):

<div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
<script type='text/javascript'>
(function(){
    var addPoint = function(x) {
      p.push(brd.create('point',
                  [x, (Math.random() - 0.5) * 3], {style:6}));
      brd.update();
    };

    var brd = JXG.JSXGraph.initBoard('box',
               {axis:true, boundingbox:[-5, 10, 5, -10]});
    var p = [];
    p[0] = brd.create('point', [-4,2], {style:6});
    p[1] = brd.create('point', [3,-1], {style:6});
    addPoint(-2);
    addPoint(0.5);
    addPoint(1);
    var pol = JXG.Math.Numerics.lagrangePolynomial(p);
    var g = brd.create('functiongraph', [pol, -10, 10], {strokeWidth:1});
    var g2 = brd.create('functiongraph', [JXG.Math.Numerics.D(pol), -10, 10],
               {dash:3, strokeWidth:1, strokeColor:'#ff0000'});

})();
</script>

This is the source code for the above construction:

```html
<html>
<head>
  <title>Example</title>
  <script type="text/javascript" charset="UTF-8"
   src="//cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.3/jsxgraphcore.js"></script>
</head>
<body>
<div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
<script type="text/javascript">
var addRandPoint = function(x) {
  p.push(brd.create('point',
              [x,(Math.random()-0.5)*3],{style:6}));
  brd.update();
};

// Init board
var brd = JXG.JSXGraph.initBoard('box',
            {axis:true, boundingbox:[-5, 10, 5, -10]});

// Create points
var p = [];
p[0] = brd.create('point', [-4,2], {style:6});
p[1] = brd.create('point', [3,-1], {style:6});
addRandPoint(-2);
addRandPoint(0.5);
addRandPoint(1);

// Draw function graph
var pol = JXG.Math.Numerics.lagrangePolynomial(p);
var g = brd.create('functiongraph', [pol, -10, 10], {strokeWidth:1});

// Draw derivative
var g2 = brd.create('functiongraph', [JXG.Math.Numerics.D(pol), -10, 10],
           {dash:3, strokeWidth:1, strokeColor:'#ff0000'});

</script>
</body>
</html>
```

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2" class="active"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1646c00eca3%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1646c00eca3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1646c00eca5%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1646c00eca5%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item active">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1646c00eca6%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1646c00eca6%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
