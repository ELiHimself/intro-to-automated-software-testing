describe("empty spec", () => {
  it("makes sure the math robot mounts DOM", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.contains("Hello i am a math robot!");
  });

  it("checks if math robot can answer a sum question", () => {
    cy.get("#number-one").type(5);
    cy.get("#number-two").type(3);
    cy.get("#submit").click();
    cy.contains("5 plus 3 equals 13!");
  });
});
