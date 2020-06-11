import { Route } from "react-router-dom";
import React, { Component } from "react";
import Tasks from '../modules/Tasks/Tasks'
import News from '../modules/News/News'
import Messages from '../modules/Messages/Messages'

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/news" render={props => {
            return <News {...props} />
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <Messages />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return <Tasks />
            // Remove null and return the component which will show the user's tasks
          }}
        />
        
      </React.Fragment>
    );
  }
}
