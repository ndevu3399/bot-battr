import React from 'react';
import PropTypes from 'prop-types';
import BotCard from './BotCard';

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <section className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="empty-army">No bots enlisted yet. Click on bots to add them to your army!</p>
      ) : (
        <div className="bot-grid">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              action={releaseBot} 
              actionLabel="Release" 
              dischargeBot={dischargeBot}
              isInArmy={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

YourBotArmy.propTypes = {
  army: PropTypes.array.isRequired,
  releaseBot: PropTypes.func.isRequired,
  dischargeBot: PropTypes.func.isRequired
};

export default YourBotArmy;