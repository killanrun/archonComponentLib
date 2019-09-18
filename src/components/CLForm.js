import React from 'react';
import CLInput from './CLInput';

class CLForm extends React.Component{
    constructor(props){
        super(props);



    }

    render(){
        return(
            <div style={{margin:"2rem"}}>
                <form>
                    <CLInput/>
                </form>


            </div>



        );
    }




}

export default CLForm;