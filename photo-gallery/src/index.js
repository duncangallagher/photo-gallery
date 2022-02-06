import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import './index.css';

ReactDOM.render(
  <Gallery photos={photos} direction={"column"}/>,
  document.getElementById('root')
);