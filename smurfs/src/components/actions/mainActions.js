import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const RENDER_DATA = 'RENDER_DATA';
export const POST_DATA = 'POST_DATA';

export const getData = () => dispatch => {
    dispatch({type:FETCH_DATA});
    axios.get ('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data);
        dispatch({type:RENDER_DATA, payload:res.data})
    })
    .catch(err => console.log(err, 'error retrieving data'))
}

export const addData = (newSmurf) => dispatch => {
    axios.post('http://localhost:3333/smurfs',newSmurf)
    .then(res => {
        console.log('post', res.data);
        dispatch({type:POST_DATA, payload:res.data})
    })
    .catch (err => {
        console.log('post error', err)
    })
}