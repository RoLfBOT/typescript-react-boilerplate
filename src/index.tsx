import * as React from 'react';
import * as ReactDOM from 'react-dom';
class Welcome extends React.Component {
  render() {
    return (
      <>      
        <h1>Hello World from React boilerplate</h1>
        <h3>Typescript boilerplate</h3>
        <h5>Hot Module Replacement</h5>
      </>
    );
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
