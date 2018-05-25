import PropTypes from 'prop-types';
import { Tab, TabNav } from './';
import './tab.scss';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.selectedIndex };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedIndex !== prevState.id) {
      return {
        id: nextProps.selectedIndex
      };
    }
  }
  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const { id } = this.state;
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title);
    const currentTab = tabs[id] && tabs[id].props.children;
    return (
      <div className="tabs">
        <TabNav
          select={this.clickTab}
          activeIndex={this.state.id}
          links={links}
        />
        <div className="tab-content"> {currentTab} </div>
      </div>
    );
  }
}
Tabs.propTypes = {
  selectedIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
};
Tabs.defaultProps = {
  selectedIndex: '0'
};
