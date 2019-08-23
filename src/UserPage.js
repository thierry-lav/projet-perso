import React from "react";
import { Card, Switch, Alignment, Elevation } from "@blueprintjs/core";
import User from "./User";
import { useOvermind } from "./overmind";

function UserPage() {
  const { state, actions } = useOvermind();

  return (
    <div>
      <Card elevation={Elevation.THREE}>
        <h1>
          <span>Filters</span>
        </h1>
        <p>
          <Switch
            alignIndicator={Alignment.LEFT}
            checked={state.filters.experience}
            label="Expérience"
            onChange={() => actions.toggleExp()}
          />
          <Switch
            alignIndicator={Alignment.LEFT}
            checked={state.filters.loisir}
            label="Loisirs"
            onChange={() => actions.toggleLoisir()}
          />
        </p>
      </Card>
      <br />
      <div className="cards">
        {state.filteredUsers.map(user => {
          return <User user={user} />;
        })}
      </div>
      <div className="bottom">{state.filteredUsers.length} utilisateurs</div>
    </div>
  );
}

export default UserPage;
