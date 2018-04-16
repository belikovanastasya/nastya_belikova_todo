export class Geo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: ''
    };
  }
  componentDidMount() {
    this.setCurrentGeoPosition();
  }

  setCurrentGeoPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const crd = position.coords;
      this.setState({ lat: crd.latitude, long: crd.longitude });
    });
  }

  getGeoPosition = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    const { long, lat } = this.state;
    const src = `http://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=12&size=300x300&sensor=false&language=ru&markers=color:blue|label:S|${lat},${long}`;
    return (
      <div className="map">
        <div>
          <input value={long} onChange={this.getGeoPosition} name="long" type="number" min="-90" max="90" />
          <input value={lat} onChange={this.getGeoPosition} name="lat" type="number" min="-180" max="180" />
        </div>
        <img src={src} alt="" />
      </div>
    );
  }
}
