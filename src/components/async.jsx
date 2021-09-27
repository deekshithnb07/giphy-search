import React from "react";

const apiName = "https://api.giphy.com/v1/gifs/search?api_key=zIn1s1kSNuU9WMhWYJSObdkx1Zvh4zUp&q=";
const api_key = "&limit=10&offset=0&rating=g&lang=en";

const Handle = () =>{
    const [gif, setgif] = useState(null);
    useEffect(() =>{
      getData();
      async function getData(){
      const response = await fetch(apiName + Object.fromEntries(new FormData(events.target).entries()) + api_key);
      const data = await response.json();
      setgif(data);
    }
    },[]);
    return(
      <div>render the data here
        {
          gif && (
            <div className="gifData">
              { gif.map((gif, index) => (
                <div key={index}>
                  <h2>{gif.data.images}</h2>
                  </div>
              ))}
            </div>
          )
        }
      </div>
    )
}
