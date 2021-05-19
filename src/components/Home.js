import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beersIMG from '../assets/beers.png';
import newbeerIMG from '../assets/new-beer.png';
import randombeerIMG from '../assets/random-beer.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/beers">
            <img src={beersIMG} alt='beers'/>
            <h2>Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              excepturi iste vel sapiente maxime porro nam adipisci earum itaque
              dolor.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/new-beer">
            <img src={newbeerIMG} alt='new-beer'/>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              excepturi iste vel sapiente maxime porro nam adipisci earum itaque
              dolor.
            </p>
          </Link>
        </div>

        <div>
          <Link to="/random-beer">
            <img src={randombeerIMG} alt='random-beer'/>
            <h2>Random Beer</h2>
            <p>
              Provident distinctio a optio id illo commodi! Ducimus amet quia
              iure asperiores quae suscipit delectus laborum doloremque dicta,
              incidunt blanditiis?
            </p>
          </Link>
        </div>
      </div>
    );
  }
}