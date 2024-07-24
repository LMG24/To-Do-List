import React from 'react'
import { withRouter } from './withRouter'


class CreateList extends React.Component {
    state={
        itemName: '',
        dueDate: '',
        notes:''
    }

    addList = (e) => {
        e.preventDefault()
        if (this.state.itemName === '' || this.state.dueDate === '' || this.state.notes === '') {
            alert('fill every')
            return
        }
        this.props.addTasksHandler(this.state)
        this.setState({itemName: '', dueDate:'', notes:''})
        this.props.navigate('/')
    }
    render() {
        return(
            <div className = 'ui main'>
                <h3>Add to List</h3>
                <form className = 'ui form' onSubmit = {this.addList}>
                    <div className = 'field'>
                        <input
                            type = 'text'   
                            name = 'itemName'
                            placeholder='Item Name...'
                            value = {this.state.itemName}
                            onChange = {(e) =>
                                this.setState({itemName: e.target.value})
                            }/>
                    </div>                    
                    <div className = 'field'>
                        <input
                            type = 'date'
                            name = 'dueDate'
                            placeholder='Due date...'
                            value = {this.state.dueDate}
                            onChange={(e) => 
                                this.setState({dueDate: e.target.value})
                            }/>
                    </div>                    
                    <div className = 'field'>
                        <input
                            type = 'text'
                            name = 'notes'
                            placeholder='Notes...'
                            value = {this.state.notes}
                            onChange={(e) =>
                                this.setState({notes: e.target.value})
                            }/>
                    </div>
                    <button className = 'ui button blue' >Add</button>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateList)