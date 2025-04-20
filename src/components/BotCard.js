import React from 'react';
import PropTypes from 'prop-types';

function BotCard({ bot, action, actionLabel, dischargeBot, isInArmy }) {
  return (
    <div className={`bot-card ${isInArmy ? 'in-army' : ''}`}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p className="bot-class">{bot.bot_class}</p>
      <div className="bot-stats">
        <span title="Health">❤️{bot.health}</span>
        <span title="Damage">⚔️{bot.damage}</span>
        <span title="Armor">🛡️{bot.armor}</span>
      </div>
      <p className="catchphrase">{bot.catchphrase}</p>
      <button 
        className="action-btn" 
        onClick={() => action(bot.id || bot)}
      >
        {actionLabel}
      </button>
      {isInArmy && (
        <button 
          className="discharge-btn" 
          onClick={() => dischargeBot(bot.id)}
          aria-label={`Discharge ${bot.name}`}
        >
          x
        </button>
      )}
    </div>
  );
}

BotCard.propTypes = {
  bot: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
  dischargeBot: PropTypes.func,
  isInArmy: PropTypes.bool
};

export default BotCard;