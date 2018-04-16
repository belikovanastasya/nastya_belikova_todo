import PropTypes from 'prop-types';
import { TabNav } from './TabNav';
import './tab.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }
  componentDidMount() {
    this.clickTab(0);
  }
  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content
    });
  }
  render() {
    return (
      <section className="tab">
        <TabNav
          list={
              this.props.tabs.map(({ id, title }) => ({ id, title }))
              }
          select={this.clickTab}
        />
        <div>{this.state.content}</div>
      </section>
    );
  }
}
TabNav.propType = {
  list: PropTypes.array,
  select: PropTypes.func
};
TabNav.defaultProps = {
  list: [],
  select: _ => _
};
