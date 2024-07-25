import App from './App';

describe('<App />', () => {
  it('should render Admin with a Resource', () => {
    cy.mount(<App />);
  })
})