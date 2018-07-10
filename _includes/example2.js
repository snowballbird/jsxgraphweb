 board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-0.02631578947368421, 1.0263157894736843, 1.2894736842105263, -0.02631578947368421]});

        var level = 0;
        function run() {
            JXG.JSXGraph.freeBoard(board);
            board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-0.02631578947368421, 1.0263157894736843, 1.2894736842105263, -0.02631578947368421]});
            level++;
            board.suspendUpdate();
             paint();
            board.unsuspendUpdate();
        }

        function paint() {
            // Initial triangle
            var xCoords = [0, 1, 0.5];
            var yCoords = [0, 0, 1];
            drawPolygon(xCoords, yCoords, level);
            drawTriangle({x:0,y:0}, {x:1,y:0}, {x:0.5,y:1}, level);
        }

        function drawPolygon(xCoords, yCoords,level) {
            p1 = board.create('point', [xCoords[0], yCoords[0]], {visible:false,name:'',withLabel:false});
            p2 = board.create('point', [xCoords[1], yCoords[1]], {visible:false,name:'',withLabel:false});
            p3 = board.create('point', [xCoords[2], yCoords[2]], {visible:false,name:'',withLabel:false});
            var colors=['#000000','#665566','#994499','#BB33BB','#EE99FF','#FFCCFF'];
            l1 = board.create('line',[p1,p2],{straightFirst:false,straightLast:false,strokeColor:colors[level%6],name:'',withLabel:false});
            l2 = board.create('line',[p2,p3],{straightFirst:false,straightLast:false,strokeColor:colors[level%6],name:'',withLabel:false});
            l3 = board.create('line',[p3,p1],{straightFirst:false,straightLast:false,strokeColor:colors[level%6],name:'',withLabel:false});
        }

        function drawTriangle(a, b, c, level) {
            if (level==0) return;
            level -= 1;

            // In das übergebene Dreieck, wird ein auf dem Kopf stehendes Dreieck eingefügt
            var xCoords = [c.x, (c.x+b.x)/2, (a.x+c.x)/2];
            var yCoords = [b.y, (c.y+a.y)/2, (c.y+a.y)/2];

            drawPolygon(xCoords, yCoords,level);

            // 3 neue Dreiecke bestimmen
            a1 = a;
            b1 = {x:c.x, y:b.y};
            c1 = {x:(a.x+c.x)/2, y:(c.y+a.y)/2};
            drawTriangle(a1, b1, c1, level);

            a2 = {x:c.x, y:b.y};
            b2 = b;
            c2 = {x:(c.x+b.x)/2, y:(c.y+a.y)/2};
            drawTriangle(a2, b2, c2, level);

            a3 = {x:(a.x+c.x)/2, y:(c.y+a.y)/2};
            b3 = {x:(c.x+b.x)/2, y:(c.y+a.y)/2};
            c3 = c;
            drawTriangle(a3, b3, c3, level);
        }
        paint();