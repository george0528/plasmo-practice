import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from './lib/firebase';

function IndexPopup() {
  const [data, setData] = useState("")
  const [templates, setTemplates] = useState([])
  useEffect(() => {
    const templatesCollectionRef = collection(db, 'templates');
    getDocs(templatesCollectionRef).then((querySnapshot) => {
      setTemplates(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <div
        style={{
          border: '1px solid black'
        }}
      >
        {templates.map(template => {
          return (
            <>
              <div>{template.title}</div>
              <div>{template.description}</div>
              <div>{template.template}</div>
            </>
          )
        })}
      </div>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
