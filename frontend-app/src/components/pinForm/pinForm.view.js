import React, {useEffect, useState} from 'react';
import styles from './pinForm.module.css';
import {getToken} from "../../utils/localStorage.utils";

const PinForm = () => {
  const [note, setNote] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [boardId, setBoardId] = useState();

  const [boards, setBoards] = useState([]);

  const submitForm = () => {
    const url = 'http://192.168.1.119/api/pins';
    const body = {
      note,
      media_url: mediaUrl,
      board_id: boardId,
    };
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        'authorization': `Bearer ${getToken()}`
      }),
      mode: 'cors',
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then(response => {
          if (response.status === 201) {
            return response.json();
          }
          return Promise.reject(response.status);
        }
      )
      .then(payload => {
          console.log("saved");
        }
      )
      .catch(error => console.log(error));
  }

  useEffect(() => {
    const url = 'http://192.168.1.119/api/boards';

    const options = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
    };
    fetch(url, options)
      .then(response => {
          if (response.status >= 200 || response.status < 300) {
            return response.json();
          }
          return Promise.reject(response.status);
        }
      )
      .then(payload => {
          setBoards(payload);
        }
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.__container}>
      <label for="note-form">Note</label>
      <input id="note-form" type={"text"} value={note} onChange={e => setNote(e.target.value)} />

      <label htmlFor="media-form">Media url</label>
      <input id="media-form" type={"text"} value={mediaUrl} onChange={e => setMediaUrl(e.target.value)}/>

      <select value={boardId} onChange={(e) => setBoardId(e.target.value)} >
        {
          boards.map((board) => {
            return (<option key={'board-select' + board.id} value={board.id}>{board.name}</option>)
          })
        }
      </select>

      <input type={"button"} value={"Submit"} onClick={submitForm} />

    </div>
  )
}


export default PinForm;