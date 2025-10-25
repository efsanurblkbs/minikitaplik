import React from 'react';

const KitapKarti = ({ baslik, yazar, kategori, id, favorideMi, handleFavoriToggle }) => {

  const butonMetni = favorideMi ? '⭐ Favoride' : 'Favori Ekle';
  const butonClass = favorideMi ? 'favori-aktif' : 'favori-pasif';

  const toggleFavori = () => {
    handleFavoriToggle(id);
  };
    
  return (
    <div className="kitap-kartı">
      <div className="kitap-bilgi">
        <h4>{baslik}</h4>
        <p>{yazar} - {kategori}</p>
      </div>
      <button 
        className={butonClass}
        onClick={toggleFavori} 
      >
        {butonMetni}
      </button>
    </div>
  );
};
export default KitapKarti;