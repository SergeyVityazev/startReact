import React from 'react'

type dataProps = {
  myname: string,
  old: number,
}

class AboutMe extends React.Component<dataProps> {
  render() {
    return (
      <p>
        Hello! I'm {this.props.myname} and I'm {this.props.old} years old
      </p>
    );
  }
}

export default AboutMe;
