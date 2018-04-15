import './gallery.scss';

const surses = ['cat.jpg', 'dog.jpg', 'run.jpg'];

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {surses.map((src, index) => <li key={index}><img src={`./images/${src}`} alt="" /></li>)}
        </ul>
      </div>
    );
  }
}
