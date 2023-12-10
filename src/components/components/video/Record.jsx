import React, { useEffect, useRef } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";


function Record({setUrl}) {
      const onRecordStop = (blobURL, blob) => {
        console.log({ blob });
        var fileOfBlob = new File([blob], `Recorded-${Math.random() * 10}-version`);
        console.log({ fileOfBlob });
        //startRecording();
      };

      const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        clearBlobUrl,
        previewStream
        
      } = useReactMediaRecorder({
        onStop: onRecordStop,
        video: true,
        askPermissionOnMount: true,
        blobOptions: { type: "video/webm" },
        mediaStreamConstraints: { audio: true, video: true }
      });

      function LiveStreamPreview({ stream }) {
        let videoPreviewRef = useRef();

        if (videoPreviewRef.current && stream) {
            videoPreviewRef.current.srcObject = stream;
          }
      
        useEffect(() => {
          if (videoPreviewRef.current && stream) {
            videoPreviewRef.current.srcObject = stream;
          }
        }, [stream]);
      
        if (!stream) {
          console.log("No stream available");
          return null;
        }
      
        return <video ref={videoPreviewRef} width={520} height={480} autoPlay />;
    }
    const stopCurrentRecording = () => {
        stopRecording();
        setUrl(i => mediaBlobUrl)
      };

    // const startNewRecording = () => {
    //     startRecording();
    //     clearBlobUrl()
    // }
      
  return (
    <div className='flex flex-col items-center w-[30vw] h-96'>
        <h5 className='font-bold text-green-900'>Status: {status}</h5>
        <div className={`flex gap-4`}>
            <button className={`font-bold ${status === 'recording' ? 'text-green-800' : 'text-yellow-800'} `} onClick={startRecording} disabled={status === "recording"}>Start</button>
            <button className='font-bold'  onClick={stopCurrentRecording} disabled={status !== "recording"}>Stop</button>
        </div>
       <div className={'flex gap-2'}>
            <div className={`flex-col w-96 h-96  ${status === 'stopped' ? 'hidden' : 'flex'}`}>    
                <h3 className='font-bold italic'>Record:</h3>
                {/* <div className='flex gap-2'> */}
                    {/* <button className={`font-bold ${status === 'recording' ? 'text-green-800' : 'text-yellow-800'} `} onClick={startRecording} disabled={status === "recording"}>Start</button>
                    <button className='font-bold'  onClick={stopRecording} disabled={status !== "recording"}>Stop</button> */}
                {/* </div> */}
                <div className='w-full h-full'>{previewStream && <LiveStreamPreview stream={previewStream} />}</div>
            </div>
            <div className={`flex-col w-96 h-96  ${status === 'stopped' ? 'flex' : 'hidden'}`}>
                <h3 className='font-bold italic'>Preview:</h3>
                <div className='w-full h-full'> {mediaBlobUrl && <video src={mediaBlobUrl} controls loop />}</div>
            </div>
       </div>
    </div>
  )
}

export default Record