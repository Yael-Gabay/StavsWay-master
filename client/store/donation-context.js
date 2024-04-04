import React, { createContext, useContext, useState, useCallback } from 'react';

export const DonationsContext = createContext({
  donations: [],
  addDonation: () => {},
  updateDonation: () => {},
  setAllDonations: () => {},
});

export const useDonationsContext = () => {
  return useContext(DonationsContext);
};

const DonationsContextProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  const addDonation = useCallback((newDonation) => {
    setDonations((prevDonations) => [...prevDonations, newDonation]);
  }, []);

  const updateDonation = useCallback((donationId, updatedDonation) => {
    setDonations((prevDonations) =>
      prevDonations.map((donation) =>
        donation.id === donationId ? { ...donation, ...updatedDonation } : donation
      )
    );
  }, []);

  const setAllDonations = useCallback((newDonations) => {
    setDonations(newDonations);
  }, []);

  return (
    <DonationsContext.Provider value={{ donations, addDonation, updateDonation, setAllDonations }}>
      {children}
    </DonationsContext.Provider>
  );
};

export default DonationsContextProvider;
