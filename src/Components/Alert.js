import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: "50px"}} >
         {props.alert && <div>  {/*here props.alert is used with && initially because at start alert is null so that gives us an error
         so it works same as if condition if props.alert is null means value of props.alert becomes false and so because of && operator the whole condition will become false and
         it will not evaluate second condition so we will not get any error*/} 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>}
        </div>
    )
}
