import React from "react";
import styles from "@/styles/components/homeComp.module.scss";

const HomeComp = ({ dict }) => {
  // JSON verisini destructure ederek kullanılabilir hale getirme
  const { home } = dict;
  const { title, overview, howToUse, keyFeatures, summary } = home;
 

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3>
        <u>{overview.title}</u>
      </h3>
      <p>{overview.description}</p>
      <h3>
        <u>{howToUse.title}</u>
      </h3>
      <ol>
        {Object.entries(howToUse).map(([stepKey, step]) => (
          <li key={stepKey}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
      <h3>
        <u>{keyFeatures.title}</u>
      </h3>
      <dl>
        {Object.entries(keyFeatures).map(([featureKey, feature]) => (
          <div key={featureKey}>
            <dt>{feature.title}</dt>
            <dd>{feature.description}</dd>
          </div>
        ))}
      </dl>
      <p>{summary}</p>
    </div>
  );
};

export default HomeComp;
