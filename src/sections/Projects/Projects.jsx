import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
import profpng from '../../assets/profpng.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://weather-app-2-tufo.onrender.com"
          h3="City Weather"
          p="Weather App"
        />
        <ProjectCard
          src={profpng}
          link="https://profile-landingpage.onrender.com"
          h3="Profile"
          p=" Profile Landingpage"
        />
{/*         <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
