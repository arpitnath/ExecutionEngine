// WidgetFactory.tsx
import React from 'react';
import { SampleWidget } from './widgets/SampleWidget';
import { ButtonWidget } from './widgets/Button'

export class WidgetFactory {
    static createWidget(type: string, props: any): JSX.Element | null {
        switch (type) {
            case 'SampleWidget':
                return <SampleWidget {...props} />;
            case 'ButtonWidget':
                return <ButtonWidget {...props} />;
            // Add cases for other widgets here
            default:
                console.warn(`No widget found for type: ${type}`);
                return null;
        }
    }
}
