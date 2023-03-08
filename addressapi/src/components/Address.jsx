import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './Address.css';

export default function Address() {
  const [ zip, setZip ] = useState("");
  const [query, setQuery ] = useState("");
  const [ resultTxt, setResultTxt ] = useState("");

  useEffect(() => {
    const fetchData = () => {
      console.log(" データを取得します");
      console.log(query);

      axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${query}`).then((res) => {
        console.log(res);
        // APIが作動していない場合のエラー
        if (res.status !== 200) {
          throw new Error('APIがうまく作動していないようです');
        } else {
          // 郵便番号の桁数が不正の場合のメッセージ
        if (res.data.message) {
          setResultTxt(res.data.message);
          return;
        }

        // 郵便番号が存在しない場合のメッセージ
        if (res.data,result == null) {
          setResultTxt('郵便番号が見つかりませんでした。');
          return;
        }

        // 取得した住所を格納
        let getAddress = res.data.result[0];

        setResultTxt(
          `〒${getAddress.zipcode}\n${getAddress.address1}$getAddress.address2${getAddress.address3}`
        );
        }
      })
      .catch(err)=> setResultTxt(`データがうまく取得できませんでした。${err}`);
    };
  })

  return (
    <div>
      <p> 郵便番号を入力してください</p>
      <input onChange={(e) => setZip(e.target.value)} />
      <p> 入力結果: {zip}</p>
    </div>
  );
}