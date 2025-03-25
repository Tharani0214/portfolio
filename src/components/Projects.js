import React from 'react';
import './Projects.css';
import { FaCode,  } from 'react-icons/fa';

// Import project images (Ensure these images are in 'src/assets/projects/')
import SudokuSolverImg from '../assests/images/sudoku.avif';
import ExpenseTrackerImg from '../assests/images/expense.jpg';
import TodoImg from '../assests/images/todo.jpg';
import WeatherImg from '../assests/images/weather.jpg';
import IPLAnalysisImg from '../assests/images/ipl.jpg';
import SalesAnalysisImg from '../assests/images/sales.jpg';


// Project Data (Only JavaScript Projects)
const projects = [
  { title: "Sudoku Solver", repo: "sudoku-solver", img: SudokuSolverImg, lang: "JavaScript" },
  { title: "Expense Tracker", repo: "expense-tracker", img: ExpenseTrackerImg, lang: "JavaScript" },
  { title: "Todo List", repo: "todo", img: TodoImg, lang: "JavaScript" },
  { title: "Weather App", repo: "weather", img: WeatherImg, lang: "JavaScript" },
  { title: "IPL Data Analysis", repo: "IPL-Data-Analysis", img: IPLAnalysisImg, lang: "Python" },
  { title: "Sales Analysis", repo: "Sales-Analysis", img: SalesAnalysisImg, lang: "Python" },
  
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="profile-header">
      <h2>Projects</h2>

    </div>

    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={project.title} className="project-image" />
          <div className="project-card-content">
            <h4>{project.title}</h4>
            <p><FaCode /> {project.lang}</p>
            <a 
              href={`https://github.com/Tharani0214/${project.repo}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
             
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
