// export class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       originTodos: [],
//       search: ''
//     };
//   }
//   componentDidMount() {
//     this.getTask();
//   }
//   getTask() {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(originTodos => this.setState({ originTodos: originTodos.filter(task => task.userId === 1) }));
//   }
//   onChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     this.setState({ search: value });
//   }
//   render() {
//     const { originTodos, search } = this.state;
//     const filterList = originTodos.filter(task => task.title.includes(search));

//     return (
//       <div className="container">
//         <input
//           onChange={this.onChange}
//         />
//         <ul className="todos">
//           {filterList
//             .map(task => {
//               return (
//                 task.completed ?
//                   <li key={task.id} className="complited">{task.title}
//                     <span className="delete">
//                       <img src="./images/cancel.png" alt="" />
//                     </span>
//                     <span className="done">
//                       <img src="./images/done.png" alt="" />
//                     </span>
//                     <span className="inProgress">
//                       <img src="./images/inprogress.png" alt="" />
//                     </span>
//                   </li>
//                   :
//                   <li key={task.id}>{task.title}
//                     <span className="delete">
//                       <img src="./images/cancel.png" alt="" />
//                     </span>
//                     <span className="done">
//                       <img src="./images/done.png" alt="" />
//                     </span>
//                     <span className="inProgress">
//                       <img src="./images/inprogress.png" alt="" />
//                     </span>
//                   </li>
//               );
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }
