import React from 'react';
import './StoreMain.css';
import EventComp from '../../components/StoreMain/EventComp';

const StoreMain = () => {
  return (
    <main className="StoreMain">
      <header>
        <div className="banner"></div>
      </header>
      <section>
        <div className="storeMain-event">
          <EventComp />
        </div>
      </section>
    </main>
  );
};

export default StoreMain;
