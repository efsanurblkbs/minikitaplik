import React from 'react';
import KitapKarti from './KitapKarti'; 

const KitapListe = ({ filtrelenmisKitaplar, handleFavoriToggle }) => {
  
  if (filtrelenmisKitaplar.length === 0) {
    return <p className="liste-bos">Aradığınız kriterlere uygun kitap bulunamadı.</p>;
  }

  return (
    <div className="kitap-liste">
      {filtrelenmisKitaplar.map(kitap => (
        <KitapKarti 
          key={kitap.id}
          baslik={kitap.baslik}
          yazar={kitap.yazar}
          kategori={kitap.kategori}
          id={kitap.id}
          favorideMi={kitap.favorideMi}
          handleFavoriToggle={handleFavoriToggle}
        />
      ))}
    </div>
  );
};
export default KitapListe;