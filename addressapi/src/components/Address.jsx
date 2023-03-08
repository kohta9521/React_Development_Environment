import React, {useState} from 'react';
import axios from 'axios';
import './Address.css';

export default function Address() {
  const [ zip, setZip ] = useState("");

  return (
    <div>
      <p> 郵便番号を入力してください</p>
      <input onChange={(e) => setZip(e.target.value)} />
      <p> 入力結果: {zip}</p>
    </div>
  );
}