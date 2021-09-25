import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Understanding(){
    const history = useHistory();

    const nextPage = () => {
        history.push('/support');
    }
    
    return(
        <>
        <h2>In Page 2</h2>


        <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Understanding;