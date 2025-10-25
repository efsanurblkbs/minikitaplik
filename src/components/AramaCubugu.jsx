import React from 'react';

const AramaCubugu = ({ aramaMetni, handleAramaDegisimi, seciliKategori, handleKategoriSecimi }) => {

  const kategoriler = ['Hepsi', 'Klasik', 'Fantastik', 'Edebiyat', 'Web', 'CS', 'Tasarım'];

  return (
    <div className="arama-filtre-satırı">
        <input
            type="text"
            placeholder="Kitap başlığına göre ara..."
            value={aramaMetni} 
            onChange={(e) => handleAramaDegisimi(e.target.value)} 
        />
        <select
            value={seciliKategori}
            onChange={(e) => handleKategoriSecimi(e.target.value)}
        >
            {kategoriler.map(kategori => (
                <option key={kategori} value={kategori}>
                    {kategori}
                </option>
            ))}
        </select>
    </div>
  );
};
export default AramaCubugu;