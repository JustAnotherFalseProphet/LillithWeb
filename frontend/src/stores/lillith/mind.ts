class Mind {
  public concepts: Concept[];
  constructor (/*maybe add path based on unlocked modules*/){
    var path = process.cwd() + "\\Mind\\" //load the initial mind
  }

  associateConceptArray(conceptArray : Concept[]){
    var primaryIndex = 0;
    conceptArray.forEach(primaryConcept => {
      var associatedIndex = 0;
      conceptArray.forEach(associatedConcept => {
        if (associatedIndex != primaryIndex){
          primaryConcept.associate(associatedConcept, associatedIndex - primaryIndex, primaryIndex);
        }
        associatedIndex++;
      });
      primaryIndex++;
    });
  }

  addSentence(sentence: string) {
      //break the sentence into concepts
      var rawConcepts = sentence.split(' ');
      var primaryIndex = 0;
      rawConcepts.forEach(existingConcept => {
          this.concepts.push(new Concept(existingConcept))
      });
      this.associateConceptArray(this.concepts);
  }
}


exports = Mind;