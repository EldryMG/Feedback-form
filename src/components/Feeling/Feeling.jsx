import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Feeling(){
    const history = useHistory();

    const nextPage = () => {    
        history.push('/understanding')
    };

    return(
        <>
        <h2>In Feeling</h2>


        <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Feeling;