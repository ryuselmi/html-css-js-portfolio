import styles from "./ProjectsStyles.module.css";
import numbersFloating from "../../assets/numbers-floating.png";
import ticBoard from "../../assets/tic-board.png";
import calcPicture from "../../assets/calc-picture.png";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={numbersFloating}
          link="https://github.com/ryuselmi/tictactoe"
          h3="Tic-Tac-Toe"
          p="Two-Player Game"
        />
        <ProjectCard
          src={ticBoard}
          link="https://github.com/ryuselmi/Number-Guessing-Game"
          h3="Number Guessing Game"
          p="Guess the number in less than 10 tries!"
        />
        <ProjectCard
          src={calcPicture}
          link="https://github.com/ryuselmi/calculatoryr"
          h3="Calculator"
          p="A working, functional calculator"
        />
      </div>
    </section>
  );
}

export default Project;
