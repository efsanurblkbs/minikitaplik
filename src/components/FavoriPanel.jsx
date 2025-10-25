import React from 'react';

const FavoriPanel = ({ favoriKitaplar, handleFavoriToggle }) => {
  
  return (
    <div className="favori-panel">
      <h3>Favoriler ({favoriKitaplar.length})</h3>
      
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitabınız yok.</p>
      ) : (
        <ul>
          {favoriKitaplar.map(kitap => (
            // Fragments kullanımı
            <React.Fragment key={kitap.id}> 
              <li>
                <span>• {kitap.baslik} ({kitap.yazar})</span>
                <button 
                  className="kaldir-buton"
                  onClick={() => handleFavoriToggle(kitap.id)}
                >
                  Kaldır
                </button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FavoriPanel;