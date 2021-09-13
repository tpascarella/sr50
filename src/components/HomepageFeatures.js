import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/public_black_18dp.svg').default, 
    /* Svg: require('../../static/img/public_white_18dp.svg').default, */
    description: (
      <>
        SR50 is open source, meaning anyone in the world can contribute to the site.
      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('../../static/img/search_black_18dp.svg').default,
    /* Svg: require('../../static/img/search_white_18dp.svg').default, */
    description: (
      <>
        Everything we teach is made freely available to the public.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('../../static/img/lock_black_18dp.svg').default,
    /* Svg: require('../../static/img/lock_white_18dp.svg').default, */
    description: (
      <>
        We collect zero data from users.  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
