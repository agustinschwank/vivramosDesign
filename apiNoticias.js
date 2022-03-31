'use strict'


var contentNoticia = document.querySelector('#news_api');


const getError = () => {
    var menssajeError = `<div class="alert alert-danger" role="alert"> Disculpe no podemos conectarnos a la API. <br> La api no se encuentra disponible por el momente refresque la pagina o intente mas tarde.</div>`;
    contentNoticia.innerHTML = menssajeError;
}


const getNoticias = (noticias) => {
    var plantilla = '';
    noticias['body'].forEach(noticia => {
        plantilla += `
                        <a class="col-3 card__new" href="${noticia.URL}?utm_source=vivramos&utm_medium=vivramos">
                            <div class="news__img">
                                <img src="${noticia.Avatar}" alt="name"/>
                            </div>
                            <div class="news__title">${noticia.Titulo}</div>
                        </a>
                    `;
    });
    noticias['body'].map((noticia)=>{
        console.log(noticia);
    });
    contentNoticia.innerHTML = plantilla;
};

fetch('https://url.com/api', {headers: {"Accept": "application/json"}})
                                                .then(datos => datos.json())
                                                .then(datos => getNoticias(datos))
                                                .catch(error => getError());
