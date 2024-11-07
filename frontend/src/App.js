import React, {Component} from 'react';

const todoItems = [
  {
    id: 1,
    title: "Design final project layout",
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

  render() {
    return (
      <h1> Hello , world</h1>
    )
  }
}
export default App;