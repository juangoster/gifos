const giphy = function (apiKey) {
    
    this.apiKey = apiKey;  
    this.endPoints = {
        urlBase : 'https://api.giphy.com/v1/gifs',
        trendings :'/trending',
        search : '/search'
    };
//------------------Metodo trendings-------------------
    this.getTrendings = function (callback, limite) {
        fetch(this.endPoints.urlBase + this.endPoints.trendings  + '?api_key=' + this.apiKey + '&limit='+ limite)
        .then(dataType => dataType.json())
        .then( response => {
            callback(response.data);
        });
    }
//------------------Metodo search---------------------
    this.getSearch = function (callback, busca) {
        fetch(this.endPoints.urlBase + this.endPoints.search  + '?api_key=' + this.apiKey + '&q='+ busca)
        .then(dataType => dataType.json())
        .then( response => {
            callback(response.data);
        });
    }

}
//------------------------------------------------------------------------------------------------------------------


//------------------crear nueva instancia de giphy-------------------------
const giphyService = new giphy('RsJEp1Oc8kGEZ6oCzcOOMAFy8yq6dtiH');


//-----------------el boton para mostrar 10 trendings------------------------
const btnTrending = document.querySelector('#btnTrend');
const trendingContainer = document.querySelector('.container');

btnTrending.addEventListener('click', function () {
    giphyService.getTrendings(function(data){
       console.log(data);

       data.forEach(elemento => {
           const lista = document.createElement('div');
           lista.classList.add("cont");
           lista.innerHTML = `<img src= ${elemento.images.downsized.url}/>`;

           trendingContainer.appendChild(lista)
       })

    }, 10);
})

//----------------el boton para hacer la busqueda--------------------
const txt = document.querySelector('#txtSearch');
const btnSearch = document.querySelector('#btnSearch');


btnSearch.addEventListener('click', function(){
       const textValue = txt.value;
       giphyService.getSearch(function(data){
       console.log(data);
       
       data.forEach(elemento => {
        const lista = document.createElement('div');
        lista.classList.add("cont");
        lista.innerHTML = `<img src= ${elemento.images.downsized.url}/>`;

        trendingContainer.appendChild(lista)
    })
             
    }, textValue);
})
