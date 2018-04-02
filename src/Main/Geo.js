export class GeoBtn extends Component {
  state = {
    latitude: null,
    longitude: null
  }
  getGeoPosition =() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const crd = position.coords;
      this.setState({ latitude: crd.latitude, longitude: crd.longitude });
    });
  }
  render() {
    return (
      <div className="geopos">
        <button onClick={this.getGeoPosition}>Get Position</button>
        <div>Latitude is: {this.state.latitude}</div>
        <div>Longitude is {this.state.longitude}</div>
      </div>
    );
  }
}
