$(document).ready(function(){
	
	if($(".no-flexbox .flex-list").length>0) {
		alert("no Flexbox");
	}
		
	if($(".datepicker").length>0){
		$(".datepicker").datepicker({
			showAnim: "blind",
			currentText: "Now",
			gotoCurrent: true,
			defaultDate: 0,
			dateFormat: "dd/mm/yy"
		});
		$(".datepicker").datepicker("setDate", new Date());
	}
	
	if($('.cycle-slideshow').length>0) {
		$( '.cycle-slideshow' ).cycle();
	}

});

