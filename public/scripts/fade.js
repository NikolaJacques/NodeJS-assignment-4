const element = document.getElementById('not-found');

setTimeout(() => {
   element?element.className = "animate":null;
},3000)