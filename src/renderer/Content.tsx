import React from 'react'
import icon from '../../assets/icon.svg';

declare global {
  interface Window {
    electron: {
      notificationApi: {
        sendNotification: (key: string) => any;

      };
    };
  }
}

const Content = () => {

  const callAPI = () => {
    console.log("api called");
  }

  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <div className="Hello">

        <button
          onClick={() => { window.electron.notificationApi.sendNotification("this is the msg") }}
        >Click
        </button>
        <button
          onClick={() => { callAPI() }}
        >Click 1
        </button>
      </div>
    </div>
  )
}

export default Content;
