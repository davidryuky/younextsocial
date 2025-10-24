import React, { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

// Custom TikTok Icon
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" /></svg>
);

const socialNetworks = [
    { name: 'Instagram', icon: Instagram },
    { name: 'TikTok', icon: TiktokIcon },
    { name: 'Facebook', icon: Facebook },
    { name: 'Twitter', icon: Twitter },
];

export const OrderSection: React.FC = () => {
    const [selectedSocial, setSelectedSocial] = useState('Instagram');
    const [service, setService] = useState<'Seguidores' | 'Curtidas'>('Seguidores');
    const [quantity, setQuantity] = useState(1000);
    const [link, setLink] = useState('');

    const handleBuyClick = () => {
        const message = `Olá! Gostaria de fazer um pedido na YouNextSocial:\n\n- Rede Social: *${selectedSocial}*\n- Serviço: *${service}*\n- Quantidade: *${quantity}*\n- Link: ${link}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/818075997250?text=${encodedMessage}`;
        
        if (!link.trim()) {
            alert('Por favor, insira o link do seu perfil ou publicação.');
            return;
        }
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };
    
    const iconStyle = { width: '32px', height: '32px' };

    return (
        <section id="comprar" className="py-20 md:py-32 bg-brand-dark-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Faça seu Pedido</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">É rápido, fácil e 100% seguro.</p>
                </div>

                <div className="max-w-3xl mx-auto bg-brand-dark p-8 rounded-2xl shadow-2xl shadow-purple-500/10 border border-purple-900/50">
                    {/* 1. Social Network Selector */}
                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-3 text-slate-200">1. Selecione a Rede Social</label>
                        <div className="flex flex-wrap justify-center items-end gap-4 py-4">
                            {socialNetworks.map(({ name, icon: Icon }) => (
                                <div key={name} className="flex flex-col items-center w-24">
                                    <button
                                        onClick={() => setSelectedSocial(name)}
                                        className={`p-4 rounded-full border-2 transition-all duration-300 ${selectedSocial === name ? 'bg-brand-purple border-brand-lilac scale-110' : 'bg-brand-dark-200 border-purple-900/50 hover:border-brand-lilac'}`}
                                    >
                                        <Icon style={iconStyle} className={selectedSocial === name ? 'text-white' : 'text-slate-300'} />
                                    </button>
                                    <span className={`mt-2 text-xs font-semibold h-4 transition-opacity duration-300 ${selectedSocial === name ? 'opacity-100 text-brand-lilac' : 'opacity-0'}`}>
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* 2. Service Selector */}
                    <div className="mb-6">
                         <label className="block text-lg font-semibold mb-3 text-slate-200">2. Escolha o Serviço</label>
                         <div className="relative w-full max-w-xs h-12 bg-brand-dark-200 rounded-full p-1 flex items-center border border-purple-900/50">
                            <span className={`absolute top-1 left-1 h-10 w-1/2 rounded-full bg-brand-purple transition-transform duration-300 ease-in-out ${service === 'Curtidas' ? 'transform translate-x-full' : ''}`}></span>
                            <button onClick={() => setService('Seguidores')} className="relative w-1/2 h-full text-center font-bold z-10 transition-colors">Seguidores</button>
                            <button onClick={() => setService('Curtidas')} className="relative w-1/2 h-full text-center font-bold z-10 transition-colors">Curtidas</button>
                         </div>
                    </div>

                    {/* 3. Quantity Slider */}
                    <div className="mb-6">
                        <label htmlFor="quantity" className="block text-lg font-semibold mb-3 text-slate-200">3. Defina a Quantidade</label>
                        <div className="flex items-center space-x-4">
                            <input id="quantity" type="range" min="100" max="10000" step="100" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} className="w-full h-2 bg-purple-900/50 rounded-lg appearance-none cursor-pointer accent-brand-lilac" />
                            <span className="bg-brand-dark-200 text-brand-lilac font-bold py-2 px-4 rounded-lg min-w-[80px] text-center">{quantity}</span>
                        </div>
                    </div>

                    {/* 4. Link Input */}
                    <div className="mb-8">
                        <label htmlFor="link" className="block text-lg font-semibold mb-3 text-slate-200">4. Link do Perfil ou Publicação</label>
                        <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder={`https://...`} className="w-full bg-brand-dark-200 border-2 border-purple-900/50 rounded-lg p-3 focus:outline-none focus:border-brand-lilac transition-colors" />
                    </div>

                    {/* 5. Buy Button */}
                    <div className="text-center">
                        <button onClick={handleBuyClick} className="w-full md:w-auto bg-brand-purple hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                            Comprar {service}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};