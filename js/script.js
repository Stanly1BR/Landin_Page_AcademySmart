const benefits = [
    {
        icon: 'dumbbell',
        title: 'Treinos Exclusivos',
        description: 'Acesso a programas de treino personalizados e sempre atualizados'
    },
    {
        icon: 'users',
        title: 'Comunidade Ativa',
        description: 'Faça parte de um grupo motivado e engajado em alcançar resultados'
    },
    {
        icon: 'trophy',
        title: 'Desafios Mensais',
        description: 'Participe de desafios e conquiste prêmios incríveis'
    },
    {
        icon: 'calendar',
        title: 'Aulas ao Vivo',
        description: 'Participe de aulas online exclusivas com nossos instrutores'
    },
    {
        icon: 'message-square',
        title: 'Suporte Diário',
        description: 'Tire dúvidas e receba orientações de profissionais qualificados'
    },
    {
        icon: 'zap',
        title: 'Resultados Rápidos',
        description: 'Metodologia comprovada para alcançar suas metas fitness'
    }
];

const WHATSAPP_LINK = 'https://chat.whatsapp.com/IvT4TEyMGJH5y8hMJ93WNl?mode=wwt';

document.addEventListener('DOMContentLoaded', function() {

    lucide.createIcons();
    renderBeneficios();
    setupEventListeners();
    setupScrollAnimations();

});

function renderBeneficios(){
    const beneficiosGrid = document.querySelector('.benefits-grid');

    beneficiosGrid.innerHTML = benefits.map((benefit, index) =>`
        <div class="benefit-card animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="benefit-icon">
                <i data-lucide="${benefit.icon}"></i>
            </div>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        </div>
    `).join('');

    lucide.createIcons();
}

function setupEventListeners(){
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappCtaBtn = document.getElementById('whatsapp-cta-btn');
    
    whatsappBtn.addEventListener('click', () => openWhatsApp());
    whatsappCtaBtn.addEventListener('click', () => openWhatsApp());
}

function openWhatsApp() {
    window.open(WHATSAPP_LINK, '_blank');
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

function typeWriterEffect() {
    const titles = document.querySelectorAll('.hero-title, .hero-subtitle');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }

        setTimeout(type, 1000);
    });
}