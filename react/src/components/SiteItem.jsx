import React from 'react';
import '../assets/styles/components/SiteItem.scss'

const SiteItem = () => {
    return(
        <div className="place__container">
  <div className="place__images"> 
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
    <img className="place-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
  </div>

  
    <div className="place__item">
     <div className="container__img">
        <img className="img--place" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
     </div>
     <div className="container__text">
        <p className="place--title">Lugar</p>
        <p className="place--category">Categoria</p>
        <p className="place--city">Ciudad</p>
    </div>
    </div>

    <div className="place__description">
    <div className="descripcion__container">
        <p className="place__description--text">descripcion</p>
    </div>
    </div>

    <div className="place__map">
    <div className="place__map--container">
        
    </div>
    </div>

    <div className="place__comment">
        <input className="place_comment--inputComment" type="text" placeholder="Deja tu comentario"/> 
        <button className="place_button--comment">Publicar</button>
    </div>

    <div className="place__recomendations">
    <p>recomandaciones</p>
    </div>

    <div className="place__opinions">
    <p>opiniones</p>
    </div>
    
</div>
    )
    
}

export default SiteItem;