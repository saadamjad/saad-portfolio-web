import React from 'react';

const Loader = ()=>{

        console.log("RUNNING")
        return <>
        
        <progress value={1} />
        <progress value={0} />
        <progress value={1} />
        <progress value={10} />
        </> 
        
    }

    export {Loader}
