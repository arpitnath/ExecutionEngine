// App.tsx or any other component where widgets are managed
import React, { useEffect, useState } from 'react';
import { WidgetFactory } from './WidgetFactory';
import { CoreExecutionEngine } from './CoreExecutionEngine';

const App: React.FC = () => {
    const [widgets, setWidgets] = useState<JSX.Element[]>([]);

    const addWidget = (type: string, props: any) => {
        CoreExecutionEngine.enqueueAction(() => {
            const newWidget = WidgetFactory.createWidget(type, props);
            if (newWidget) {
                setWidgets(currentWidgets => [...currentWidgets, newWidget]);
            }
        });
    };


    useEffect(() => {
        console.log('--Editor re-render--');

    },)


    // Example usage: Add a SampleWidget when the button is clicked
    return (
        <div>
            <button onClick={() => addWidget('ButtonWidget', { id: 'componentId1', name: 'Button' })}>
                Add Sample Widget
            </button>
            {widgets}
        </div>
    );
}

export default App;
