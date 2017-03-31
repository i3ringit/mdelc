/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Projects.css';
import Card from '../../components/Card';
import cpp from './img/badges/badge-cpp.png';
import js from './img/badges/badge-js.png';
import php from './img/badges/badge-php.png';
import acvs from './img/thumbnails/acvs.jpg';
import chambana from './img/thumbnails/chambana-music.jpg';
import mySite from './img/thumbnails/my-website.jpg';
import ventazer from './img/thumbnails/ventazer.jpg';
import vetmedAnimals from './img/thumbnails/vetmed-animals.jpg';
import vetmedMulti from './img/thumbnails/vetmed-multisite.jpg';
import vetmedSchedule from './img/thumbnails/vetmed-schedule.jpg';
import wordpress from './img/thumbnails/wordpress-sites.jpg';

class Projects extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Projects</h1>
          <p>The following is a list of my latest projects as of the past two
             or so years, organized by language.</p>

          <h2>
            <img
              className={s.badgeIcon}
              src={php}
              alt="PHP"
            />
            PHP Projects
          </h2>

          <div className={s.cardContainer}>

            <div className={s.first}>
              <Card
                cardLink="/projects/vetmed-schedule"
                cardSrc={vetmedSchedule}
                cardTitle="VetMed Schedule"
                cardText="Scheduling system for VetMed @ University of Illinois."
              />
            </div>

            <div className={s.second}>
              <Card
                cardLink="/projects/vetmed-multisite"
                cardSrc={vetmedMulti}
                cardTitle="VetMed multisite"
                cardText="WordPress multisite containing dozens of websites."
              />
            </div>

            <div className={s.third}>
              <Card
                cardLink="/projects/wordpress-sites"
                cardSrc={wordpress}
                cardTitle="WordPress sites"
                cardText="Several WordPress sites designed and hosted for clients."
              />
            </div>

            <div className={s.clearLeft} />
          </div>

          <h2>
            <img
              className={s.badgeIcon}
              src={js}
              alt="Javascript"
            />
            Javascript Projects
          </h2>

          <div className={s.cardContainer}>

            <div className={s.first}>
              <Card
                cardLink="/projects/my-site"
                cardSrc={mySite}
                cardTitle="This website"
                cardText="My online portfolio, an isomorphic web app experiment."
              />
            </div>

            <div className={s.second}>
              <Card
                cardLink="/projects/acvs"
                cardSrc={acvs}
                cardTitle="ACVS"
                cardText="WordPress multisite containing dozens of websites."
              />
            </div>

            <div className={s.third}>
              <Card
                cardLink="/projects/chambana"
                cardSrc={chambana}
                cardTitle="Chambana Music"
                cardText="Several WordPress sites designed and hosted for clients."
              />
            </div>

            <div className={s.clearLeft} />
          </div>

          <div className={s.cardContainer}>

            <div className={s.fourth}>
              <Card
                cardLink="/projects/ventazer"
                cardSrc={ventazer}
                cardTitle="Ventazer"
                cardText="Ventazer is an upcoming ticketing platform for mobile and the web."
              />
            </div>

            <div className={s.clearLeft} />
          </div>

          <h2>
            <img
              className={s.badgeIcon}
              src={cpp}
              alt="C++"
            />
            C++ Projects
          </h2>

          <div className={s.cardContainer}>

            <div className={s.first}>
              <Card
                cardLink="/projects/vetmed-animals"
                cardSrc={vetmedAnimals}
                cardTitle="VetMed Animals"
                cardText="An interactive tool for veterinary students."
              />
            </div>

            <div className={s.clearLeft} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
