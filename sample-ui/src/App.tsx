import { useEffect, useState } from 'react';
import { sampleFetch } from './sampleFetch';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    (async () => {
      if (loading || loaded) {
        return false
      }
      await setLoading(true)
      await setData(await sampleFetch())
      await setLoading(false)
      await setLoaded(true)

    })()

  }, []);

  return (
    <div>
      Sample React App:
      <div>{
          loading ? "Loading..." : 
            loaded ? data : 'Not loaded'
        }
      </div>
    </div>
  );
}

