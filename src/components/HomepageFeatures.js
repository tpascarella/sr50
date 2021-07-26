import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/public_black_24dp.svg').default, 
    /* Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default, */
    description: (
      <>
        SR50 is open source, meaning we get contributions on how to improve the method from people all over the world. We are constantly refining the method to deliver the most efficient personal financial method in existence, and it's only getting better.
      </>
    ),
  },
  {
    title: 'Transparent',
    Svg: require('../../static/img/search_black_24dp.svg').default,
    /* Svg: require('../../static/img/undraw_docusaurus_tree.svg').default, */
    description: (
      <>
        Every financial advisor in the country is an insurance salesman posing as a financial advisor. Look up the job postings if you don't believe me. We are completely transparent about how we make money, what we teach, and why.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('../../static/img/lock_black_24dp.svg').default,
    /* Svg: require('../../static/img/undraw_docusaurus_react.svg').default, */
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
