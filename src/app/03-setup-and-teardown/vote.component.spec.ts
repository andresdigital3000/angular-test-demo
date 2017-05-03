import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  //Arrange
  let component :  VoteComponent;
  beforeEach(()=> {
    component = new VoteComponent();
  });

  it('Debe incrementar los votos', () => {

    //Act
    component.upVote()

    //Assertion
    expect(component.totalVotes).toBe(1);
  });

 it('Debe decrementar los votos', () => {

    //Act
    component.downVote()

    //Assertion
    expect(component.totalVotes).toBe(-1);
  });
});