import React, { Component } from "react";
import Channels from "./Groups/Groups";
import DirectMessages from "./DirectMessages/DirectMessages";
import "./SidePanel.scss";
class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="side-panel">
        <div className="search">
          <input
            name="searchTerm"
            placeholder="Search Messages..."
            style={{ fontSize: "10px" }}
          />
        </div>
        <Channels {...{ currentUser }} />
        <DirectMessages {...{ currentUser }} />
      </div>
    );
  }
}

export default SidePanel;
