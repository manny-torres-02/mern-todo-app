import React, {Component} from 'react';

export default class EditTodo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            //setting initial state of the component by assigned an object  to this.state 
            //below are the state properties. 
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        }

        //methods to handle the that can be used to update the state properties. 
        onChangeTodoDescription (e) {
            this.setState({
                todo_description:e.target.value
            });
        };

        onChangeToDoResponsible(e) {
            this.setState({
                todo_priority:e.target.value
            });
        }

        onChangeTodoPriority (e) {
            this.setState({
                todo_priority: e.target.value
            });
        }

    render () {
        return (
            <div>
                <p> Welcome to Create Todo Component!!</p>
            </div>
            ) 
    }
}