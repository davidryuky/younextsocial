import React from 'react';

export const ContactSection: React.FC = () => {
    const phoneNumber = '818075997250';
    const message = 'Olá! Vim pelo site e gostaria de mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section id="contato" className="py-20 md:py-32 bg-gradient-to-t from-brand-dark via-brand-dark-200 to-brand-dark">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Pronto para <span className="text-brand-lilac">Começar</span>?
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                    Nossa equipe está pronta para te atender! Para um suporte mais ágil e personalizado, nosso canal de atendimento principal é via WhatsApp.
                </p>
                <div className="mt-12">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-purple hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
                    >
                      Fale Conosco no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};