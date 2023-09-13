import React, { useState, useEffect } from 'react';
import styles from './Cronometro.module.css';

const Cronometro = () => {
  const [tempo, setTempo] = useState({ minutos: 0, segundos: 0 });
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let interval;

    if (ativo) {
      interval = setInterval(() => {
        setTempo(prevTempo => {
          let segundos = prevTempo.segundos + 1;
          let minutos = prevTempo.minutos;

          if (segundos === 60) {
            minutos++;
            segundos = 0;
          }

          return { minutos, segundos };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [ativo]);

  const iniciarPararCronometro = () => {
    setAtivo(!ativo);
  };

  const resetarCronometro = () => {
    setTempo({ minutos: 0, segundos: 0 });
    setAtivo(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cronômetro</h1>
      <p className={styles.time}>{String(tempo.minutos).padStart(2, '0')}:{String(tempo.segundos).padStart(2, '0')}</p>
      <button className={styles.botao} onClick={iniciarPararCronometro}>
        {ativo ? 'Parar' : 'Iniciar'}
      </button>
      <button className={styles.botao} onClick={resetarCronometro}>Resetar</button>
    </div>
  );
};

export default Cronometro;
