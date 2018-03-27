$(document).ready(function(){

	$.getJSON("../links.json", function(data){

		var activeLinks = 4;
		var totalLinks = data.length;

		data.forEach(function(d,i){
			var className;
			if (i<4){
				className = 'visible-link';
			} else {
				className = 'hidden-link';
			}

			var string = '<p class="'+className+'"><a href="'+d.url+'"';
				string += ' target="_blank">'+d.project+'</a></p>';

			$('#link-list').append(string);


		});

		$('#see-more').on('click', function(e){
			activeLinks = activeLinks+4;
			if (activeLinks<totalLinks) {
				$('#link-list p:lt('+activeLinks+')').removeClass('hidden-link').addClass('visible-link');
			} else {
				$('#link-list p').removeClass('hidden-link').addClass('visible-link');
				$(this).html('');
				$(this).off();
			}
			
		})

	});





})





// <p><a href="#" target="_blank">A link to a thing</a></p>