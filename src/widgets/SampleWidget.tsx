// SampleWidget.tsx
import React from 'react';
import { IWidgetProps, WidgetBase } from './WidgetBase';

interface SampleWidgetProps extends IWidgetProps {
  // Extend with specific props for the SampleWidget
  name: string;
}

export class SampleWidget extends WidgetBase<SampleWidgetProps> {
  renderWidget() {
    return <div>{this.props.name}</div>;
  }
}
