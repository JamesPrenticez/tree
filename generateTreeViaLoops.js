function make_list(json) {
  // One
  let ul1 = document.createElement("ul")
  ul1.setAttribute("id", "tree")
  ul1.setAttribute("class", "tree")
  
  let root = Object.values(json)

  for(let i=0; i < root.length; i++){
      let layer_one_name = Object.values(root[i])[0] 
      
      let li1 = document.createElement("li")
      li1.innerHTML = layer_one_name
      ul1.appendChild(li1)

      // Two
      let ul2 = document.createElement("ul")
      li1.appendChild(ul2)

      let layer_two_list = Object.values(json[i])[1]
      
      for(let j=0; j < layer_two_list.length; j++){
          let layer_two_name = Object.values(layer_two_list[j])[0]

          let li2 = document.createElement("li")
          li2.innerHTML = layer_two_name 
          ul2.appendChild(li2)

          // Three
          let ul3 = document.createElement("ul")
          li2.appendChild(ul3)

          let layer_three_list = Object.values(layer_two_list[j])[1]

          for(let k=0; k < layer_three_list.length; k++){
              let layer_three_name = Object.values(layer_three_list[k])[0]

              let li3 = document.createElement("li")
              li3.innerHTML = layer_three_name 
              ul3.appendChild(li3)
         }
      }
  }
return ul1
}

function renderTree(json) {
let treeEl = document.getElementById("treeContainer");

treeEl.appendChild(make_list(json));
}

renderTree(myJSON)