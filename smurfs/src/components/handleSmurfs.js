import React from 'react'
import {connect} from 'react-redux';
import {getData} from './actions/mainActions';





const HandleSmurfs = (props) => {
    // console.log(props)

    const handleGetData = e => {
        e.preventDefault();
        props.getData()
    }
    
    return (

        <div className='smurf-fetch-container'>
            
            {props.isFetchingData ? (<h2>loading smurfs</h2>):(<button onClick={handleGetData}>SMURFS!</button>)}

        </div>

    )
}


const mapStateToProps = state => {
    return {
        isFetchingData:state.isFetchingData,
        // smurfs: state.smurfs
    }
}

export default connect (mapStateToProps, {getData}) (HandleSmurfs)