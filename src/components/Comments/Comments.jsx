import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Comments() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/');
    }
    return (
        <>
            <h2>In page 4</h2>


            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Comments;