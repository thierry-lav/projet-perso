import React from "react";
import { useOvermind } from "./overmind";
import { Card, Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

function UserDetailsPage({ match }) {
  const { state } = useOvermind();

  return (
    <div>
      {state.users
        .filter(user => {
          return user.id === match.params.userId;
        })
        .map(user => {
          return (
            <p>
              <Card>
                <h2>Informations</h2>
                {user.firstName} {user.lastName.toUpperCase()} ({user.age} ans)
                <h2>Expériences</h2>
                {user.experiences.length === 0
                  ? "Aucune"
                  : user.experiences.map(experience => {
                      return (
                        <p>
                          {experience.annee} : {experience.entreprise} -{" "}
                          {experience.poste}
                        </p>
                      );
                    })}
                <h2>Loisirs</h2>
                {user.loisirs.length === 0
                  ? "Aucun"
                  : user.loisirs.map(loisir => {
                      return <p>{loisir.name}</p>;
                    })}
                <br />
                <Link to="/users">
                  <Button
                    icon="chevron-left"
                    text="Back"
                    minimal={true}
                    intent={Intent.PRIMARY}
                  />
                </Link>
              </Card>
            </p>
          );
        })}
    </div>
  );
}

export default UserDetailsPage;
