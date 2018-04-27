// Higher order compnent (HOC) - a component that render another component
// Reuse code
// Render hijacking
// prop manipulation
// abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p> Thie info is: {props.info}</p>
    </div>
);


const ExpenseList = (props) =>(
    <div>
        <h1>Info</h1>
        <p> Thie info is: {props.info}</p>
    </div>
);

const Connect = (WrappedComponent) =>{
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props}/>
        </div>
    );
}


const ConnectedExpenseList = Connect(ExpenseList)
ReactDOM.render(<ConnectedExpenseList info={'info to you'}/>, document.getElementById('app'));



const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : <p>'Please Login to view the info'</p>}
            
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info='this is the detail'/>, document.getElementById('app'));


// ReactDOM.render(<AuthInfo isAuthenticated={false} info='this is the detail'/>, document.getElementById('app'));