import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Propulsé par React et Markdown',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Écrivez simplement des docs et des articles de blog avec Markdown/MDX et Docusaurus publiera un ensemble de fichiers HTML statiques prêts à déployer. Vous pouvez même intégrer des composants JSX dans votre Markdown grâce à MDX.
      </>
    ),
  },
  {
    title: 'Concentrez-vous sur l\'important',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        DevNotes vous permet de vous concentrer sur vos documents. Consultez le cours de votre choix dans l'onglet <a to="/docs/intro" title="Lien vers les cours">docs</a>
      </>
    ),
  },
  {
    title: 'Déployé avec Github et Travis CI',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Grâce au framework <a href="https://docusaurus.io/" target='_blank' title="Lien vers la documentation de Docusaurus">Docusaurus</a>, DevNotes permet une mise à jour régulière et itérative en utilisant l'intégration et le déploiement continue. A chaques modifications approuvées et mergées, le site se met automatiquement à jour.
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
