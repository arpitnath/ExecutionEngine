import React from 'react'; // Import the React library
import ButtonComponent from "./ButtonComponent";

export class ButtonWidget {

    name: string = 'ButtonWidget'; // Name of the widget

    constructor (name: string) {
        console.log('ButtonWidget initialised', name);
        this.name = name;
    }


    comoponentMounted() {
        console.log('ButtonWidget mounted');
    }


    // render method which return JSX
    renderView(): React.FC {
        console.log('Button renderView called');

        return () => {
            return ButtonComponent({ componentName: this.name, callBack: this.comoponentMounted });
        }
    }
}