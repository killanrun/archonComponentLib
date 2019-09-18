import React from 'react';

class CLInput extends React.Component{
    constructor(props){
        super(props);



    }

    render(){
        return(
            <label>
            <input type="text" required/>
            <div class="label-text">First name</div>
            </label>


        );
    }




}

export default CLInput;