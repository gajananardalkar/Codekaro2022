// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

    document.getElementById('btn').addEventListener('click', fetchQuote)
    let authorsContainer = document.getElementById('authorsContainer')

  function fetchQuote(event){
//Author List
    let specificAuthor = event.target.innerHTML;

    let authorsContainer = document.getElementById('authorsContainer')
    authorsContainer.innerHTML = ''

    document.getElementById('quote').innerHTML = " " //data[randomQuote].text
    document.getElementById('btn').style.display = 'none'

//Fetching quotes
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        // console.log(response.json())
        return response.json();
    }).then(function(data){
        // console.log(data)
        let dataLength = data.length;
        console.log(dataLength)
        let randomQuote = Math.floor(Math.random()*dataLength)
        // document.getElementById('quote').innerHTML = data[randomQuote].text
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
                  authorDiv.addEventListener('click', fetchQuote )
                 authorsContainer.appendChild(authorDiv)
            } 
        }

        let requestedQuote = data.filter((authorquote)=>{
         return  authorquote.author === specificAuthor
        })
        console.log(requestedQuote)

        requestedQuote.map((quote)=>{
          let requestedQuotesDiv = document.createElement('div');
          requestedQuotesDiv.classList.add('qcard');
          let requestedQuotesPara = document.createElement('p');
          requestedQuotesPara.innerHTML  = quote.text;
          document.getElementById('quotesContainer').appendChild(requestedQuotesDiv);
          requestedQuotesDiv.appendChild(requestedQuotesPara);
  
        })
            // authors.map((author)=>{
            //     let authorDiv = document.createElement('div')
            //     authorDiv.classList.add('authorDivclass')
            //     authorDiv.innerHTML = author
            //     authorDiv.addEventListener('click', authorQuote )
            //     authorsContainer.appendChild(authorDiv)
            //     })
    })
  }

  

  