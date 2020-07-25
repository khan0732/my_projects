import React from 'react';
import ReactDOM from 'react-dom';


class Title extends React.Component {
  render() {
    return (<h1 className="h2">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {
    return (
      <p className="lead">
      {this.props.text}
      </p>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="container text-center">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React + Bootstrap" text="Never attribute to malice what can be adequately explained by stupidity."></Main>,
  document.getElementById('react-app')
);
