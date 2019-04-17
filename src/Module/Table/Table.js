import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((value, index) =>
                            <tr key={index}>
                                <td>{value}</td>
                                <td onClick={()=>this.props.deleteData(index)}>&#10006;</td>
                                <td onClick={()=>this.props.editData(index)}>&#x270E;</td>
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>
        )
    }
}
