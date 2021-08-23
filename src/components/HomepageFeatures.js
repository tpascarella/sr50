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
        SR50 is open source. We are constantly refining the method to deliver the most efficient personal financial method in existence.
      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('../../static/img/search_black_18dp.svg').default,
    /* Svg: require('../../static/img/search_white_18dp.svg').default, */
    description: (
      <>
        Every financial advisor in the country is an insurance salesman posing as a financial advisor, which you can verify by checking the job listings on LinkedIn.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('../../static/img/lock_black_18dp.svg').default,
    /* Svg: require('../../static/img/lock_white_18dp.svg').default, */
    description: (
      <>
        Modern finance apps force you to give them your personal login information in order to provide value. We collect zero data from users.  
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
