import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-black h-screen">

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route exact path="/video/:id" element={<VideoDetail />} />
          <Route exact path="/channel/:id" element={<ChannelDetail />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
