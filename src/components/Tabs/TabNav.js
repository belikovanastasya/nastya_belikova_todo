import PropTypes from 'prop-types';

export const TabNav = ({ links, select, activeIndex }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };
  return (
    <div className="nav-tab">
      <ul>{links.map((title, index) => (
        <li
          className={activeIndex === index ? 'active' : ''}
          key={index}
        >
          <a
            href="#"
            onClick={e => onClick(e, index)}
          >
            {title}
          </a>
        </li>))}
      </ul>
    </div>);
};
TabNav.propTypes = {
  select: PropTypes.func,
  links: PropTypes.array,
  activeIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
};
TabNav.defaultProps = {
  links: [],
  select: _ => _,
  activeIndex: '0'
};
