function expandAll(){
  let node_tree = document.querySelectorAll('.tree li > ul')
    for(let i=0; i < node_tree.length; i++){
      let subUl = node_tree[i]
      subUl.style.display = 'block'
    }

  let toggle_tree = document.querySelectorAll('.toggle')
    for(let i=0; i < toggle_tree.length; i++){
      toggle_tree[i].innerText = '-'
    }
}

function collapseAll(){
  let node_tree = document.querySelectorAll('.tree li > ul')
    for(let i=0; i < node_tree.length; i++){
      let subUl = node_tree[i]
      subUl.style.display = 'none'
    }

    let toggle_tree = document.querySelectorAll('.toggle')
    for(let i=0; i < toggle_tree.length; i++){
      toggle_tree[i].innerText = '+'
    }
}

function prependToggleButtons() {
  let node_tree = document.querySelectorAll('.tree li > ul')
  for(let i=0; i < node_tree.length; i++){

    let subUl = node_tree[i]
    subUl.style.display = 'none'

    let parentLi = subUl.parentNode
    
    let toggleIcon = document.createElement('div')
    toggleIcon.setAttribute("class", "toggle")
    toggleIcon.innerText = '+'
    toggleIcon.onclick = function() { 
      let x = toggleIcon.innerText == '+' ? '-' : '+'
      toggleIcon.innerText = x

      // Open/close
      let y = subUl.style.display == 'block' ? 'none' : 'block'
      subUl.style.display = y
    }

    parentLi.prepend(toggleIcon)
  }
}
  
prependToggleButtons()