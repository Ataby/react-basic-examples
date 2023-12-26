// Class components generally use in old projects.
// Should use React.Component 
// Must contain render() method.
// Class components are relatively slow from function components.
// You need to use this keyword.
// CLASS COMPONENT == STATEFUL COMPONENT
//ORNEK:
    class welcome extends React.Component{
        render(){
            return <h1> Hello Simon!</h1>;
        }
    }

// Props
// Passed down to component from parent component and represents data for the component
// Accessed via this.props in class components
//ORNEK:
    class Dog extends React.Component{
        render(){
            return <h1>My dog is a {this.props.breed}!</h1>;
        }
    }


//------------------------------------
//---------FUNCTION COMPONENTS-------- 
//------------------------------------

// Functional component just javascript function and simple
// Functional components generally used in new projects.
// Functional components are faster than class components.
// Can be used lifecycle methods and states in functional component (via hooks) 
//FUNCTIONAL COMPONENT == STATELESS COMPONENT (IMPORT EDEREK STATE'LER KULLANILIR.)
//ORNEK:
    function welcome (){
        return <h1>Hello, Alex!</h1>;
    }

// In functional components
//  You should put prop in arguments of function.
//  You can get props destruct the props({breed}).
//ORNEK:
    const Dog = function(props){
        return <h1>My dog is a {props.breed}!</h1>
    }
    const myComp = <Dog breed="Poodle"/>;
