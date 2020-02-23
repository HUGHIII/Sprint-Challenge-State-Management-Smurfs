import React from 'react'
import {connect} from 'react-redux';
import SmurfCard from './smurfCard';



const SmurfMap = props => {

    return (
        <div className='smurf-map'>
                {props.smurfs.map(e=>
                    <SmurfCard key={e.id} smurfs={e}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs
    }
}
export default connect (mapStateToProps, {})(SmurfMap)
