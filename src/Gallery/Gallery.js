import './gallery.scss';

const sourses = ['cat1.jpg', 'dog.jpg', 'run.jpg'];

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <ul>
          {sourses.map((src, index) => <li key={index}><img src={`./images/${src}`} alt="" /></li>)}
        </ul>
      </div>
    );
  }
}
