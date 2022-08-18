import {useCallback, useEffect} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useSetRecoilState} from "recoil"
import axios from "axios"
import {animeTitles} from "./store"
import HomePage from "./pages/home"
import AnimePage from "./pages/anime"

function App() {
  const setTitles = useSetRecoilState(animeTitles)

  const fetchAnimes = useCallback(async () => {
    try {
      const res = await axios.get('https://animechan.vercel.app/api/available/anime')
      setTitles(res?.data)
    } catch (err) {
      console.log(err?.response?.data?.error)
    }
  }, [setTitles])

  useEffect(() => {
    fetchAnimes()
  }, [fetchAnimes])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/' element={<HomePage />}
        />
        <Route
          exact
          path='/anime/:name'
          element={<AnimePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
