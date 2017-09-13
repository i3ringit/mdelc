/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../components/projects.css';
import tabletWordpress1x from './img/tablet-wordpress_1x.png';
import tabletWordpress2x from './img/tablet-wordpress_2x.png';
import phoneWordpress1x from './img/phone-wordpress_1x.png';
import phoneWordpress2x from './img/phone-wordpress_2x.png';
import pingdomResult1x from './img/pingdom-result_1x.png';
import pingdomResult2x from './img/pingdom-result_2x.png';

class MySite extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <main id="main" role="main">

        <section className={`${s.largeSection} ${s.longBottom} ${s.bgGrayLight}`}>

          <div className={s.container}>

            <div className={s.section_intro}>
              <h2 className={s.textLarge}>
                This Website
              </h2>
              <p className={s.textNormal}>
                This website is an <a
                  href="https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc"
                  target="_blank"
                  rel="noopener noreferrer"
                >isomorphic</a> web app built on top of <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Node.js</a>, <a
                  href="http://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Express</a>, <a
                  href="http://graphql.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >GraphQL</a>, and <a
                  href="https://facebook.github.io/react/"
                  target="_blank"
                  rel="noopener noreferrer"
                >React</a>. Using <a
                  href="http://webpack.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Webpack</a> to bundle modules, <a
                  href="http://babeljs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Babel</a> for next-gen JavaScript, and <a
                  href="https://browsersync.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >Browsersync</a> for synchronized cross-device testing.
              </p>
            </div>

            <div className={`${s.largeSection} ${s.largeSection_textAndMedia}`}>
              <div className={`${s.grid} ${s.grid__middle} ${s.grid__override}`}>

                <div className={`${s.grid_item} ${s.desktop__oneHalf} ${s.tablet__oneWhole}`}>
                  <div className={s.largeSection_media}>
                    <img src={phoneWordpress1x} srcSet={phoneWordpress2x} alt="VetMed multisite on tv." />
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Server-side rendering</h3>
                    <p className={s.textNormal}>
                      Rendering this app server-side allows for great
                      performance. A smooth experience even when dealing with
                      the slowest connections.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div
              className={`${s.largeSection}
                          ${s.largeSection_textAndMedia}
                          ${s.largeSection_mediaDeskRight}
                          ${s.tightBottom}`}
            >
              <div className={`${s.grid} ${s.grid__middle} ${s.grid__override}`}>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Beautiful Designs</h3>
                    <p className={s.textNormal}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsum voluptate, modi expedita magni explicabo.
                      Laudantium accusamus ipsam reprehenderit quis unde.
                      <br />
                      <br />
                      Repellat blanditiis distinctio autem amet sint quibusdam
                      tempore, aliquid, praesentium dolorum, vitae accusantium
                      alias nulla, doloremque suscipit laboriosam laudantium
                      iusto.
                    </p>
                    <a
                      href="http://vetmed.illinois.edu/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={s.btn}
                      draggable="false"
                      aria-hidden="false"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.desktop__oneHalf}
                              ${s.tablet__oneWhole}
                              ${s.push__desktop__twoTwelfths}`}
                >
                  <div className={s.largeSection_media}>
                    <img src={tabletWordpress1x} srcSet={tabletWordpress2x} alt="VetMed multisite on phone" />
                  </div>
                </div>

              </div>
            </div>

            <div className={`${s.largeSection} ${s.tightBottom} ${s.largeSection_textAndMedia}`}>
              <div className={`${s.grid} ${s.grid__middle} ${s.grid__override}`}>

                <div className={`${s.grid_item} ${s.desktop__oneHalf} ${s.tablet__oneWhole}`}>
                  <div className={s.largeSection_media}>
                    <img src={pingdomResult1x} srcSet={pingdomResult2x} alt="VetMed multisite on tv." />
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Great Performance</h3>
                    <p className={s.textNormal}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsum voluptate, modi expedita magni explicabo.
                      Laudantium accusamus ipsam reprehenderit quis unde.
                      <br />
                      <br />
                      Repellat blanditiis distinctio autem amet sint quibusdam
                      tempore, aliquid, praesentium dolorum, vitae accusantium
                      alias nulla, doloremque suscipit laboriosam laudantium
                      iusto.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </section>

      </main>
    );
  }
}

export default withStyles(s)(MySite);
