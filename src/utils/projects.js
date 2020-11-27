import HHLogo from '../components/PortfolioCard/assets/Helping-Hand-Logo.png';
import WALogo from '../components/PortfolioCard/assets/WA-icon.png';
import Fitness from '../components/PortfolioCard/assets/fitness.png';
import Burgers from '../components/PortfolioCard/assets/burger-portfolio.png';
import Employee from '../components/PortfolioCard/assets/employee-tracker.png';
import TeamProfiles from '../components/PortfolioCard/assets/Team-Profiles.png';
import Planner from '../components/PortfolioCard/assets/planner.png';
import Weather from '../components/PortfolioCard/assets/cloud-square.png';


const projects = [
    {
        name: "Helping Hand",
        description: "The idea behind this app is to connect people experiencing homelessness with immediate food, shelter, healthcare, and daily resources. Organizations are posted to a SQL database and rendered with React. There are several ideas for future development.",
        demo: "https://project3-helping-hand.herokuapp.com/",
        repo: "https://github.com/jnaegeli12/project3-helping-hand",
        img: HHLogo
    },
    {
        name: "Voter Dashboard",
        description: "Washington state is only one of five states that runs its elections by mail only. Upon the input of an address, this application provides voters with ballot drop-box locations, candidates on the ballot, and news headlines related to the election.",
        demo: "https://jnaegeli12.github.io/project1-voter-dashboard/",
        repo: "https://github.com/jnaegeli12/project1-voter-dashboard",
        img: WALogo
    },
    {
        name: "Fitness Tracker",
        description: "This application uses MongoDB and mongoose schemas to create and track resistence and cardio workouts. The front end was provided and so working on this project was also good practice for working with someone else's code.",
        demo: "https://fitness-tracker-naegeli17.herokuapp.com/",
        repo: "https://github.com/jnaegeli12/week17-fitness",
        img: Fitness
    },
    {
        name: "Burgers",
        description: "Burger enthusiasts can keep track of all the different burgers they have eaten and want to eat. This MVC app creates, reads, and updates items, sorting them into lists and displaying them using Express Handlebars. Deployed with Heroku.",
        demo: "https://week-13-burgers.herokuapp.com/",
        repo: "https://github.com/jnaegeli12/13-burger-database",
        img: Burgers
    },
    {
        name: "Employee Tracker",
        description: "This application allows a team manager to quickly and easily view, add, and update organizational roles, departments, and employees from the command line, using SQL databases, NodeJS, and console tables. Design based on The Office.",
        demo: "https://drive.google.com/file/d/1HUfJn14mLWkfrkMQ5WqfCUe6u54qvK0B/view",
        repo: "https://github.com/jnaegeli12/week12-employee-templates",
        img: Employee
    },
    {
        name: "Team Profiles",
        description: "This application allows a team manager to quickly and easily compile basic information of team members onto an html page. Using the NPM Inquirer packsge, it collects unique information for interns, engineers, and managers.",
        demo: "https://drive.google.com/file/d/1jQIzHiW7PJqza0B8lw9d_irB79y4x0cI/view",
        repo: "https://github.com/jnaegeli12/week10-team-profiles",
        img: TeamProfiles
    },
    {
        name: "Planner",
        description: "This is a simple application to help people currently working from home keep track of daily work tasks and appointments. Hourly entries are saved in local storage, and time elapsed is logged with color-coding using momentjs.",
        demo: "https://jnaegeli12.github.io/week-5-work-planner/",
        repo: "https://github.com/jnaegeli12/week-5-work-planner",
        img: Planner
    }
]

export default projects;