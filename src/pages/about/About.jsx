import ProfileCard from "../../components/blocks/profileCard/ProfileCard";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("public/fakeapi/about.json")
      .then((response) => {
        return response.json();
      })
      .then((aboutData) => {
        setData(aboutData);
      });
  }, []);

  return (
    <div className={styles.about}>
      <ProfileCard name={data.name} description={data.description} />
      <div className={styles.info_list}>
        <div>
          <h3>About me</h3>
          <p>
            The last years dedicated to logistics and office assistant going
            through several learning processes in different areas. I am looking
            for opportunities for new personal and professional development that
            can bring new perspectives for the future and growth. I recently
            finished the intensive course Full Stack Developer, thus boosting my
            knowledge for opportunities in the area of ​​programming.
          </p>
        </div>
        <div>
          <h3>Experience</h3>
          <span>2012 - 2012</span>
          <h4>Maintenance Technician</h4>
          <span>Aval, Comércio e Representações, LDA, Riba D’Ave</span>
          <p>
            Curricular internship developed within the scope of the renewable
            energy course, lasting 5 months. Final grade of 18 points.
          </p>
          <span>2013 - 2016</span>
          <h4>Office Assistant</h4>
          <span>Carpintaria 77, Santo Tirso</span>
          <p>
            Realization of budgets, organization of purchases and payments,
            weekly planning of tasks to be carried out.
          </p>
          <span>2017 - Presente</span>
          <h4>Warehouse Employee</h4>
          <span>Jactigas Comércio Têxteis, LDA, Santo Tirso</span>
          <p>
            Develop all tasks related to logistics, databases, documentation on
            orders and exports.
          </p>
        </div>
        <div>
          <h3>Education</h3>
          <span>2008 - 2009</span>
          <h4>Professional Training – Microsoft Office</h4>
          <span>Entre Turmas, Santo-Tirso</span>
          <p>
            Microsoft Office is a powerful service that helps you develop your
            best ideas and get things done. Thus learning the main programs
            (Word, Excel, PowerPoint, Outlook). Final grade of 19 values.
          </p>
          <span>2004 - 2007</span>
          <h4>Professional Course – Renewable Energies</h4>
          <span>Escola D. Afonso Henriques, Vila das Aves</span>
          <p>Final grade of 14 values.</p>
          <span>2023 - 2023</span>
          <h4>Front-End Developer</h4>
          <span>EDIT. - Disruptive Digital Education, Porto</span>
          <p>
            This Full Stack Development course compiles the know-how, tools and
            techniques necessary to develop a mindset that will allow you to
            work freely between back-end & front-end, following good programming
            practices.
          </p>
        </div>
        <div>
          <h4>Skills</h4>
          <h5>
            <span>*</span> Html / Css
          </h5>
          <h5>
            <span>*</span> Javascript
          </h5>
          <h5>
            <span>*</span> React
          </h5>
          <h5>
            <span>*</span> Figma
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
