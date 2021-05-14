import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Science Communication, Editing',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <ul>
            <li>Report writing and editing / Public Outreach</li>
            <li>Stakeholder engagement / Event organizing</li>
            <li>Science as Art, and Scientific Art</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Education and training',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <ul>
            <li>Deep Learning / Machine Learning / Python </li>
            <li>Science Communication / Sustainability</li>
            <li>Curriculum development</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Data analytics, AI',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <ul>
            <li>Machine Learning</li>
            <li>Big Geospatial Data</li>
            <li>Open source software</li>
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
