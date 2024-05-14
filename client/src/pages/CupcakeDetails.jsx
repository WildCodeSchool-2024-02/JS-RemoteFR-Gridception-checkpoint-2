import { useLocation } from "react-router-dom";


function CupcakeDetails () {

    const location = useLocation();
    const {from} = location.state;

    return(
        <section>
            <p from={from}> JE SUIS DANS MA PAGE CUPCAKE DETAILS</p>
        </section>
    );
}

export default CupcakeDetails;