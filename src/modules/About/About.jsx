import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h3>
        Aceasta este o aplicatie de exersare a cunostiintelor pentru examenele
        de Barou si INM.
      </h3>
      <p className={styles.text}>
        Toate modelele sunt preluate de pe site-ul Institutului Național al
        Magistraturii, respectiv, Insitutul Național pentru Pregătirea și
        Perfecționarea Avocaților.
      </p>
      <h4>Links:</h4>
      <ul className={styles.list}>
        <li>
          <a href="https://inm-lex.ro/subiecte-admitere-la-inm/">Modele INM</a>
        </li>
        <li>
          <a href="https://www.inppa.ro/publicam-subiectele-si-baremele-la-proba-scrisa-tip-grila-sustinuta-in-data-de-07-aprilie-2024-la-examenul-de-primire-in-profesia-de-avocat-pentru-obtinerea-titlului-de-avocat-stagiar-si-pe/">
            Barou aprilie 2024
          </a>
        </li>
        <li>
          <a href="https://www.inppa.ro/publicam-subiectele-si-baremele-la-proba-scrisa-tip-grila-sustinuta-in-data-de-02-aprilie-2023-la-examenul-de-primire-in-profesia-de-avocat-pentru-obtinerea-titlului-de-avocat-stagiar-si-pe/">
            Barou aprilie 2023
          </a>
        </li>
        <li>
          <a href="https://www.inppa.ro/publicam-subiectele-si-baremele-la-proba-scrisa-tip-grila-sustinuta-in-data-de-18-septembrie-2022-la-examenul-de-primire-in-profesia-de-avocat-pentru-obtinerea-titlului-de-avocat-stagiar-si/">
            Barou septembrie 2022
          </a>
        </li>
      </ul>
    </div>
  );
}
