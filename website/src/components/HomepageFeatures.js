import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Science Communication',
    Svg: require('../../static/img/pfunk.svg').default,
    description: (
      <>
      <ul>
            <li>Writing and editing, proofreading, review</li>
            <li>Public outreach and stakeholder engagement</li>
            <li>Event organizing</li>
            <li>Science as Art, and Scientific Art</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Education and training',
    Svg: require('../../static/img/teach.svg').default,
    description: (
      <>
      <ul>
            <li>Science Communication, Environmental Justice</li>
            <li>Conservation, Sustainability</li>
            <li>Curriculum development</li>
            <li>Deep Learning / Machine Learning / Python </li>
      </ul>
      </>
    ),
  },
  {
    title: 'Environmental data analytics, AI',
    Svg: require('../../static/img/cv.svg').default,
    description: (
      <>
      <ul>
            <li>Machine/Deep Learning</li>
            <li>Image processing and analysis</li>
            <li>Open source software and practices</li>
      </ul>
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
