
import React from 'react'

class Footer extends React.Component {
  render() {
    console.log("Footer");
    return (<footer>
      <p>Author: Hege Refsnes</p>
      <p>
        <a href="mailto:hege@example.com">hege@example.com</a>
      </p>
    </footer>);
  }
}

export default Footer;
