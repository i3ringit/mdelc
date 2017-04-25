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

class Wordpress extends React.Component {
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
                WordPress Websites
              </h2>
              <p className={s.textNormal}>
                My WordPress sites are mobile-friendly, attractive, and speedy.
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
                    <h3 className={s.beta}>Mobile First</h3>
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

export default withStyles(s)(Wordpress);
