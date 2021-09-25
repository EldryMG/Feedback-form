import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function Support() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/comments');
    }

    return (
        <>
            <h2>In Page 3</h2>


            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Support;