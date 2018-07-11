---
layout: page
title: Examples
subtitle:  Dynamic Mathematics with JavaScript
title1: Infinity
link1: https://jsxgraph.org/wiki/index.php/Infinity
title2: Sierpinski triangle
link2: https://jsxgraph.org/wiki/index.php/Sierpinski_triangle
title3: Riemann Sum
link3: https://jsxgraph.org/wiki/index.php/Riemann_sums
code: var brd = JXG.JSXGraph.initBoard('box3', {axis:true, boundingbox: [-8, 4, 8, -4]});
var s = brd.create('slider',[[1,3],[5,3],[1,10,50]],{name:'n',snapWidth:1});
var a = brd.create('slider',[[1,2],[5,2],[-10,-Math.PI,0]],{name:'start'});
var b = brd.create('slider',[[1,1],[5,1],[0,2*Math.PI,10]],{name:'end'});
var f = function(x){ return Math.sin(x); };
var plot = brd.create('functiongraph',[f,function(){return a.Value();}, function(){return b.Value();}]);

var os = brd.create('riemannsum',[f,
    function(){ return s.Value();}, function(){ return "left";},
    function(){return a.Value();},
    function(){return b.Value();}
    ],
    {fillColor:'#ffff00', fillOpacity:0.3});

brd.create('text',[-6,-3,function(){ return 'Sum='+(JXG.Math.Numerics.riemannsum(f,s.Value(),"left",a.Value(),b.Value())).toFixed(4); }]);
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

{% include carousel.html %}

### JSXcompressor
* JSXGraph contains [utilities to read files](jsxcompressor/index.html) which have been compressed by the ZLIB (http://zlib.org) library
* pure JavaScript implementation to deflate, unzip and base64_decode
* Delivery of compressed JavaScript inside of an HTML file
