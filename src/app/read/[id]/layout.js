export default function Layout(props){
    let msg = null;
    if(props.params.id ===1){
        msg = "HTML";
    }else if(props.params.id ===2){
        msg = "CSS";
    }else if(props.params.id ===3){
        msg = "JS";
    }
    return(
        <>
            {props.children}
            <h3> parameters : {props.params.id}</h3>
            <h3>{msg}</h3>
        </>
    );
}