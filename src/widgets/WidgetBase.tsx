// WidgetBase.tsx
import React from 'react';

export interface IWidgetProps {
    id: string;
    // Additional common properties for widgets
}

export abstract class WidgetBase<P extends IWidgetProps> extends React.Component<P> {
    abstract renderWidget(): JSX.Element;

    render() {
        return <>{this.renderWidget()}</>;
    }
}
