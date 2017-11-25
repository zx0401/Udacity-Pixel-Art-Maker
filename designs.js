// When size is submitted by the user, call makeGrid()

let color;
$('input[type="submit"]').click(makeGrid);

function makeGrid(evt) {
	evt.preventDefault();
	color = $('#colorPicker').val();
	const height = parseInt($('#input_height').val());
	const width = parseInt($('#input_width').val());

	if(height === NaN || width === NaN){
		alert("Height and width must be a valid number.");
	}

	// grid generation based on user input
	const canvas = $('#pixel_canvas');
	let content = "";
	for(let i=0; i<height; i++){
		content += "<tr>";
		for(let j=0; j<width; j++){
			content += "<td></td>";
		}
		content += "</tr>";
	}

	canvas.html(content);
}

$('#colorPicker').on('change', function() {
	color = $(this).val();
});

$('#pixel_canvas').on('click', 'td', function() {
	$(this).css("background-color", color);
});