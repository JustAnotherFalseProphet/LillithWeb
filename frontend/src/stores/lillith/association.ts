class Association{
  public offset: number;
  public divergence: number;
  //public int OrderState { get; set; } - will look into punctuation later
  //position of the parent concept within the sentence.
  public primaryConceptIndex :number;
  public strength: number;
  public primaryConcept: Concept;
  public associatedConcept: Concept;

  constructor (primaryConcept: Concept, offset: number, divergence: number, primaryConceptIndex: number, strength: number, associatedConcept: Concept){
    this.primaryConcept = primaryConcept;
    this.offset = offset;
    this.divergence = divergence;
    this.primaryConceptIndex = primaryConceptIndex;
    this.strength = strength;
    this.associatedConcept = associatedConcept;
  }
}

exports = Association;