require ( './helpers.js' );

describe("index.html", () => {
  describe("after index.js is processed", () => {
    
    // Test 1: Ensure <main> with id 'main' is removed
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'main'").to.not.exist;
    });

    // Test 2: Ensure 'newHeader' points to an <h1> element
    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(
        newHeader.nodeName,
        "Make sure you create an <h1> and assign it to the 'newHeader' variable"
      ).eql("H1"); // Check if the nodeName is "H1"
    });

    // Test 3: Ensure 'newHeader' has id 'victory'
    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      expect(newHeader.id, "Make sure the id of your <h1> is set to 'victory'").to.eql("victory"); // Correct check for id
    });

    // Test 4: Ensure 'newHeader' contains the text "Tina-Manga is the champion"
    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"Tina-Manga is the champion\" (with your name in place of YOUR-NAME) inside it", () => {
      expect(newHeader.innerText, "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it")
        .to.include("is the champion"); // Check that the text includes "is the champion"
    });

  });
});