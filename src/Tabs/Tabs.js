import PropTypes from 'prop-types';
import { Tab, TabNav } from './';
import './tab.scss';

// export class Tabs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { content: '' };
//   }
//   componentDidMount() {
//     this.clickTab(0);
//   }
//   clickTab = (id) => {
//     this.setState({
//       content: this.props.tabs[id].content
//     });
//   }
//   render() {
//     return (
//       <section className="tab">
//         <TabNav
//           list={
//               this.props.tabs.map(({ id, title }) => ({ id, title }))
//               }
//           select={this.clickTab}
//         />
//         <div>{this.state.content}</div>
//       </section>
//     );
//   }
// }
// Tabs.propTypes = {
//   content: PropTypes.string,
// };
export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }
  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const { id } = this.state;
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map((tab) => tab.props.title);
    const currentTab = tabs[id] && tabs[id].props.children;
   
    return (
      <div className="tabs">
        <TabNav select={this.clickTab} activeIndex={this.state.id}
          links={links}
        />
        <div className="tab-content"> {currentTab} </div>
      </div>
    );
  }
}
 