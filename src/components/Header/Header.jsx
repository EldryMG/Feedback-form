import { useHistory } from 'react-router-dom';

function Header(){

    const history = useHistory();

// This entire Header component was a trial to see if I could Click on the css element to reroute the user to the page '/'.
// Experiment failed but I feel like I got close!

    const toBeginning = () => {
        setTimeout(() => {
            history.push('/')
        }, 2000);
    }

    return (
        <>
        <h1 className='App-title' onClick={toBeginning}>Feedback!</h1>
       </>

    );

}

export default Header;