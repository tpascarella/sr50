import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/public_white_18dp.svg').default, 
    description: (
      <>
        The SR50 method is open source, and constantly improving.
      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('../../static/img/search_white_18dp.svg').default,
    description: (
      <>
        Everything taught is organized into a free documentation website.
      </>
    ),
  },
  {
    title: 'Private',
    Svg: require('../../static/img/lock_white_18dp.svg').default,
    description: (
      <>
        No account is required to use the product.  
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
