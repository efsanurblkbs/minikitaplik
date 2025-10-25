// src/App.js - EKSİKSİZ VE SON HALİ

import React, { useState, useEffect } from 'react'; 
import './App.css'; 
// Veri dosyamız direkt src içinde olduğu için yol bu olmalı
import { kitapVerisi } from './kitaplar'; 

// BİLEŞEN IMPORTLARI
import AramaCubugu from './components/AramaCubugu'; 
import KitapListe from './components/KitapListe'; 
import FavoriPanel from './components/FavoriPanel'; 

// ===============================================
function App() {
    
    // 1. STATE TANIMLARI
    const [kitaplar, setKitaplar] = useState(kitapVerisi); 
    const [aramaMetni, setAramaMetni] = useState(''); 
    const [seciliKategori, setSeciliKategori] = useState('Hepsi'); 
    const [favoriKitapIdleri, setFavoriKitapIdleri] = useState([]); 
    
    
    // 2. SIDE-EFFECTS / LOCAL STORAGE
    // Yükleme
    useEffect(() => {
        const storedAramaMetni = localStorage.getItem('sonAramaMetni');
        if (storedAramaMetni) {
            setAramaMetni(storedAramaMetni); 
        }

        const storedFavoriler = localStorage.getItem('favoriKitapIdleri');
        if (storedFavoriler) {
            setFavoriKitapIdleri(JSON.parse(storedFavoriler)); 
        }
    }, []); 

    // Saklama (Favoriler)
    useEffect(() => {
        localStorage.setItem('favoriKitapIdleri', JSON.stringify(favoriKitapIdleri));
    }, [favoriKitapIdleri]); 

    // Saklama (Arama Metni)
    useEffect(() => {
        localStorage.setItem('sonAramaMetni', aramaMetni);
    }, [aramaMetni]); 


    // 3. HANDLER FONKSİYONLARI (Lifting State)
    const handleAramaDegisimi = (yeniMetin) => {
        setAramaMetni(yeniMetin); 
    };

    const handleKategoriSecimi = (yeniKategori) => {
        setSeciliKategori(yeniKategori);
    };

    const handleFavoriToggle = (kitapId) => {
        setFavoriKitapIdleri(prevIds => {
            if (prevIds.includes(kitapId)) {
                return prevIds.filter(id => id !== kitapId);
            } else {
                return [...prevIds, kitapId];
            }
        });
    };

    // 4. VERİ FİLTRELEME MANTIĞI
    const filtrelenmisKitaplar = kitaplar
        .filter(kitap => 
            seciliKategori === 'Hepsi' || kitap.kategori === seciliKategori
        )
        .filter(kitap => 
            kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase())
        )
        .map(kitap => ({
            ...kitap, 
            favorideMi: favoriKitapIdleri.includes(kitap.id) 
        }));

    const favoriKitaplarListesi = kitaplar.filter(kitap => 
        favoriKitapIdleri.includes(kitap.id)
    );

    
    // 5. JSX (Görünüm) - Ana Layout
    return (
        <div className="App">
            <h1>Mini Kitaplık</h1>
            
            <div className="ana-layout">
                
                {/* SOL PANEL */}
                <div className="sol-panel">
                    
                    <AramaCubugu 
                        aramaMetni={aramaMetni}
                        handleAramaDegisimi={handleAramaDegisimi}
                        seciliKategori={seciliKategori}
                        handleKategoriSecimi={handleKategoriSecimi}
                    />
                    
                    <KitapListe
                        filtrelenmisKitaplar={filtrelenmisKitaplar} 
                        handleFavoriToggle={handleFavoriToggle}     
                    />
                </div>
                
                {/* SAĞ PANEL */}
                <div className="sağ-panel">
                    <FavoriPanel 
                        favoriKitaplar={favoriKitaplarListesi} 
                        handleFavoriToggle={handleFavoriToggle} 
                    />
                </div>
                
            </div>
        </div>
    );
}

export default App;