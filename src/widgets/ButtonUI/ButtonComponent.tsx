import React from 'react'
import Moveable from "react-moveable";
import { Button } from '@mantine/core';

const ButtonComponent: React.FC<{ componentName: string, callBack: () => void }> = ({ componentName, callBack }) => {

    const targetRef = React.useRef<HTMLDivElement>(null);

    const defaultDimentions = {
        width: "100px",
        height: "100px",
    }

    React.useEffect(() => {
        callBack()

        return () => {
            console.log('ButtonComponent unmounted');
        }
    }, [])


    return (
        <div
            style={{
                height: defaultDimentions.height,
                width: defaultDimentions.width,
            }}>
            <Button className='target' ref={targetRef as any} variant='filled'>{componentName}</Button>
            <Moveable
                target={targetRef}
                draggable={true}
                // throttleDrag={1}
                // edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                onDrag={e => {
                    e.target.style.transform = e.transform;
                }}
                onDragEnd={(e) => {
                    console.log('onDragEnd', e);

                }}
            />
        </div>
    )
}


export default ButtonComponent