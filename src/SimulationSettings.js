import React from 'react';

import styles from './SimulationSettings.module.css';

export default function SimulationSettings({
  simulationState,
  onSettingChange,
  onRestartButtonClick,
}) {
  return (
    <div className={ styles.container }>
      <div className={ styles.form }>
      <label>
        Initial sick agents<br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('initialSickAgents') }
          value={ simulationState.initialSickAgents }
          min={ 0 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.initialSickAgents }</span>
      </label>
      <label>
        Agents per building <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('agentsPerHouse') }
          value={ simulationState.agentsPerHouse }
          min={ 1 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.agentsPerHouse }</span>
      </label>
      <label>
        Houses <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('houses') }
          value={ simulationState.houses }
          min={ 0 }
          max={ 100 }
        /> <span className={ styles.value }>{ simulationState.houses }</span>
      </label>
      <label>
        Bus stations <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('busStations') }
          value={ simulationState.busStations }
          min={ 0 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.busStations }</span>
      </label>
      <label>
        Hospitals <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('hospitals') }
          value={ simulationState.hospitals }
          min={ 0 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.hospitals }</span>
      </label>
      <label>
        Supermarkets <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('supermarkets') }
          value={ simulationState.supermarkets }
          min={ 0 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.supermarkets }</span>
      </label>
      <label>
        Temples <br />
        <input
          type={ 'range' }
          onChange={ onSettingChange('temples') }
          value={ simulationState.temples }
          min={ 0 }
          max={ 10 }
        /> <span className={ styles.value }>{ simulationState.temples }</span>
      </label>
      </div>

      <div className={ styles.footer }>
        <button onClick={ onRestartButtonClick }>Restart the simulation</button>
      </div>
    </div>
  );
}
