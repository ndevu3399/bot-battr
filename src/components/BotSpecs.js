import React from 'react';
import PropTypes from 'prop-types';

function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <section className="bot-specs">
      <button className="back-btn" onClick={goBack}>← Back to List</button>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
        <div className="bot-info">
          <h2>{bot.name}</h2>
          <p className="bot-class">{bot.bot_class}</p>
          <div className="specs-grid">
            <div className="spec">
              <span className="spec-label">Health:</span>
              <span className="spec-value">{bot.health}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Damage:</span>
              <span className="spec-value">{bot.damage}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Armor:</span>
              <span className="spec-value">{bot.armor}</span>
            </div>
          </div>
          <p className="catchphrase">"{bot.catchphrase}"</p>
          <button 
            className="enlist-btn"
            onClick={() => enlistBot(bot)}
          >
            Enlist in Army
          </button>
        </div>
      </div>
    </section>
  );
}

BotSpecs.propTypes = {
  bot: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
  enlistBot: PropTypes.func.isRequired
};

export default BotSpecs;