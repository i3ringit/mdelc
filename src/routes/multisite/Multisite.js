/**
 * Marcos del Cristo (https://www.mdelcristo.info/)
 *
 * Copyright © 2017-present Marcos del Cristo. All rights reserved.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../components/projects.css';
import tvMultisite1x from './img/tv-multisite_1x.png';
import tvMultisite2x from './img/tv-multisite_2x.png';
import phoneMenu1x from './img/phone-multisite-menu_1x.png';
import phoneMenu2x from './img/phone-multisite-menu_2x.png';

class Multisite extends React.Component {
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
                VetMed Multisite
              </h2>
              <p className={s.textNormal}>
                WordPress multisite containing dozens of websites for the
                College of Veterinary Medicine at the University of illinois.
              </p>
            </div>

            <div className={`${s.largeSection} ${s.largeSection_textAndMedia}`}>
              <div className={`${s.grid} ${s.grid__middle} ${s.grid__override}`}>

                <div className={`${s.grid_item} ${s.desktop__oneHalf} ${s.tablet__oneWhole}`}>
                  <div className={s.largeSection_media}>
                    <img src={tvMultisite1x} srcSet={tvMultisite2x} alt="VetMed multisite on tv." />
                  </div>
                </div>

                <div
                  className={`${s.grid_item}
                              ${s.push__desktop__oneTwelfth}
                              ${s.desktop__fourTwelfths}
                              ${s.tablet__oneWhole}`}
                >
                  <div className={`${s.largeSection_text} ${s.largeSection_text__offsetUp}`}>
                    <h3 className={s.beta}>Hello World!</h3>
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
                    <h3 className={s.beta}>Hello World!</h3>
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
                    <img src={phoneMenu1x} srcSet={phoneMenu2x} alt="VetMed multisite on phone" />
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

export default withStyles(s)(Multisite);
