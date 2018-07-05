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

<div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class=""></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

### Team

JSXGraph has started as a seminar at the <a href="//www.uni-bayreuth.de">University of Bayreuth</a>.
At the moment there are the following members in the developer team:

* <a href="//did.mat.uni-bayreuth.de/~matthias/" target="_blank">Matthias Ehmann</a>
* <a href="//www.michael-gerhaeuser.de/" target="_blank">Michael Gerhäuser</a>
* <a href="//tucnak.de/" target="_blank">Carsten Miller</a>
* <a href="//did.mat.uni-bayreuth.de/~alfred/home/index.html" target="_blank">Alfred Wassermann</a>

Former members of the team:

* Bianca Valentin
* Peter Wilfahrt
