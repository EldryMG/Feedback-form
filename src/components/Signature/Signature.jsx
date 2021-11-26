import { GiFlatHammer, GiAxeSword, GiCrossShield } from "react-icons/gi";


function displaySignature(){
    return (
        <>
        <footer>
        <p id="copyrightLine"><GiAxeSword size="1.5em"/>Project by: Franck Bushbaum (<a href="mailto:franck.bushbaum@yahoo.com">Email</a> | 
        <a href="https://github.com/EldryMG" target="_blank">Github</a>)<GiCrossShield size="1.5em"/></p>
        </footer>
                {/* React icons were imported using npm install @material-ui/core */}

       </>

    );

}

export default displaySignature;

