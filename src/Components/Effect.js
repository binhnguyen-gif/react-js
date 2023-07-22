import { useEffect, useState } from "react";


const tabs = ['posts', 'comment', 'albums']
function Effect() {
  // const [title, setTitle] = useState("");
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    // document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if(window.scrollY >= 10) {
        setShowGoToTop(true)
      }else {
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup function gọi trước khi component bị unmount(return ra một hàm gọi là cleanup function)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div>
      {/* <input onChange={(e) => setTitle(e.target.value)} /> */}
      {tabs.map((value, index) => (
        <button key={index} onClick={() => setType(value)} style={type === value ? {background: "#ccc"} : {}}>{value}</button>
      ))}
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}

      {showGoToTop && (
        <button style={{position: "fixed", right: 20, bottom: 20}}>Show go to top</button>
      )}
      {/* <button style={{position: "fixed", right: 20, bottom: 20}}>Show go to top</button> */}
    </div>
  );
}

export default Effect;
