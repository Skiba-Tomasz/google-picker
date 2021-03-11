var selectedResultId=0
function selectResult(newId){
    els = document.querySelectorAll("div#search .g")
    if(newId < 0 || newId >= els.length)
        return  //Could modify for page nav...?
    rp = document.getElementById("result-pointer")
    if(rp != null){
        rp.remove()
    }
    selectedResultId=newId
    el = els[newId]
    lnk = el.firstElementChild
    el.innerHTML = "<div id=\"result-pointer\" style=\"position:absolute;left:-15px;\">&gt;</div>" + el.innerHTML
    lnk.focus()
}
document.onkeyup=function(event){
	if (event.altKey) { 
	console.log('alt ' + event.keyCode)
		if(event.keyCode==81)
			selectResult(selectedResultId-1)
		if(event.keyCode==83)
			selectResult(selectedResultId+1)
		if(event.keyCode==87){
		  var url = document.querySelectorAll("div#search .g a")[selectedResultId].href
		  if(event.ctrlKey){
			var win = window.open(url,"_blank")
			win.blur()
			window.open().close()
		  }
		  else{
			document.location = url
		  }
		}
	}
}
selectResult(0)