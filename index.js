function watchButtons(){
	let smtbtn = $('#submit');
	let list = $('ul');
	let itemText = $('#inputText');
	let ctr = 0;
	$(smtbtn).on("click", function(event){
		event.preventDefault();
		if(itemText.val()!==""){
			$(list).append('<li id=item'+ctr+'>'+itemText.val()+'<br><button class="check">Check</button><button class="delete">Delete</button></li>');
			ctr++;
			itemText.val("");
		}
	});
	$(list).on("click", function(event){
		if(event.target.className=='check'){
			console.log($(event.target).parent().css('text-decoration-line'));
			if(($(event.target).parent().css('text-decoration-line'))=="none"){
				$(event.target).parent().css('text-decoration-line',"line-through");
			} else {
				$(event.target).parent().css('text-decoration-line',"none");
			}
		}
		if(event.target.className=='delete'){
			$(event.target).parent().remove();
		}
	});
}

function init(){
	watchButtons();
}

init();