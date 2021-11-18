import { useRef, useState, FC } from 'react'
import ReactToolTip from 'react-tooltip';
import './Copy.css';

const Copy:FC = () => {

  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');

  const textAreaRef:any = useRef(null)

  const copyToClip = () => {
    // console.log('test')
    // console.log(textAreaRef.current.outerText)
    let code =  textAreaRef.current.outerText
     navigator.clipboard.writeText(code)
     setCopySuccess('Copied!')
     setTimeout(() => setCopySuccess('Copy to clipboard'), 3000)
  }

  return (
    <>
      <div className="copy-container">
        <ReactToolTip
        id="copy"
        place={"right"}
        type={'dark'}
        effect={'solid'}
        multiline={true}
        >
        {copySuccess}
        </ReactToolTip>
        <h3>Code: <span data-tip data-for='copy' onClick={() => copyToClip()} ref={textAreaRef} id="code">4444</span></h3>
      </div>
    </>
  )
}

export default Copy
