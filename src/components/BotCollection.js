import React from 'react';
import PropTypes from 'prop-types';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, army }) {
  return (
    <section className="bot-collection">
      <h2>Available Bots</h2>
      {bots.length === 0 ? (
        <p className="no-bots">No bots available matching your criteria.</p>
      ) : (
        <div className="bot-grid">
          {bots.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              action={enlistBot} 
              actionLabel="View Details" 
              isInArmy={army.some(b => b.id === bot.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

BotCollection.propTypes = {
  bots: PropTypes.array.isRequired,
  enlistBot: PropTypes.func.isRequired,
  army: PropTypes.array.isRequired
};

export default BotCollection;