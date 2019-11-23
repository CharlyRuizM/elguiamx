import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import CategoriesMenu from '../components/CategoriesMenu';

import '../assets/styles/components/Home.scss';



const Home = ({ myList, trends, originals }) => {
    return (
        <div className="home">
            <Search isHome/>
            <CategoriesMenu/>
            {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item} 
                                isList
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            {trends.length > 0 &&
                <Categories title="Tendencias">
                    <Carousel>
                        {trends.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item} 
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            {originals.length > 0 &&
                <Categories title="Agregados Recientemente">
                    <Carousel>
                        {originals.map(item =>
                            <CarouselItem 
                                key={item.id} 
                                {...item} 
                            />
                        )}
                    </Carousel>
                </Categories>

            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);