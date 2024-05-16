import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';
import axios from 'axios';

interface Cards {
  "Common": number;
  "Uncommon": number;
  "Rare": number;
  "Mythic Rare": number;
}

function App() {

  const [input, setInput] = useState<number | undefined>();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSet, setSelectedSet] = useState<string>("M10");
  const [cards, setCards] = useState<Cards>();
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsVisible(false);
      setIsLoading(true)
      const response = await axios.post('http://localhost:8080/api/v0', { n: input, set: selectedSet });
      setCards(response.data.cards);
      setIsLoading(false)
      setIsVisible(true);
    }
    catch (error) {
      alert("Error from the server, try again later")
      setIsLoading(false)
    }
  }

  return ( 
    <div className="container">
      <h1 className="title">Quantico Challenge</h1>
      <p className="infoText">in this application, you will select a number and a "Magic: The Gathering" Core Set then we will open booster cards from this set for you and in response, we will tell you how many cards of each rarity you have gotten!</p>
      <form className="formContainer" onSubmit={handleSubmit}>
      <select name="sets" id="sets" value={selectedSet} onChange={(e) => setSelectedSet(e.target.value)}>
            <option value="M10">Magic 2010</option>
            <option value="M11">Magic 2011</option>
            <option value="M12">Magic 2012</option>
            <option value="M13">Magic 2013</option>
            <option value="M14">Magic 2014</option>
            <option value="M15">Magic 2015</option>
        </select>
        <input
          type="number"
          min={20}
          max={1000}
          placeholder='Insert a number here'
          name="weight"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          required></input>
        <button type="submit" className="buttonSearch">
          <FiSearch size={25} color='#FFF' />
        </button>
      </form>

      {isLoading && <div className="loading"></div>}

      {cards && (
        <div className={isVisible ? 'main visible' : 'main'}>
          <span>You have {cards['Common']} Commons cards</span>
          <span>You have {cards['Uncommon']} Uncommons cards</span>
          <span>You have {cards['Rare']} Rare cards</span>
          <span>You have {cards['Mythic Rare']} Mythic Rare cards</span>
        </div>
      )}

    </div>
  );
}

export default App;
