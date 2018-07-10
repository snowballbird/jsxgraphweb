var brd = JXG.JSXGraph.initBoard('box1', {boundingbox: [-6, 6, 10, -8]});
   brd.suspendUpdate();
   var S = brd.create('slider', [[-5,-6],[5,-6],[0,0.95,1]], {name:'S'});
   var hue = brd.create('slider', [[-5,-7],[5,-7],[0,8,36]], {name:'color'});
   var points = new Array();
   points[0] = brd.create('point',[5, 5], {name:' '});
   points[1] = brd.create('point',[-5, 5], {name:' '});
   points[2] = brd.create('point',[-5, -5], {name:' '});
   points[3] = brd.create('point',[5, -5], {name:' '});

   function quadrangle(pt, n) {
       var col;
       var arr = new Array();
       for(var i = 0; i < 4; i++) {
           arr[i] = brd.create('point',
               [function(t) {
                   return function () {var x = pt[t].X();
                                   var x1 = pt[(t+1)%4].X();
                                   var s = S.Value();
                                   return x+(x1-x)*s;
                            }}(i),
                function(t) {
                   return function () {var y = pt[t].Y();
                                   var y1 = pt[(t+1)%4].Y();
                                   var s = S.Value();
                                   return y+(y1-y)*s;
                            }}(i)
               ],
               {size:1, name:"",withLabel:false,visible:false});
       }
       col =  function(){return JXG.hsv2rgb(hue.Value()*n,0.7,0.9);};
       brd.create('polygon',pt, {fillColor:col});
       if(n>0)
           quadrangle(arr, --n);
      }
   quadrangle(points,30);
   brd.unsuspendUpdate();