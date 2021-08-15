const tagsEl =document.getElementById('tags')
const textarea=document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
	createTags(e.target.value)
	//if user hits enter, call randomSelect() after 10ms
	if(e.key==='Enter'){
		setTimeout(()=>{
			e.target.value=''
		}, 10)

		randomSelect()
	}
})

function createTags(input){
	//removing white spaces
	const tags =input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
	//create a tag for each value entered
	tagsEl.innerHTML=''; 
	tags.forEach(tag=>{
		const tagEl=document.createElement('span')
		tagEl.classList.add('tag')
		tagEl.innerText=tag; 
		tagsEl.appendChild(tagEl); 
	})
}

function randomSelect(){
	const times=30; //no. of times the randomSelect() will run

	//hightlight and remove highlight
	const interval=setInterval(()=>{
		const randomTag=pickRandomTag()
		//every 100 miliseconds it will highlght and unhighlight
		highlightTag(randomTag)

		setTimeout(()=>{
			unhighlightTag(randomTag)
		}, 100)
	}, 100); 

	setTimeout(()=>{
		clearInterval(interval)

		setTimeout(()=>{
			const randomTag=pickRandomTag()
			highlightTag(randomTag)
		}, 100)
	}, times*100)
}


function pickRandomTag(){
	//get all elements with tag class
	const tags=document.querySelectorAll('.tag')
	//all the elements come into the node list which is 
	//similar to an array
	//choose a random tag from that node list
	return tags[Math.floor(Math.random()*tags.length)]

}  	

function highlightTag(tag){
	tag.classList.add('highlight')
}
function unhighlightTag(tag){
	tag.classList.remove('highlight')
}

 $( "#button" ).click(function() {
  $( ".readmore" ).toggle();
  $("#heading").get(0).scrollIntoView();
});