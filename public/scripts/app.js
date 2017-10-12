console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var $display = $('#display');





	$('.profile').on('click', function(e){
		e.preventDefault();

		$.ajax({
        method: "GET",
        url: '/api/profile',
        success: function onIndexSuccess(json) {
            console.log(json);
            $display.text("");
           	// $display.append(JSON.stringify(json.data));

            $display.append(`
            	<h2>My Profile</h2>
              <ul>
                <li>Name: ${json.data.name}</li>
                <li>Github: <a href="${json.data.githubLink}">Click me</a></li>
                <li>Personal Site: <a href="${json.data.personalSiteLink}">Click me</a></li>
                <li>Current City: ${json.data.currentCity}</li>
              </ul>
            `);
            if(json.data.pets){
                $display.append(`<h3>Pets</h3>`);
            	var petsArray = json.data.pets;
            	petsArray.forEach(function(pet){
            		$display.append(`<h4>${pet.name}</h4>`)
            		$display.append(`<ul><li>type: ${pet.type}</li>breed: ${pet.breed}<li>birthday: ${pet.birthday}</li></ul>`)
            	})
            }

        },
        error: function onError(a, b, c) {
            console.log(a, b, c);
        }
    });
	})

});
