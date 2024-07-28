import { Admin, Resource } from "react-admin";
import { mount } from "cypress/react";
import PossessionList from "../admin/possession/ListPossession";
import dataProvider from "../admin/dataProvider";
import PossessionEdit from "../admin/possession/EditPossession";

describe("<PossessionCreate/>", () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={dataProvider}>
        <Resource
          name="possesions"
          list={PossessionList}
          edit={PossessionEdit}
        />
      </Admin>
    );
  });
  it("should render the edit form", () => {
    cy.get("form").should("exist");
  });
  it("should contain required fields", () => {
    cy.get('input[name="nom_possession"]').should("exist");
    cy.get('input[name="Devise.nom"]').should("exist");
    cy.get('input[name="t"]').should("exist");
    cy.get('input[name="valeur_comptable"]').should("exist");
  });
  it("should save the form with valid inputs", () => {
    cy.get('input[name="nom_passession"]').type("Updated Possession");
    cy.get('input[name="Devise.nom"]').type("Updated Owner Name");
    cy.get('input[name="t"]').type("2024-07-25");
    cy.get('input[name="valeur_comptable"]').type("2000");
    cy.get('button[type="submit"]').click();
  });
});
