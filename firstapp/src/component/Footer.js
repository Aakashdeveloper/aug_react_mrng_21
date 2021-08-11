import React,{Fragment} from 'react';

const Footer = (props) => {
    return(
        <Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.year} {props.month}</h3>
            </center>
        </Fragment>
    )
}

export default Footer;
