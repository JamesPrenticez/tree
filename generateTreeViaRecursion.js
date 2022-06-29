let tree = {
  name: "Australia",
  children: [
    {
      name: "NSW",
      children: [
        {
          name: "Morrisette",
          children: [{ name: "2265" }, { name: "34837" }, { name: "239237" }]
        },
        { name: "Kooorunbong" }
      ]
    },
    { name: "VIC", children: [{ name: "Melbourne" }] }
  ]
};


const recursiveFunction = (obj, depth = 0) => {

  const padLength = obj.name.length + depth

  //console.log(obj.name.padStart(padLength, "_"))

  const newdepth = depth + 1

  obj.children?.map((item) => {
    console.log(obj)
    recursiveFunction(item, newdepth)
  })
}

recursiveFunction(tree)

// -----------------------------------------------------------------------------
const isArray = Array.isArray

const recursiveObj = obj => {
  for(let key in obj){
    //if(!obj.hasOwnProperty(key)) continue;

    if(typeof obj[key] == 'object' && !isArray(obj[key])){
      recursiveFunction(obj[key])
    }
    
    if(isArray(obj[key])){
     recursiveFunction(obj[key])
    }

    else {
      //im a string
      console.log(typeof(obj[key]), obj[key])
      //console.log('type', typeof obj[key])
      //recursiveObj(obj[key])
    }
  }
}

recursiveObj(what)