const giphy = function (apiKey) {
    
    this.apiKey = apiKey;  
    this.endPoints = {
        urlBase : 'https://api.giphy.com/v1/gifs',
        trendings :'/trending',
        search : '/search',
        autocomplete : '/search/tags'
    };
//------------------Metodo trendings-------------------
    this.getTrendings = function (callback, limite) {
        fetch(this.endPoints.urlBase + this.endPoints.trendings  + '?api_key=' + this.apiKey + '&limit='+ limite)
        .then(dataType => dataType.json())
        .then( response => {
            callback(response.data);
        }, 12);
    }
//------------------Metodo search---------------------
    this.getSearch = function (callback, busca, limit) {
        fetch(this.endPoints.urlBase + this.endPoints.search  + '?api_key=' + this.apiKey + '&q='+ busca + '&limit='+ limit)
        .then(dataType => dataType.json())
        .then( response => {
            callback(response.data);
        });
    }
//------------------Metodo searchautocomplete---------------------
    this.getAuto = function (callback, busca, limit, offset) {
        fetch(this.endPoints.urlBase + this.endPoints.autocomplete  + '?api_key=' + this.apiKey + '&q='+ busca + '&limit='+ limit + '&offset='+ offset)
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
const trendingContainer = document.querySelector('.trendingContainer');
const btnTrending = document.querySelector('#btnTrend');


    giphyService.getTrendings(function(data){
       //console.log(data);
       data.forEach(elemento => {
           const lista = document.createElement('div');
           
           lista.classList.add("cont");
           lista.innerHTML = `<img src= ${elemento.images.original.url}/>`;
           trendingContainer.appendChild(lista)
       })

    }, 12);


//----------------el boton para hacer la busqueda--------------------
const txt = document.querySelector('#txtSearch');
const btnSearch = document.querySelector('#btnSearch');
const searchContainer = document.querySelector('.searchContainer');
/*
function hoverImages() {
//------hacer la funcion para que muestre el morado sobre las imagenes
this.style.cursor = "pointer";
this.innerHTML=`<div class ="overImage"></div>`;

}
*/
function clear() {
    searchContainer.innerHTML="";
}
function clear2() {
    searchList.innerHTML="";
}


function doSearch(){
    const textValue = txt.value;

       clear();
       
       giphyService.getSearch(function(data){

       const titulo = document.createElement('div')
       titulo.classList.add("searchTitle");
       titulo.innerHTML = `<hr> ${textValue} <br>`;
       searchContainer.appendChild(titulo)

        data.forEach(elemento => {
           console.log(elemento);
        const lista = document.createElement('div');
        const overLayer = document.createElement('div');
        lista.classList.add("imageGiphy");
        overLayer.classList.add("overImage");
      
        overLayer.innerHTML = `
        <div class="navOver row">
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4 row">
                <button id="like" onclick="addFav()" value="${elemento.embed_url}"></button>
                <button id="downL"></button>
                <a href="${elemento.embed_url}" id="max" target="_blank"></a>
            </div>
        </div>
        
        <div class="footOver">
            <p>${elemento.username}</p>
            <h2>${elemento.title}</h2>
        </div>
                `;
        lista.innerHTML = `<img src= ${elemento.images.original.url}/>`;
        searchContainer.appendChild(lista)
        lista.appendChild(overLayer)

        })

        /*---------convierto las imagenes en botones
        const btnImagen = document.querySelectorAll('.imageGiphy');
        btnImagen.forEach(
            function (btnImages){
                btnImages.addEventListener('mouseover', hoverImages);
        })*/
    
    const btnMore = document.createElement('button')
    btnMore.classList.add("btnMore");
    btnMore.classList.add("fontBlue");
    btnMore.classList.add("fontMontserrat");
    btnMore.innerHTML = "VER MÁS"
    searchContainer.appendChild(btnMore);

             
    }, textValue, 12);
}

//---------para que se dispare en click----------------
btnSearch.addEventListener('click', doSearch);

//---------para que se dispare en enter----------------
txt.addEventListener('keydown', (event)=> {
    if (event.keyCode===13){
        doSearch();
    }
})

//----------------autocomplete---------------------
const searchList = document.querySelector(".searchList")
txt.addEventListener('keyup', function () {
    const textValue = txt.value;
    clear2();
    giphyService.getAuto(function(data){
        
        data.forEach(element=>{
            
            const list = document.createElement("div");
            list.innerHTML = `<input type="button" class="btnSearch"> ${element.name}`;
            list.classList.add('autoCompleteLi')
            list.classList.add('fontRoboto')
            searchList.appendChild(list);
            searchList.classList.add('borderList');
            list.addEventListener('click', changeTxt => {
                txt.value = element.name;
                doSearch();
                clear2();
            
            })
            

        })
        
        }, textValue, 4, 3)


} )

//---------------funciones botones de los over-------------

const like = document.querySelector('#like');
const downl = document.querySelector('#downL');
const maxim = document.querySelector('#max');



const arrayFav = [];

function addFav(){
    //let nameFav = elemento.id;
    let urlFav = parse.this.value;
    console.log(urlFav);

    //localStorage.setItem('id', nameFav);
   

   //arrayFav.push (urlFav);
   //console.log(arrayFav);
   //return arrayFav;
   
}




/*
//---------------favoritos --------------------------
function guardarFav (){
    //Captura de datos     
    let urlFav = this.data.images.original.url;
    

    //Guardando los datos en el LocalStorage
    localStorage.setItem("URL", urlFav);
    

}
*/

