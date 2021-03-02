import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'; 


class App extends Component {
  constructor() {
    super();
    
    this.state ={
      text: '',
      recipe: []
    }
  }

  submit() {
    const { recipe, text } = this.state;

    recipe.push( { text });

    this.setState({ recipe });
  }


  
  render() {
    return(
      <div>
      <h2>Recipe Box</h2>
      <Form inline>
        <FormControl onChange={event => this.setState({ text: event.target.value })}/>
        {''}
        <Button onClick={() => console.log(this.state)}>Submit</Button>
      </Form>
        
        <Button bsStyle="primary" bsSize="large" active>I want to sell my tickets</Button>
      {
        this.state.recipe.map(recipe => {
          return (
            <div>{recipe.text}</div>
          )
        })
      } 
      </div>
    )
  }
}

export default App;

