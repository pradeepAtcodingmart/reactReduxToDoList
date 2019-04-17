import React, { Component } from 'react'

    export default class Form extends Component {
    constructor(){
        super();
        this.state={
            value:'',
            isEdit:false
        }
    }
componentWillUpdate(nextProps, nextState){
    if(!this.state.isEdit && nextProps.value!==undefined)
    {
    nextState.value=nextProps.value
    console.log(nextState)
    nextState.isEdit=true;
    }

}
    handleChange =event =>{
        this.setState({[event.target.name]:[event.target.value]})
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        this.setState({value:''})
        if(!this.state.isEdit)
         this.props.setData(this.state.value);
        else
        {
          this.props.setEditData(this.state.value,this.props.index)
          this.setState({isEdit:false})
        }

    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea   name='value' onChange={this.handleChange} value={this.state.value} />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}
