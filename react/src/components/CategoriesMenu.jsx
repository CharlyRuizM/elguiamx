import React from 'react';
import '../assets/styles/components/CategoriesMenu.scss';
import DesayunoImg from '../assets/static/places/desayuno_image.jpg';
import ComidaImg from '../assets/static/places/comida_image.jpg';
import CenaImg from '../assets/static/places/cena_image.jpg';
import CoffeImg from '../assets/static/places/coffe_image.jpg';
import NocturnoImg from '../assets/static/places/nocturno_image.jpg';
import EntretenimientoImg from '../assets/static/places/etretenimiento_image.jpg';

import DesayunoIcon from '../assets/static/icons/desayuno.png';
import ComidaIcon from '../assets/static/icons/almuerzo.png';
import CenaIcon from '../assets/static/icons/cena.png';
import coffeIcon from '../assets/static/icons/cafe.png';
import NocturnaIcon from '../assets/static/icons/nocturna.png';
import cphIcon from '../assets/static/icons/cph.png';
 

const CategoriesMenu = () => {
    return(
        <div className="places">
               <div className="places__container">
                    <div className="places__item">
                      <img className="img__item--img"  src={DesayunoImg} alt="Desayuno"/> 
                      <div className="places-item__background1">
                            <p className="places-item__details-title">Desayuno</p>
                            <img className="img__item--icon" src={DesayunoIcon} alt=""/>
                        </div>   
                   </div>     

                    <div className="places__item">
                      <img className="img__item--img"  src={ComidaImg} alt="Comida"/> 
                        <div className="places-item__background2">
                            <p className="places-item__details-title">Almuerzo</p>
                            <img className="img__item--icon" src={ComidaIcon} alt=""/>
                        </div>                     
                    </div>   
                    
                    <div className="places__item">
                      <img className="img__item--img"  src={CenaImg} alt="Cena"/> 
                      <div className="places-item__background3">
                            <p className="places-item__details-title">Cena</p>
                            <img className="img__item--icon" src={CenaIcon} alt=""/>
                        </div>   
                    </div>     
                    <div className="places__item">
                      <img className="img__item--img"  src={CoffeImg} alt="Coffe"/> 
                      <div className="places-item__background4">
                            <p className="places-item__details-title">Café y té</p>
                            <img className="img__item--icon" src={coffeIcon} alt=""/>
                        </div>   
                    </div>     
                    <div className="places__item">
                      <img className="img__item--img"  src={NocturnoImg} alt="nocturno"/> 
                      <div className="places-item__background5">
                            <p className="places-item__details-title">Nocturna</p>
                            <img className="img__item--icon" src={NocturnaIcon} alt=""/>
                        </div>   
                    </div>     
                    <div className="places__item">
                      <img className="img__item--img"  src={EntretenimientoImg} alt="nocsturno"/> 
                      <div className="places-item__background6">
                            <p className="places-item__details-title">Cosas por hacer</p>
                            <img className="img__item--icon" src={cphIcon} alt=""/>
                        </div>   
                    </div>     
                                    
                </div>          
            </div>
            
    )
}

export default CategoriesMenu;