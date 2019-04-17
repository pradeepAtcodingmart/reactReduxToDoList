import React, { Component } from 'react'
import { TODO_ACTIONS } from "./../../redux/actions";
import {connect} from "react-redux";
import Form from '../Form/Form';
import Table from '../Table/Table';

class ToDoList extends Component {
    
    setData =(value)=>{
        if(value!==undefined) {
            this.props.dispatch({type: TODO_ACTIONS.ADD, payload: value[0]})
                }
        
    }
    setEditData =(value,index)=>{
        if(value!==undefined) {
            const payload={
                value:value[0],
                index:index
            }
            this.props.dispatch({type: TODO_ACTIONS.UPDATE, payload:payload})
                }
        
    }
    
    deleteData = index =>{
        this.props.dispatch({type: TODO_ACTIONS.REMOVE, payload: index})

    }
    editData = index =>{
        this.props.dispatch({type: TODO_ACTIONS.EDIT, payload: index})

    }
    

    render() {
        let { data } = this.props;
        let { value } = this.props;
        let { index } = this.props;

        console.log(value)
        return (
            <div>
            <Form setData={this.setData} value={value} index={index}  setEditData={this.setEditData}/>
            <Table data={data} deleteData={this.deleteData}  editData={this.editData}/>
            </div>
            )
        }
    }
    
    function mapStateToProps(state) {
        return {
            data: state.data,
            value:state.value,
            index:state.index
        }
    }
    
    export default connect(mapStateToProps)(ToDoList)