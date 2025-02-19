```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact Details</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path=':id?' element={<ContactDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```