import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SR50 is open source, meaning everything we teach is given away for free, 
        and anyone with valuable insight to add is encouraged to contribute.
      </>
    ),
  },
  {
    title: 'Transparency',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Nearly every "financial advisor" in the world is just an insurance salesman, and if you don't believe me
        look up the job postings on indeed. You'll see yourself. They make their money selling insurance and hide behind a veil
        posing as financial advisors. We are completely transparent about how we make money, what we teach, and why we do it.
        
        Unlike "financial advisors" who make their money by selling insurance instead of 
        advising you, we are completely transparent about how we make money, how we run our company,
        and what we have to offer.
      </>
    ),
  },
  {
    title: 'Completely Private',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All other financial platform (Mint, Personal Capital) force you to give them
        your personal login credentials before they provide any value. We force our users to bring
        the numbers with them.
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
