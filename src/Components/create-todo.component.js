import React, {Component} from 'react';

export default class EditTodo extends Component {
    constructor (props) {
        super(props);
        // the implemented methoeds involve handling the components statep need to bind the methods to this. 
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

        //  method to handle the submittal of the Event of Form which will be implemented to create a new to-do item
        onSubmit(e) {
            //event.preventDefault - enusre that the defualt submit behavior is precented. 
            e.preventDefault();

            console.log('formSubmitted:');
            console.log('Todo Description: ${this.state.todo_description}');
            console.log('Todo Responsible: ${this.state.todo_responsible}');
            console.log('Todo Priority: $(this.state.todo_priority}');

            // make sure that form is reset in the by resetting the object state
           this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        })
    }

        }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Low'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }