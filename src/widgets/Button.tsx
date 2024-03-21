
import React, { useCallback } from 'react';
import { IWidgetProps, WidgetBase } from './WidgetBase';
import ButtonComponent from './ButtonUI/ButtonComponent';

interface ButtonWidgetProps extends IWidgetProps {
    // Extend with specific props for the SampleWidget
    name: string;
}

// export class ButtonWidget extends WidgetBase<ButtonWidgetProps> {

//     constructor (props: ButtonWidgetProps) {
//         super(props);
//         console.log('ButtonWidget initialised', props.name);
//     }

//     comoponentMounted() {
//         console.log('ButtonWidget mounted');
//     }

//     renderWidget() {
//         return <ButtonComponent
//             componentName={this.props.name}
//             callBack={this.comoponentMounted}
//         />
//     }
// }



export class ButtonWidget extends WidgetBase<ButtonWidgetProps> {
    constructor (props: ButtonWidgetProps) {
        super(props);
        console.log('ButtonWidget initialised', props.name);
        this.componentMounted = this.componentMounted.bind(this);
    }

    componentMounted() {
        console.log('ButtonWidget mounted');
    }

    renderWidget() {
        console.log('--rendering ButtonWidget--');

        return <ButtonComponent
            componentName={this.props.name}
            callBack={this.componentMounted}
        />;
    }
}
