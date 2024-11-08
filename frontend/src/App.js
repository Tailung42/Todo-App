import React, {Component} from 'react';

const todoItems = [
  {
    id: 1,
    title: "project layout",
    description: "Need to design the overall look   the webapp before writing code.",
    completed: false,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }
  
  
  displayCompleted = (status) => {
    this.setState({viewCompleted: status})
    }


  renderTabList = () => {
    return (
      <div className='nav nav-tabs' >
        <span className= {this.state.viewCompleted ? 'nav-link active': 'nav-link'}
          onClick={() =>this.displayCompleted(true)}>
          Complete
        </span>
        <span className= {this.state.viewCompleted ? 'nav-link': 'nav-link active'}
          onClick={() =>this.displayCompleted(false)}>
          Incomplete
        </span>
      </div>
    );
  }


  renderItems =() => {
    const newItems = this.state.todoList.filter(
      (item) => item.completed === this.state.viewCompleted
    );

    return newItems.map((item) => (
      <li key={item.id}
        className='list-group-item d-flex justify-content-between align-items-center'>
        <span className= {`todo-title mr-2 ${this.state.viewCompleted? 'completed-todo': ""}`}
          title={item.description}>
          {item.title} 
        </span>
        <span>
          <button className="btn btn-secondary mr-2">
            Edit
          </button>
          <button className="btn btn-danger">
            Delete
          </button>
        </span>
      </li>
    ));
  }


  render() {
    return (
      <main className='container'>
        <h1 className='text-white text-uppercase text-center my-4'>Todo App</h1>
        <div className='row'>
          <div className='col-md-6 col-sm-10  mx-auto p-0'>
            <div className='card p-3'>
              <button className=' btn btn-primary mb-4'>
                Add Task
              </button>
              {this.renderTabList()}
              <ul className='list-group list-group-flush border-top-0'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;