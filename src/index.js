import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "react-photo-gallery";
import photos from "./photos";
import './index.css';

class Title extends React.Component {
  render() {
    return <h1>Some Travel Photos</h1>
  }
}

class LocationFilter extends React.Component {
  render() {
    let options = [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Japan",
        value: "japan",
      },
      {
        label: "Mexico",
        value: "mexico",
      },
      {
        label: "Europe",
        value: "europe",
      },
      {
        label: "Texas",
        value: "texas",
      },
      {
        label: "Oklahoma",
        value: "oklahoma",
      },
      {
        label: "California",
        value: "california",
      },
      {
        label: "Tennessee",
        value: "tennessee",
      },
      {
        label: "Colorado",
        value: "colorado",
      },
      {
        label: "Washington",
        value: "washington",
      },
      {
        label: "Florida",
        value: "florida",
      },
    ];
    return <div className="filterDiv">
      <label htmlFor="locationFilter">Location</label>
      <br/>
      <select name="locations" id="locationFilter" className="selectFilter" onChange={this.props.onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  }
}

class YearFilter extends React.Component {
  render() {
    let options = [
      {
        label: "All",
        value: "all",
      },
      {
        label: "2012",
        value: "2012",
      },
      {
        label: "2018",
        value: "2018",
      },
      {
        label: "2019",
        value: "2019",
      },
      {
        label: "2020",
        value: "2020",
      },
      {
        label: "2021",
        value: "2021",
      },
    ];
    return <div className="filterDiv">
      <label htmlFor="yearFilter">Year</label>
      <br/>
      <select name="years" id="yearFilter" className="selectFilter" onChange={this.props.onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos_to_render: photos
    }
  }
  filterByLocation(value) {
    let filtered_location = value;
    if (filtered_location != "all") {
      let filtered_photos = photos.filter(photo => photo.location == filtered_location);
      this.setState({
        photos_to_render: filtered_photos
      });
    } else {
      this.setState({
        photos_to_render: photos
      });
    }
  }
  filterByYear(value) {
    let filtered_year = value;
    if (filtered_year != "all") {
      let filtered_photos = photos.filter(photo => photo.year == filtered_year);
      this.setState({
        photos_to_render: filtered_photos
      });
    } else {
      this.setState({
        photos_to_render: photos
      });
    }
  }
  render() {
    return (
      <div>
        <div id="filterContainer">
        <Title />
          <LocationFilter onChange={() => this.filterByLocation(document.getElementById('locationFilter').value)} />
          <YearFilter onChange={() => this.filterByYear(document.getElementById('yearFilter').value)} />
        </div>
        <Gallery photos={this.state.photos_to_render} direction={"column"} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);