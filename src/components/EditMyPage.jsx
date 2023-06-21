import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import "./MyPage.css"
import"../firebase"

const EditMyPage = () => {
    const [github, setGitHub] = useState();
    const [twitter, setTwitter] = useState();
    const [comment, setComment] = useState();
    const [accountName, setAccountName] = useState();

    const [userInformations, setUserInformations] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const q = query(collection(db, "userInformaitons"), where("id", "==", "EAP2Juw9rYN3E4CPDHyGNrRZbE93"));
        const data = await getDocs(q);
        setUserInformations(data.docs.map(doc => ({...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);

    const navigate = useNavigate();

    const editButton = async() => {
        await addDoc(collection(db, "userInformations"), {
            id: auth.currentUser.uid,
            username: auth.currentUser.displayName,
            accountName: accountName,
            github: github,
            twitter: twitter,
            comment: comment,
        })

        navigate("/mypage");
    };

  return (
    <div className="userInformationContainer">
        <input
        type="text"
        placeholder={userInformations.accountName}
        onChange={(e) => setAccountName(e.target.value)}
        />
        <input
        type="text"
        placeholder={userInformations.accountName}
        onChange={(e) => setGitHub(e.target.value)}
        />
        <input
        type="text"
        placeholder="Twitterアカウント名"
        onChange={(e) => setTwitter(e.target.value)}
        />
        <textarea
        placeholder="コメントを記入"
        onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button onClick={editButton}>編集完了</button>
    </div>
  )
}

export default EditMyPage
