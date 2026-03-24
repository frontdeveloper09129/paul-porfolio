import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JAVSCRIPT from '../../assets/javascript.webp';
import REACT from '../../assets/react.webp';
import PYTHON from '../../assets/python.webp';
import JAVA from '../../assets/java.webp';
import C from '../../assets/c.png';
import GIT from '../../assets/git.png';
import GITHUB from '../../assets/github.png';
import QUIZGAME from '../../assets/quizGame.jpeg';
import CARDGAME from '../../assets/card-game.jpeg'

export const TechStack = [
    {
        tools: "langauge",
        title: "HTML",
        icon: <img className='tech-stack-image' src={HTML} />
    },
    {
        tools: "langauge",
        title: "CSS",
        icon: <img className='tech-stack-image' src={CSS} />
    },
    {
        tools: "langauge",
        title: "JAVASCRIPT",
        icon: <img className='tech-stack-image' src={JAVSCRIPT} />
    },
    {
        tools: "langauge",
        title: "REACT",
        icon: <img className='tech-stack-image' src={REACT} />
    },

    {
        tools: "langauge",
        title: "PYTHON",
        icon: <img className='tech-stack-image' src={PYTHON} />
    },

    {
        tools: "langauge",
        title: "JAVA",
        icon: <img className='tech-stack-image' src={JAVA} />
    },

    {

        tools: "langauge",
        title: "C",
        icon: <img className="tech-stack-image" src={C} />
    },

    {
        tools: "framework",
        title: "git",
        icon: <img className="tech-stack-image" src={GIT} />
    },

    {
        tools: "framework",
        title: "github",
        icon: <img className='tech-stack-image' src={GITHUB} />
    }
];


// project list
export const ProjectImage = [
    {   
        id: 1,
        typeProject: "game-project",
        title: "quiz-game",
        img: <img className='project-image' src={QUIZGAME}/>
    },
    {   
        id: 2,
        typeProject: "game-project",
        title: "card-game",
        img: <img className='project-image' src={CARDGAME}/>
    },
]