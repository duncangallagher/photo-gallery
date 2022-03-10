import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "react-photo-gallery";
import photos from "./photos";
import './index.css';

const all_photos = photos.filter(function (photo) {
  return photo.src != "/photos/empty.png";
});

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
      <br />
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
      <br />
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
      rendered_photos: all_photos,
    }
  }

  filterPhotos(location, year) {
    var filtered_photos;
    if (location == "all" && year != "all") {
      filtered_photos = all_photos.filter(function (photo) {
        return photo.year == year;
      });
    }
    if (location != "all" && year == "all") {
      filtered_photos = all_photos.filter(function (photo) {
        return photo.location == location;
      });
    }
    if (location != "all" && year != "all") {
      filtered_photos = all_photos.filter(function (photo) {
        return photo.location == location && photo.year == year;
      });
    }
    if (location == "all" && year == "all") {
      filtered_photos = all_photos;
    }
    if (filtered_photos.length == 0) {
      filtered_photos = photos.filter(function (photo) {
        return photo.src == "/photos/empty.png";
      });
    }
    console.log(filtered_photos);
    this.setState({
      rendered_photos: filtered_photos,
    });
  }

  render() {
    return (
      <div>
        <div id="filterContainer">
          <Title />
          <LocationFilter onChange={() => this.filterPhotos(document.getElementById('locationFilter').value, document.getElementById('yearFilter').value)} />
          <YearFilter onChange={() => this.filterPhotos(document.getElementById('locationFilter').value, document.getElementById('yearFilter').value)} />
        </div>
        <Gallery photos={this.state.rendered_photos} direction={"column"} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);