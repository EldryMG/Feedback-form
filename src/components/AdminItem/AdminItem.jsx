function AdminItem(id, flagged){

const screamSomething = () => {
    console.log('in screamSomething')
}
    return(
        
        <div key={id} onClick={() => screamSomething()}>{flagged}</div>

    );
}

export default AdminItem;