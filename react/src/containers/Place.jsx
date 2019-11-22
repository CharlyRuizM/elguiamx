import React, { useEffect } from 'react';
import { connect  } from 'react-redux';
import { getPlaceSource } from '../actions'
import { Redirect } from 'react-router-dom';
//import '../assets/styles/components/Place.scss';
import NotFound from '../containers/NotFound';

const Place = props => {

    const { id } = props.match.params;
    //const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getPlaceSource(id);
    }, []);

    

    return true ? (
        

        <div>{id}</div>



    ) : <NotFound />;
};

const mapStateToProps = state => {
    return {
        placeId: state.playing,
    }
}

const mapDispatchToProps = {
    getPlaceSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);