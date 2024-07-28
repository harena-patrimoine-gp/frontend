import possessionList from "../admin/possession/ListPossession";
import { mount } from "cypress/react";
import { Admin, Resource } from "react-admin";
import dataProvider from "../admin/dataProvider";
import PossessionCreate from "../admin/possession/CreatePossession";

describe("<possesionList/>",
  () => {
    beforeEach(() => {
      mount(
        <Admin dataProvider={dataProvider}>
          <Resource name="possesions" 
          list={possessionList} />
          create={PossessionCreate}
        </Admin>
      );
    });
    it("should render the list of possessions", () => {
      cy.get("table").should("exist");
    });
    it('should render the "Nom possession" column', () => {
      cy.get("th").contains("Nom possession").should("exist");
    });

    it('should render the "Devise" column', () => {
      cy.get("th").contains("Devise").should("exist");
    });

    it('should render the "Date" column', () => {
      cy.get("th").contains("Date").should("exist");
    });
    it('should render the "Valeur comptable" column', () => {
      cy.get("th").contains("Valeur comptable").should("exist");
    });
  });
