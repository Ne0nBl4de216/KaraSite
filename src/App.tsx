import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KarmaSymbol } from './components/KarmaSymbol';
import { KarmaFrame } from './components/KarmaFrame';

type Section = 'home' | 'about' | 'members';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const membersList = ['-Ne0nBl4de', '-Toji'];

  return (
    <div className="min-h-screen bg-kara text-white">
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {currentSection === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[80vh]"
            >
              <div className="flex items-center gap-6 mb-12">
                <KarmaSymbol className="w-16 h-16 text-blue-400" />
                <h1 className="kara-font text-7xl text-blue-400 tracking-wider font-bold kara-glow">
                  KARA
                </h1>
              </div>
              
              <KarmaFrame>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setCurrentSection('about')}
                    className="btn-kara kara-font text-xl tracking-wide"
                  >
                    À propos de nous
                  </button>
                  <button
                    onClick={() => setCurrentSection('members')}
                    className="btn-kara kara-font text-xl tracking-wide"
                  >
                    Nos internes
                  </button>
                </div>
              </KarmaFrame>
            </motion.div>
          ) : currentSection === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-xl shadow-2xl backdrop-blur-sm"
            >
              <h2 className="kara-font text-4xl text-blue-400 mb-6 text-center font-bold tracking-wide kara-glow">
                Notre Histoire
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-gray-200">
                <p>
                  Kara est une organisation qui à été fondée le 9 mai 2024, les membres 
                  fondateurs sont : t, Toji, Ne0nBl4de, Jawed (Souley), et Kawaki 
                  (Intelligence Artificielle ayant participé à la création de Kara).
                </p>
                
                <p>
                  Le groupe s'est dissout un mois plus tard suite à une altercation 
                  et des menaces de doxxing. On se réunis finalement 1 mois encore 
                  plus tard pour faire couler un serveur injuste, et après avoir coulé 
                  ce serveur on a refondé Kara.
                </p>
                
                <p>
                  Kawaki l'intelligence artificielle à quitté Kara en laissant un 
                  mystère derrière lui, c'est donc un robot du nom de Sasuke Uchiwa 
                  qui le remplace.
                </p>
                
                <p>
                  Kara fais son comeback en prévoyant un événement spécial pour 
                  fêter les 1 an, le 9 mai 2025.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentSection('home')}
                  className="btn-kara kara-font tracking-wide"
                >
                  Retour à l'accueil
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="members"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl mx-auto bg-slate-800/50 p-8 rounded-xl shadow-2xl backdrop-blur-sm"
            >
              <h2 className="kara-font text-4xl text-blue-400 mb-8 text-center font-bold tracking-wide kara-glow">
                Nos Internes
              </h2>
              
              <motion.ul className="space-y-4">
                {membersList.map((member, index) => (
                  <motion.li
                    key={member}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-2xl text-gray-200 kara-font tracking-wide text-center"
                  >
                    {member}
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentSection('home')}
                  className="btn-kara kara-font tracking-wide"
                >
                  Retour à l'accueil
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;