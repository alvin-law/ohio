var pattern = Trianglify({
	cell_size: 100,
	x_colors: ["#222", "#2D302D", "#60605F"],
	y_colors: 'match_x',
	width: window.innerWidth,
	height: 50
});

var pattern2 = Trianglify({
	cell_size: 100,
	x_colors: ["#60605F", "#2D302D", "#222"],
	y_colors: 'match_x',
	width: window.innerWidth,
	height: 50
});

var pattern3 = Trianglify({
	cell_size: 100,
	x_colors: ["#222", "#2D302D", "#60605F"],
	y_colors: 'match_x',
	width: window.innerWidth,
	height: 50
});
var canvas = document.getElementById("bar1");
var canvas2 = document.getElementById("bar2");
var canvas3 = document.getElementById("bar3");
pattern.canvas(canvas);
pattern2.canvas(canvas2);
pattern3.canvas(canvas3);
