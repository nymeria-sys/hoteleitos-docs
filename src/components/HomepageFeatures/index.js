import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Equipe Integrada',
    Svg: require('@site/static/img/capa/capa_03.png').default,
    description: (
      <>
        Desencadeie o processo de liberação através do seu celular, realizando a higienização e manutenção de forma fácil e rápida.
      </>
    ),
  },
  {
    title: 'Indicadores',
    Svg: require('@site/static/img/capa/capa_02.png').default,
    description: (
      <>
        Otimize sua experiência ao gerar indicadores precisos de uso, manutenção e higienização, tudo através de um único dispositivo: o seu celular.
      </>
    ),
  },
  {
    title: 'App',
    Svg: require('@site/static/img/capa/capa_01.png').default,
    description: (
      <>
       Experimente a excelência da gestão da sua hotelaria hospitalar com total tecnologia e segurança, através do nosso aplicativo exclusivo.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={Svg} className={styles.featureSvg} role="img" />
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
