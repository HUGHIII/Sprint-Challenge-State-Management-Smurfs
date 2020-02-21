
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addData} from './actions/mainActions';



const SmurfForm = props => {

const [newSmurf, setNewSmurf] = useState({name:'', age:'', height:''});

const handleChange = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
};


const handleSubmit = e => {
    e.preventDefault();
    props.addData(newSmurf);
    setNewSmurf({name:'', age:'', height:''});
}

return (
<form onSubmit={handleSubmit}>
    <h3>Enter New Smurf to Add to the Village</h3>
    <label htmlFor='Name'>
    <input
    type='text'
    name='name'
    placeholder='name'
    value={newSmurf.name}
    onChange={handleChange}
    />
    </label>
     <input
    type='text'
    name='age'
    placeholder='age'
    value={newSmurf.age}
    onChange={handleChange}
    />
     <input
    type='text'
    name='height'
    placeholder='height'
    value={newSmurf.height}
    onChange={handleChange}
    />
<button type='submit'>ADD SMURF TO VILLAGE!</button>
</form>
)
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect (mapStateToProps, {addData}) (SmurfForm)















