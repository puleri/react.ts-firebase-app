import { useState, FC } from 'react'
import './Hello.css';

interface MouseEvent<T = Element> {
    currentTarget: any;
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: string): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}

export interface DragState {
    // defining state
    diffX: number
    diffY: number
    dragging: boolean
    // ? makes it optional
    styles: object
}


const Hello:FC = () => {

  const [state, setState] = useState<DragState>({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {}
  })

  const dragStart = (e: MouseEvent<HTMLButtonElement>) => {
    setState({
      ...state,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true
    })
  }

  const dragEnd = (e: any) => {
    setState({
      ...state,
      dragging: false
    })
  }

  const dragging = (e: { screenX: number; screenY: number; }) => {
    if (state.dragging) {
      var left = e.screenX - state.diffX;
      var top = e.screenY - state.diffY;

      setState({
        ...state,
        styles: {
          left: left,
          top: top
        }
      })
    }
  }

  return (
    <div className="hello-world-container">
      <div onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd} style={state.styles} className="hello-world-box">
        <h1 id="hello-world">Hello world</h1>
      </div>
    </div>
  )
}

export default Hello;
