import React from 'react';
import './App.css';
import { Button } from '@mantine/core';
import { ButtonWidget } from './widgets/ButtonUI/button';

function App() {








  const [components, set] = React.useState<React.FC[]>()


  const addButtnComponent = () => {
    // 
    const name = "Button"



    const newButton = new ButtonWidget(name)

    const componentUI = newButton.renderView()

    set(prev => {
      const copy = prev ? [...prev] : []
      copy.push(componentUI)
      return copy
    })
  }


  return (
    <div className="App">

      {
        components?.map((Component, index) => {
          return <Component key={index} />
        })
      }
      <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
        <Button variant="filled" color="red" onClick={addButtnComponent}>Button</Button>
      </div>
    </div>
  );
}

export default App;


