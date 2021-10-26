import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Propulsé par Markdown',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Écrivez simplement des docs et des articles de blog avec Markdown/MDX et Docusaurus publiera un ensemble de fichiers HTML statiques prêts à déployer. Vous pouvez même intégrer des composants JSX dans votre Markdown grâce à MDX.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Construit avec React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Docusaurus peut être étendu en réutilisant le même entête et le même pied de page.
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
