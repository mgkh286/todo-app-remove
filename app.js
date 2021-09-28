// Remove pargraphs from page:  
let pargraphs = document.querySelectorAll('p')

pargraphs.forEach(function (pargraph) {
  if (pargraph.textContent.includes('the')) {
      pargraph.remove()
  }
})