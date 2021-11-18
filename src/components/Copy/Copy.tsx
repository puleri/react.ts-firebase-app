import { useRef, useState, FC } from 'react'
import ReactToolTip from 'react-tooltip';
import './Copy.css';

const Copy:FC = () => {

  const [copySuccess, setCopySuccess] = useState('Copy to clipboard');
  const [apiKey, setApiKey] = useState('xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx');


  const textAreaRef:any = useRef(null)

  const copyToClip = () => {
    // console.log('test')
    // console.log(textAreaRef.current.outerText)
    let code =  textAreaRef.current.outerText
     navigator.clipboard.writeText(code)
     setCopySuccess('Copied!')
     setTimeout(() => setCopySuccess('Copy to clipboard'), 3000)
  }

  function generateUUID()
{
	var d = new Date().getTime();

	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}

	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return setApiKey(uuid);
}

  return (
    <>
      <div className="copy-container">
        <button className="hover-underline-animation" id="api-gen" onClick={() => generateUUID()}>API Key Generator</button>
        <ReactToolTip
        id="copy"
        place={"top"}
        type={'dark'}
        effect={'solid'}
        multiline={true}
        >
        {copySuccess}
        </ReactToolTip>
        <h3>API Key: <span data-tip data-for='copy' onClick={() => copyToClip()} ref={textAreaRef} id="code">{apiKey}</span></h3>
        <br/>
      </div>
    </>
  )
}

export default Copy
