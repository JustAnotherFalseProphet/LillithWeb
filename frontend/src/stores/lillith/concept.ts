class Concept {
  public name : string;
  constructor(name : string){
    this.name = name;
  }

  private id: number;
  public energy: number;
  public gravity: number;
  public associations: Association[]; 
  
  associate(concept:Concept, offset, index ){
    this.associations.push(new Association(this, offset, 0, index, 1, concept))  
  }
}

exports = Concept;