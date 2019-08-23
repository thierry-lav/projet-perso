import React from "react";
import { useOvermind } from "./overmind";
import {
  FormGroup,
  InputGroup,
  Button,
  Card,
  Icon,
  Intent
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { Formik } from "formik";
import cuid from "cuid";

function AdminPage() {
  const { actions } = useOvermind();
  const [experiences, setExperiences] = React.useState([]);
  const [loisirs, setLoisirs] = React.useState([]);

  const [showExpForm, setShowExpForm] = React.useState(false);
  const [showLoisirForm, setShowLoisirForm] = React.useState(false);

  return (
    <Card>
      <Formik
        initialValues={{
          firstName: "thierry",
          lastName: "lav",
          age: 30,
          experiences: [],
          loisirs: []
        }}
        onSubmit={(values, { setSubmitting }) => {
          const newUser = {
            ...values,
            id: cuid(),
            experiences,
            loisirs
          };
          actions.addUser(newUser);
          setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleSubmit, submitForm }) => (
          <div>
            <h3>Informations personnelles</h3>
            <form onSubmit={handleSubmit}>
              <FormGroup label="Name" labelFor="text-input">
                <InputGroup
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup label="Last name" labelFor="text-input">
                <InputGroup
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup label="Age" labelFor="text-input">
                <InputGroup
                  type="numeric"
                  value={values.age}
                  name="age"
                  onChange={handleChange}
                />
              </FormGroup>
            </form>
            <div>
              <h3>Formations</h3>
              {experiences.map(exp => {
                return (
                  <div key={exp.id}>
                    <p>
                      En {exp.annee} j'ai travaillé chez {exp.entreprise} en
                      tant que {exp.poste}
                      <Icon
                        icon={IconNames.CROSS}
                        iconSize={Icon.SIZE_LARGE}
                        intent={Intent.DANGER}
                        onClick={() => {
                          setExperiences(
                            experiences.filter(item => {
                              return item.id !== exp.id;
                            })
                          );
                        }}
                      />
                    </p>
                  </div>
                );
              })}
            </div>
            {showExpForm ? (
              <Formik
                initialValues={{
                  annee: 2010,
                  entreprise: "Unknown",
                  poste: "Dev"
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const newExp = {
                    ...values,
                    id: cuid()
                  };

                  setExperiences(prev => [...prev, newExp]);
                  setShowExpForm(false);
                  setSubmitting(false);
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <FormGroup label="Année" labelFor="text-input">
                      <InputGroup
                        name="annee"
                        value={values.annee}
                        type="numeric"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup label="Entreprise" labelFor="text-input">
                      <InputGroup
                        name="entreprise"
                        value={values.entreprise}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup label="Poste" labelFor="text-input">
                      <InputGroup
                        name="poste"
                        value={values.poste}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      icon="cross"
                      type="submit"
                      text="Annuler"
                      minimal={true}
                      intent="danger"
                      onClick={() => setShowExpForm(false)}
                    />
                    <Button
                      type="submit"
                      icon="thumbs-up"
                      text="Valider l'expérience"
                      minimal={true}
                      intent="primary"
                    />
                  </form>
                )}
              </Formik>
            ) : (
              <Button
                icon="add"
                text="Ajouter une expérience"
                minimal={true}
                onClick={() => setShowExpForm(true)}
              />
            )}
            <br />
            <br />
            <div>
              <h3>Loisirs</h3>
              {loisirs.map(loisir => {
                return (
                  <div key={loisir.id}>
                    <p>
                      {loisir.name}
                      <Icon
                        icon={IconNames.CROSS}
                        iconSize={Icon.SIZE_LARGE}
                        intent={Intent.DANGER}
                        onClick={() => {
                          setLoisirs(
                            loisirs.filter(item => {
                              return item.id !== loisir.id;
                            })
                          );
                        }}
                      />
                    </p>
                  </div>
                );
              })}
            </div>
            {showLoisirForm ? (
              <Formik
                initialValues={{
                  name: "Voyages"
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const newLoisir = {
                    ...values,
                    id: cuid()
                  };
                  setLoisirs(prev => [...prev, newLoisir]);
                  setShowLoisirForm(false);
                  setSubmitting(false);
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <FormGroup label="Nom" labelFor="text-input">
                      <InputGroup
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <Button
                      icon="cross"
                      type="submit"
                      text="Annuler"
                      minimal={true}
                      intent="danger"
                      onClick={() => setShowLoisirForm(false)}
                    />
                    <Button
                      type="submit"
                      icon="thumbs-up"
                      text="Valider le loisir"
                      minimal={true}
                      intent="primary"
                    />
                  </form>
                )}
              </Formik>
            ) : (
              <Button
                icon="add"
                text="Ajouter un loisir"
                minimal={true}
                onClick={() => setShowLoisirForm(true)}
              />
            )}
            <br />
            <br />
            <Button
              icon="tick"
              type="button"
              text="Ajouter l'utilisateur"
              minimal={true}
              intent="primary"
              onClick={() => {
                submitForm();
              }}
            />
          </div>
        )}
      </Formik>
    </Card>
  );
}
export default AdminPage;
