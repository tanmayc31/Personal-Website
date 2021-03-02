import ToDoListImg from "./images/ToDo-List.png";
import GoogleKeepClone from "./images/Google-keep.png";
const Img1 = "https://picsum.photos/300";

//const ToDoListProject = () => {
//    window.location.href="https://tanmayc31.github.io/ToDoList-app/";
//};
//const googleKeepCloneProject = () => {
//    window.location.href="https://tanmayc31.github.io/google-keep-app-clone/";
//};

const ProjectsData = [
    {
        imgsrc: ToDoListImg, 
        title: "To-Do List",
        projectlink: () => window.open('https://tanmayc31.github.io/ToDoList-app/',"_blank"),
    
    },
    {
        imgsrc: GoogleKeepClone,
        title: "Google Keep Clone",
        projectlink: () => window.open('https://tanmayc31.github.io/google-keep-app-clone/',"_blank"),

    },
    {
        imgsrc: Img1,
        title: "Upcoming Project",
       
    },
    /*{
        imgsrc: Img1,
        title: "Random Pic 4",
    },
    {
        imgsrc: Img1,
        title: "Random Pic 5",
    },
    {
        imgsrc: Img1,
        title: "Random Pic 6    ",
    },*/


];

export default ProjectsData;