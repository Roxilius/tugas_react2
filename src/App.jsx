import Footer from "./components/Footer"
import Header from "./components/Header"
import MyList, { songs } from "./components/MyList"
function App() {
  return (
    <>
      <Header/>
      <main className="flex flex-wrap justify-evenly gap-5 p-5">
        {
          songs.map((song) => (
            <MyList key={song.id} song={song}/>
          ))
        }
      </main>
      <Footer/>
    </>
  )
}

export default App
