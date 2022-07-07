// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

    document.getElementById('btn').addEventListener('click', fetchQuote)
    let authorsContainer = document.getElementById('authorsContainer')

  function fetchQuote(){
    let authorsContainer = document.getElementById('authorsContainer')
    authorsContainer.innerHTML = ''
    document.getElementById('quote').innerHTML = 'none' //data[randomQuote].text


    fetch("https://type.fit/api/quotes")
    .then(function(response){
        // console.log(response.json())
        return response.json();
    }).then(function(data){
        // console.log(data)
        let dataLength = data.length;
        console.log(dataLength)
        let randomQuote = Math.floor(Math.random()*dataLength)
        document.getElementById('quote').innerHTML = data[randomQuote].text

        // let authors = []
        
        for(let i = randomQuote ; i <= randomQuote+5 ; i++){
            let authorname = data[i].author
        
            // console.log(authorname)
            if(authorname != null){
                console.log(authorname)
                //  authors.push(authorname)

                 let authorDiv = document.createElement('div')
                 authorDiv.classList.add('authorDivclass')
                 authorDiv.innerHTML = authorname
                 authorDiv.addEventListener('click', authorQuote )
                 authorsContainer.appendChild(authorDiv)
            } 
        }
            // authors.map((author)=>{
            //     let authorDiv = document.createElement('div')
            //     authorDiv.classList.add('authorDivclass')
            //     authorDiv.innerHTML = author
            //     authorDiv.addEventListener('click', authorQuote )
            //     authorsContainer.appendChild(authorDiv)
            //     })
    })
  }

  function authorQuote(event){
    let specificAuthor = event.target.innerHTML;
    fetchQuote();

  }

  