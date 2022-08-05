const list = document.querySelectorAll('li.item')

console.log(`Number of categories: ${list.length}`)

const category = document.querySelectorAll('#categories>li')
category.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`,
  )
})