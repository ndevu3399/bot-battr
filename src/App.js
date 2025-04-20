import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8001/bots');
      setBots(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch bots. Please try again later.');
      console.error('Error fetching bots:', err);
    } finally {
      setLoading(false);
    }
  };

  const enlistBot = (bot) => {
    // Check if bot is already in army
    if (army.some(b => b.id === bot.id)) {
      return;
    }
    
    // Check if there's already a bot of this class in the army
    if (army.some(b => b.bot_class === bot.bot_class)) {
      alert(`You can only have one ${bot.bot_class} bot in your army!`);
      return;
    }
    
    setArmy([...army, bot]);
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${botId}`);
      setArmy(army.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    } catch (err) {
      setError('Failed to discharge bot. Please try again.');
      console.error('Error discharging bot:', err);
    }
  };

  const sortBots = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  const filterBots = (botClass) => {
    if (botClass === 'All') {
      fetchBots();
    } else {
      const filtered = bots.filter(bot => bot.bot_class === botClass);
      setBots(filtered);
    }
  };

  const viewBotDetails = (bot) => {
    setSelectedBot(bot);
  };

  const goBackToList = () => {
    setSelectedBot(null);
  };

  if (loading) return <div className="loading">Loading bots...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app">
      <header>
        <h1>Bot Battlr</h1>
        <p>Build your ultimate bot army!</p>
      </header>
      
      <div className="controls">
        <SortBar sortBy={sortBots} />
        <FilterBar filterBy={filterBots} />
      </div>
      
      <YourBotArmy 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />
      
      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot} 
          goBack={goBackToList} 
          enlistBot={enlistBot} 
        />
      ) : (
        <BotCollection 
          bots={bots} 
          enlistBot={viewBotDetails} 
          army={army} 
        />
      )}
    </div>
  );
}

export default App;