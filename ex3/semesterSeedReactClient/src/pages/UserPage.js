import React, { Component } from 'react'
import { observer } from "mobx-react";
import FootBallStore from '../stores/FootBallStore';

const UserPage = observer(
  class UserPage extends Component {
    componentWillMount() {
      /*
     This will fetch data each time you navigate to this route
     Move to constructor, if only required once, or add "logic" to determine when data should be "refetched"
     */
      FootBallStore.getData();
    }

    render() {
      console.log("Hej " + FootBallStore.messageFromServer[0]);
      return (
        <div>
          <ul>
            <li>{FootBallStore.messageFromServer[0]}</li>
            <li>Hej2</li>
        </ul>


          <h4 style={{ color: "red" }}>{FootBallStore.errorMessage}</h4>
        </div>
      )
    }

  }
)
export default UserPage;
