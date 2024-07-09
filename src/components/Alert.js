import React from 'react'

export const Alert = (props) => {

    const hide=()=>{
        let elem=document.getElementById("alertbox")
        elem.style['visibility']='hidden';
    }

    const show=()=>{
        let elem=document.getElementById("alertbox")
        elem.style['visibility']='visible';
    }

    window.onload=()=>{
        let element = document.getElementById('alertbox'),
        style = window.getComputedStyle(element),
        value = style.getPropertyValue('visibility');

        if(value=="hidden") show();
        else hide();
    }

    return (
        <div>
            <div id="alertbox" className="alert alert-primary text-center" role="alert">
                {props.message}
            </div>
        </div>
    )
}
