export const TabNav =
   ({ links, select, activeIndex }) => {
      const onClick = (e, index) => {
      select(index);
      e.preventDefault();
 };
 return (
  <nav className="nav-tab">
     <ul>{links.map((title, index) => (
       <li className = {activeIndex === index ? 'active': ''}
         key={index} >
           <a href="#"
                onClick={(e) => onClick(e, index)}
           >{title}</a>
         </li>)
       )} 
    </ul> 
  </nav>); 
};
