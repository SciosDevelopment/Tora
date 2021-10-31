import Dropdown from "."

const GitDropdown = () => {
    const testfunc = ()=> console.log("Hello")

    const GitDrop = Array(
        {title : "Github Login", shortcut : null, onAction : testfunc},
        {title : "Git Command", shortcut : null, onAction : testfunc},
        {title : "op3", shortcut : null, onAction : testfunc},
        {title : "op4", shortcut : null, onAction : testfunc})

    return <Dropdown title="Git" data={GitDrop}/> // render 
}

export default GitDropdown