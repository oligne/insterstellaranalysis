// ===== DONNÉES DES CHAPITRES =====
const chapters = {
    1: {
        title: "Introduction",
        showWorldState: true,
        showTimeDisplay: false,
        isVideo: true,
        isIntro: true
    },
    2: {
        title: "Chapitre 1",
        showWorldState: true,
        showTimeDisplay: true,
        text: `Interstellar c'est un <span class="highlight">voyage dans les rouages du temps</span> dans un monde à qui il n'en reste que très peu. Si l'idée d'être prisonnier de l'espace était déjà terrifiante, <span class="highlight">être prisonnier du temps</span> prend un tout autre sens. Si l'œuvre cinématographique est contemplative, mystérieuse et nous fait tomber de haut au premier visionnage, c’est lors des suivants qu’elle nous fait frissonner. <br><br>Selon mon interprétation, la film gagne en puissance lorsque l’on à le pouvoir en tant que spectateur, de <span class="highlight">posséder des éléments qui n’appartiennent pas encore à la temporalité que l’on regarde du film.</span> Nous regardons des scènes en connaissant déjà leur écho, leurs conséquences, leurs résonances lointaines, mais nous ne sommes que <span class="highlight">spectateur d’un passé déjà joué.</span> <br><br>C’est grâce à la <span class="highlight">superposition temporelle</span> de différents éléments du film, en ayant déjà vu et saisi les enjeux de l’univers dans lequel nous plonge Christopher Nolan. C’est à travers un bouleversement des rapports temps-espace que nous pouvons comprendre la puissance du récit et se plonger dans un monde où <span class="highlight">l’espace-temps devient malléable.</span> Ainsi, les trois premières scènes du film nous présentent différentes temporalités qui s’entremêlent dans notre récit.`,
        images: [
            { src: "selected_shot/02 (504).jpg", subtitle: "00:01:04 Murphy est une femme agée, elle conte son histoire au passé." },
            { src: "selected_shot/21 (514).jpg", subtitle: "00:01:25 Extrait du décollage de la mission Endurance." },
            { src: "selected_shot/07 (504).jpg", subtitle: "00:01:45 Murphy jeune, vit les événements en temps réel." }
        ]
    },
    3: {
        title: "Chapitre 2",
        showWorldState: true,
        showTimeDisplay: true,
        text: `Ce qui distingue Interstellar de la majorité des fictions d'explorations spatiales contemporaines, c'est sa volonté d'aborder l'astrophysique non comme un décor, mais comme un cadre épistémologique réel, comme support du récit. Nolan, épaulé par le physicien Kip Thorne, inscrit son récit dans une forme de science spéculative qui cherche à imaginer les implications sensibles des lois physiques. <span class="highlight">C'est une véritable théorie d'astrophysique établie par K. Thorne</span> sur lesquelles s'appuient le scénario et les événements métaphysiques observés dans le film. <br><br>Le premier phénomène physico-sensible observé est celui de <span class="highlight">la dilatation du temps</span>, conséquence directe de la relativité générale. Le temps ne s'écoule pas à la même vitesse selon la gravité du lieu où l'on se trouve. Sur certaines planètes, une heure équivaut à plusieurs années terrestres, créant un décalage déchirant entre les personnages. <span class="highlight">Ce phénomène transforme une théorie scientifique en expérience émotionnelle : la physique devient affect.</span> Nolan rend cette théorie tangible lors de la scène emblématique de la planète Miller, située près du trou noir Gargantua. A cause de l'attraction due à la masse de ce dernier, une heure passée à la surface équivaut à plus de vingt années sur Terre. Ce décalage crée une fracture temporelle bouleversante entre Cooper et Murphy. Le spectateur ressent la théorie d'Einstein non pas comme un concept, mais comme une douleur : celle d'un père qui voit sa fille vieillir en l'absence d'un temps partagé.

    <br><br>Le second bouleversement intervient dans la dernière partie du film, lorsque Cooper franchit le trou noir et accède à une dimension altérnative, <span class="highlight">le "tesseract"</span>, où l'espace et le temps se matérialisent. Cet espace, inspiré des hypothèses de la théorie des cordes, représente une matérialisation du continuum espace-temps : le passé, le présent et le futur coexistent dans un même espace. À travers ce dispositif, le film traduit visuellement une idée centrale des spéculations de Hawking, celle d'un univers où le temps peut être courbé, revisité, voire traversé.

    <br><br>Dans cette séquence, <span class="highlight">la bibliothèque devient le point de contact entre deux dimensions</span> : celle de l'expérience humaine et celle de la physique quantique. Le dialogue entre Cooper et Murph dépasse alors le cadre du réalisme scientifique pour devenir une métaphore du lien, celui qui unit deux consciences au-delà du temps, à travers la liberté prise d'une théorie selon laquelle <span class="highlight">la gravité est la seule force capable de coexister entre les dimensions</span>, ce qui est scientifiquement spéculatif mais conceptuellement cohérent.`,
        images: [
            { src: "../../selected_shot/Séquence 01.00_00_52_05.Still008.jpg", subtitle: "Le tesseract dimensionnel" },
            { src: "../../selected_shot/Séquence 01.00_01_17_17.Still009.jpg", subtitle: "La bibliothèque interdimensionnelle" },
            { src: "../../selected_shot/Séquence 01.00_03_15_12.Still011.jpg", subtitle: "L'espace-temps matérialisé" }
        ]
    },
    4: {
        title: "Chapitre 3",
        showWorldState: true,
        showTimeDisplay: true,
        isPanorama: true,
        panoramas: [
            { src: "../../pano1.png", speed: 1 },
            { src: "../../pano2.png", speed: 1 },
            { src: "../../pano3.png", speed: 1, overlapAmount: 2649.8746 }
        ]
    },
    5: {
        title: "Séquence vidéo",
        showTimeDisplay: true,
        showWorldState: true,
        isVideo: true,
        video: { src: "../../SEQ_02.mp4" }
    }
};

let startTime = Date.now();
let worldState = {
    population: 800000,
    humidity: 0.02,
    temperature: 42.5,
    dustLevel: 89.7,
    location: "COLORADO, USA",
    coordinates: "39.7392°N, 104.9903°W"
};

let currentChapter = 1;
let worldStateInterval = null;

// ===== INITIALISATION =====
function loadChapters() {
    const startButton = document.getElementById('start-button');
    if (!startButton) return;
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro-overlay').style.display = 'none';
        createChapterNavigation();
        displayChapter(1);
    });
}

// ===== AFFICHAGE CHAPITRE =====
function displayChapter(chapterId) {
    console.log('📖 Affichage chapitre:', chapterId);
    
    const chapter = chapters[chapterId];
    if (!chapter) return;
    
    currentChapter = chapterId;
    
    // NETTOYAGE TOTAL
    ['chapter-content', 'chapter-video-container', 'panorama-container', 'full-page-gradient', 
     'particle-canvas', 'text-scroll-container', 'panorama-subtitle-container', 'end-page', 
     'reading-mode-toggle', 'skip-intro-button', 'skip-video-button'].forEach(id => { // AJOUTER skip-video-button
        const el = document.getElementById(id);
        if (el) el.remove();
    });
    
    const introContainer = document.getElementById('intro-video-container');
    if (introContainer) {
        introContainer.style.display = 'none';
        const introVideo = document.getElementById('intro-video');
        if (introVideo) introVideo.pause();
        // NE PAS ARRÊTER L'AUDIO
    }
    
    if (window.karaokeInterval) clearInterval(window.karaokeInterval);
    if (window.panoramaWheelListener) window.removeEventListener('wheel', window.panoramaWheelListener);
    window.animationRunning = false;
    
    // GÉRER LES DISPLAYS
    const worldStateEl = document.getElementById('world-state-display');
    const timeDisplayEl = document.getElementById('time-display');
    
    if (chapter.showWorldState) {
        if (!worldStateEl) {
            createWorldStateDisplay();
            startWorldStateMonitoring();
        } else {
            worldStateEl.style.display = 'flex'; // RÉAFFICHER
        }
    } else {
        if (worldStateEl) {
            worldStateEl.style.display = 'none';
        }
    }
    
    if (chapter.showTimeDisplay) {
        if (!timeDisplayEl) {
            createTimeDisplay();
            startTimers();
        } else {
            timeDisplayEl.style.display = 'flex'; // RÉAFFICHER
        }
    } else {
        if (timeDisplayEl) {
            timeDisplayEl.style.display = 'none';
        }
    }
    
    updateChapterNavigation();
    
    // AFFICHER LE BON TYPE
    if (chapter.isVideo) {
        chapter.isIntro ? displayIntroVideo() : displayVideoChapter(chapter);
    } else if (chapter.isPanorama) {
        displayPanoramaChapter(chapter);
    } else {
        displayTextChapter(chapter);
    }
}

// ===== VIDÉO INTRO =====
function displayIntroVideo() {
    const introContainer = document.getElementById('intro-video-container');
    const introVideo = document.getElementById('intro-video');
    const introAudio = document.getElementById('intro-audio');
    
    introContainer.style.display = 'block';
    
    const nav = document.getElementById('chapter-navigation');
    if (nav) nav.style.display = 'flex';
    
    // FORCER L'AFFICHAGE DU WORLD STATE
    let worldStateEl = document.getElementById('world-state-display');
    if (!worldStateEl) {
        createWorldStateDisplay();
        startWorldStateMonitoring();
        worldStateEl = document.getElementById('world-state-display');
    }
    // FORCER display flex et z-index élevé
    if (worldStateEl) {
        worldStateEl.style.display = 'flex';
        worldStateEl.style.zIndex = '10500'; // Au-dessus de la vidéo
    }
    
    const skipButton = document.createElement('button');
    skipButton.id = 'skip-intro-button';
    skipButton.textContent = 'SKIP';
    skipButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 10501;
        background: transparent;
        border: 2px solid white;
        color: white;
        padding: 12px 30px;
        font-size: 16px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    skipButton.onmouseenter = () => skipButton.style.background = 'rgba(255, 255, 255, 0.2)';
    skipButton.onmouseleave = () => skipButton.style.background = 'transparent';
    
    let transitionDone = false;
    
    skipButton.onclick = () => {
        if (transitionDone) return;
        transitionDone = true;
        introVideo.pause();
        skipButton.remove();
        displayChapter(2);
    };
    
    introVideo.onended = () => {
        if (transitionDone) return;
        transitionDone = true;
        skipButton.remove();
        displayChapter(2);
    };
    
    document.body.appendChild(skipButton);
    introVideo.currentTime = 0;
    introAudio.currentTime = 0;
    introVideo.play();
    introAudio.play();
    
    console.log('✅ Vidéo intro lancée avec world state visible');
}

// ===== CHAPITRE TEXTE =====
function displayTextChapter(chapter) {
    let container = document.getElementById('chapter-content');
    if (!container) {
        container = document.createElement('div');
        container.id = 'chapter-content';
        document.body.appendChild(container);
    }
    
    container.style.display = 'block';
    container.innerHTML = '';
    
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-content-container';
    
    const textSection = document.createElement('div');
    textSection.className = 'text-section';
    
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.innerHTML = `<p>${chapter.text}</p>`;
    textSection.appendChild(textContainer);
    
    if (currentChapter === 2) {
        const schema = document.createElement('div');
        schema.className = 'schema-container-left';
        schema.innerHTML = `<img src="../../Explication01.png" class="schema-image"><div class="schema-caption">Schéma des temporalités entremêlées</div>`;
        textSection.appendChild(schema);
    }
    
    const scrollSpace = document.createElement('div');
    scrollSpace.className = 'scroll-space';
    textSection.appendChild(scrollSpace);
    
    // AJOUTER DÉTECTION FIN DE SCROLL
    let scrollTimeout;
    textSection.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollHeight = textSection.scrollHeight;
            const scrollTop = textSection.scrollTop;
            const clientHeight = textSection.clientHeight;
            
            // Si on est à moins de 50px de la fin
            if (scrollHeight - scrollTop - clientHeight < 50) {
                console.log('📖 Fin du chapitre atteinte, passage au suivant...');
                setTimeout(() => {
                    displayChapter(currentChapter + 1);
                }, 1000); // Délai de 1s avant transition
            }
        }, 150); // Attendre 150ms après l'arrêt du scroll
    });
    
    mainContainer.appendChild(textSection);
    
    if (chapter.images?.length) {
        const imageSection = document.createElement('div');
        imageSection.className = 'image-section-right';
        
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'images-container-fixed';
        
        chapter.images.forEach(img => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'image-container-fixed';
            imgContainer.innerHTML = `<img src="${img.src}" class="story-image-fixed"><div class="image-subtitle">${img.subtitle}</div>`;
            imagesContainer.appendChild(imgContainer);
        });
        
        imageSection.appendChild(imagesContainer);
        mainContainer.appendChild(imageSection);
    }
    
    container.appendChild(mainContainer);
    
    if (currentChapter === 2 || currentChapter === 3) {
        createReadingModeToggle();
    }
}

// ===== VIDÉO CHAPITRE =====
function displayVideoChapter(chapter) {
    const videoContainer = document.createElement('div');
    videoContainer.id = 'chapter-video-container';
    
    const video = document.createElement('video');
    video.src = chapter.video.src;
    video.style.cssText = `width: 100%; height: 100%; object-fit: cover;`;
    video.autoplay = true;
    
    // GARDER LA NAVIGATION VISIBLE
    const nav = document.getElementById('chapter-navigation');
    if (nav) nav.style.display = 'flex';
    
    // AJOUTER BOUTON SKIP
    const skipButton = document.createElement('button');
    skipButton.id = 'skip-video-button';
    skipButton.textContent = 'SKIP';
    skipButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 10001;
        background: transparent;
        border: 2px solid white;
        color: white;
        padding: 12px 30px;
        font-size: 16px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    skipButton.onmouseenter = () => skipButton.style.background = 'rgba(255, 255, 255, 0.2)';
    skipButton.onmouseleave = () => skipButton.style.background = 'transparent';
    
    let transitionDone = false;
    
    skipButton.onclick = () => {
        if (transitionDone) return;
        transitionDone = true;
        video.pause();
        skipButton.remove();
        videoContainer.remove();
        displayEndPage();
    };
    
    video.onended = () => {
        if (transitionDone) return;
        transitionDone = true;
        skipButton.remove();
        videoContainer.remove();
        displayEndPage();
    };
    
    videoContainer.appendChild(video);
    document.body.appendChild(videoContainer);
    document.body.appendChild(skipButton);
}

// ===== PAGE DE FIN =====
function displayEndPage() {
    currentChapter = 6;
    
    // NETTOYER TOUS LES ÉLÉMENTS
    ['chapter-content', 'chapter-video-container', 'panorama-container', 'full-page-gradient', 
     'particle-canvas', 'text-scroll-container', 'panorama-subtitle-container', 
     'reading-mode-toggle', 'skip-intro-button', 'skip-video-button', 
     'world-state-display', 'time-display'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
    
    // Masquer la vidéo intro
    const introContainer = document.getElementById('intro-video-container');
    if (introContainer) introContainer.style.display = 'none';
    
    // NE PAS ARRÊTER L'AUDIO
    // const introAudio = document.getElementById('intro-audio');
    // if (introAudio) introAudio.pause();
    
    updateChapterNavigation();
    
    const endPage = document.createElement('div');
    endPage.id = 'end-page';
    endPage.style.cssText = `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        background: white; 
        z-index: 10000; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center;
    `;
    
    endPage.innerHTML = `
        <div style="font-family: Georgia, serif; font-size: 32px; font-style: italic; margin-bottom: 60px;">Merci pour la lecture</div>
        <div style="font-family: Arial, sans-serif; font-size: 18px; text-align: center; line-height: 1.6;">
            Coline Jousset<br>DSAA 2 Numérique<br><br>
            <span style="font-size: 12px; opacity: 0.8;">
                ENSAAMA Olivier de Serres, Novembre 2025<br><br>
                Sources Audio : Hans Zimmer - Interstellar BO<br>
                Sources Vidéo : Interstellar, Christopher Nolan, 2014<br><br>
                <a href="https://docs.google.com/document/d/1kYcV186RWo1c_o4bFzit8ihoiKo_Mh2gqQsgnGs-ZTc/edit?usp=sharing" target="_blank" style="color: #333; text-decoration: underline;">
                    Accès à la version rédigée du texte (Google Drive)
                </a>
            </span>
        </div>
    `;
    
    document.body.appendChild(endPage);
    
    console.log('✅ Page de fin affichée');
}

// ===== NAVIGATION =====
function createChapterNavigation() {
    const oldNav = document.getElementById('chapter-navigation');
    if (oldNav) oldNav.remove();
    
    const nav = document.createElement('div');
    nav.id = 'chapter-navigation';
    nav.innerHTML = `<button id="prev-chapter" class="nav-arrow">←</button><div id="chapter-dots"></div><button id="next-chapter" class="nav-arrow">→</button>`;
    document.body.appendChild(nav);
    
    const dotsContainer = document.getElementById('chapter-dots');
    const dotActions = [
        () => displayChapter(1),
        () => displayChapter(2),
        () => displayChapter(3),
        () => displayChapter(4),
        () => displayChapter(5),
        () => displayEndPage()
    ];
    
    for (let i = 0; i < 6; i++) {
        const dot = document.createElement('div');
        dot.className = 'chapter-dot';
        if (i + 1 === currentChapter) dot.classList.add('active');
        dot.onclick = dotActions[i];
        dotsContainer.appendChild(dot);
    }
    
    document.getElementById('prev-chapter').onclick = () => {
        if (currentChapter > 1) displayChapter(currentChapter === 6 ? 5 : currentChapter - 1);
    };
    
    document.getElementById('next-chapter').onclick = () => {
        if (currentChapter < 5) displayChapter(currentChapter + 1);
        else if (currentChapter === 5) displayEndPage();
    };
    
    updateChapterNavigation();
}

function updateChapterNavigation() {
    document.querySelectorAll('.chapter-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i + 1 === currentChapter);
    });
}

// ===== WORLD STATE & TIMER =====
function createWorldStateDisplay() {
    const display = document.createElement('div');
    display.id = 'world-state-display';
    display.innerHTML = `
        <div class="state-section"><div class="state-label">POPULATION</div><div id="population-counter" class="state-value">800,000</div></div>
        <div class="state-section"><div class="state-label">HUMIDITY</div><div id="humidity-level" class="state-value">0.02%</div></div>
        <div class="state-section"><div class="state-label">TEMP</div><div id="temperature-level" class="state-value">42.5°C</div></div>
        <div class="state-section"><div class="state-label">DUST</div><div id="dust-level" class="state-value">89.7%</div></div>
    `;
    document.body.appendChild(display);
}

function startWorldStateMonitoring() {
    if (worldStateInterval) clearInterval(worldStateInterval);
    worldStateInterval = setInterval(() => {
        worldState.population = Math.max(0, worldState.population - Math.floor(Math.random() * 5));
        worldState.temperature += (Math.random() * 0.1 - 0.05);
        worldState.humidity += (Math.random() * 0.002 - 0.001);
        worldState.dustLevel += (Math.random() * 0.05 - 0.02);
        
        document.getElementById('population-counter').textContent = worldState.population.toLocaleString();
        document.getElementById('temperature-level').textContent = `${worldState.temperature.toFixed(1)}°C`;
        document.getElementById('humidity-level').textContent = `${worldState.humidity.toFixed(2)}%`;
        document.getElementById('dust-level').textContent = `${worldState.dustLevel.toFixed(1)}%`;
    }, 3000);
}

function createTimeDisplay() {
    const display = document.createElement('div');
    display.id = 'time-display';
    display.innerHTML = `<div><span class="time-label">TERRE</span><span id="earth-counter">00:00:00</span></div><div><span class="time-label">MILLER</span><span id="miller-counter">0j 00h</span></div>`;
    document.body.appendChild(display);
}

function startTimers() {
    setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const h = Math.floor(elapsed / 3600);
        const m = Math.floor((elapsed % 3600) / 60);
        const s = elapsed % 60;
        document.getElementById('earth-counter').textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        
        const millerHours = elapsed * 17;
        const days = Math.floor(millerHours / 24);
        const hours = millerHours % 24;
        document.getElementById('miller-counter').textContent = `${days}j ${String(hours).padStart(2, '0')}h`;
    }, 1000);
}

// ===== TOGGLE LECTURE =====
function createReadingModeToggle() {
    const toggle = document.createElement('div');
    toggle.id = 'reading-mode-toggle';
    toggle.style.cssText = `
        position: fixed; 
        bottom: 30px; 
        left: 30px; 
        z-index: 10000; 
        display: flex; 
        gap: 15px; 
        background: rgba(255, 255, 255, 0.8);
        border-radius: 40px; 
        padding: 12px 18px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    toggle.innerHTML = `
        <button id="mode-H" style="background: transparent; border: none; cursor: pointer; padding: 8px;"><img src="../../Hn.png" style="width: 28px; opacity: 1;"></button>
        <button id="mode-L" style="background: transparent; border: none; cursor: pointer; padding: 8px;"><img src="../../Lg.png" style="width: 28px; opacity: 0.4;"></button>
    `;
    
    document.body.appendChild(toggle);
    
    let mode = 'H';
    let interval = null;
    
    document.getElementById('mode-H').onclick = () => {
        if (mode === 'H') return;
        mode = 'H';
        
        // Changer les images
        document.querySelector('#mode-H img').src = '../../Hn.png';
        document.querySelector('#mode-H img').style.opacity = '1';
        document.querySelector('#mode-L img').src = '../../Lg.png';
        document.querySelector('#mode-L img').style.opacity = '0.4';
        
        startKaraoke();
    };
    
    document.getElementById('mode-L').onclick = () => {
        if (mode === 'L') return;
        mode = 'L';
        
        // Changer les images
        document.querySelector('#mode-L img').src = '../../Ln.png';
        document.querySelector('#mode-L img').style.opacity = '1';
        document.querySelector('#mode-H img').src = '../../Hg';
        document.querySelector('#mode-H img').style.opacity = '0.4';
        
        if (interval) clearInterval(interval);
        document.querySelector('.text-container p').innerHTML = chapters[currentChapter].text;
    };
    
    function startKaraoke() {
        const p = document.querySelector('.text-container p');
        p.innerHTML = chapters[currentChapter].text;
        
        const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) if (node.textContent.trim()) textNodes.push(node);
        
        textNodes.forEach(textNode => {
            const words = textNode.textContent.split(/(\s+)/);
            const fragment = document.createDocumentFragment();
            words.forEach(word => {
                if (word.trim()) {
                    const span = document.createElement('span');
                    span.className = 'word-span';
                    span.textContent = word;
                    span.style.opacity = '0.15';
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word));
                }
            });
            textNode.parentNode.replaceChild(fragment, textNode);
        });
        
        const allWords = p.querySelectorAll('.word-span');
        let index = 0;
        
        function update() {
            if (index >= allWords.length) index = 0;

            
            allWords.forEach((word, i) => {
                const dist = i - index;
                let op = 0.05;
                if (dist < 0) op = dist >= -5 ? 1 - Math.abs(dist) / 5 * 0.95 : 0.05;
                else if (dist === 0) op = 1;
                else if (dist <= 10) op = 1;
                else if (dist <= 15) op = 1 - (dist - 10) / 5 * 0.85;
                else op = 0.15;
                word.style.opacity = op;
            });
            index++;
        }
        
        // AJOUTER LE DÉLAI DE 2 SECONDES
        if (interval) clearInterval(interval);
        
        setTimeout(() => {
            interval = setInterval(update, 250);
            update(); // Premier update immédiat après le délai
        }, 2000); // Délai de 2 secondes (2000ms)
    }
    
    setTimeout(startKaraoke, 0); // 2100ms au lieu de 100ms (2s de délai + 100ms de sécurité)
}

// ===== PANORAMA (code existant conservé) =====
function displayPanoramaChapter(chapter) {
    console.log('🎬 Affichage chapitre panorama');
    
    const nav = document.getElementById('chapter-navigation');
    if (nav) nav.style.display = 'flex';
    
    // Nettoyer les anciens listeners
    const oldTextSection = document.getElementById('scrollable-text-section');
    if (oldTextSection) {
        const clonedSection = oldTextSection.cloneNode(true);
        oldTextSection.parentNode?.replaceChild(clonedSection, oldTextSection);
    }
    
    const contentContainer = document.getElementById('chapter-content');
    if (contentContainer) {
        contentContainer.innerHTML = '';
        contentContainer.style.display = 'flex';
    }
    
    const existingWorldState = document.getElementById('world-state-display');
    const existingTimeDisplay = document.getElementById('time-display');
    
    if (existingWorldState) existingWorldState.style.display = 'flex';
    
    if (chapter.showTimeDisplay) {
        if (!existingTimeDisplay) {
            createTimeDisplay();
            startTimers();
        } else {
            existingTimeDisplay.style.display = 'flex';
        }
    }
    
    const worldStateHeight = 120;
    const topMargin = 200;
    const bottomMargin = 100;
    const availableHeight = window.innerHeight - topMargin - bottomMargin;
    
    // Canvas particules
    const particleCanvas = document.createElement('canvas');
    particleCanvas.id = 'particle-canvas';
    particleCanvas.style.cssText = `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9000; pointer-events: none; opacity: 0; transition: opacity 2s ease;`;
    document.body.appendChild(particleCanvas);
    
    const ctx = particleCanvas.getContext('2d');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    
    const PARTICLE_CONFIG = {
        count: 500,
        minSize: 0.1,
        maxSize: 1,
        minSpeed: 1,
        maxSpeed: 4,
        minOpacity: 0.2,
        maxOpacity: 0.8,
        verticalVariation: 0.3,
        speedMultiplierMax: 8
    };
    
    const particles = [];
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.baseVx = -(PARTICLE_CONFIG.minSpeed + Math.random() * (PARTICLE_CONFIG.maxSpeed - PARTICLE_CONFIG.minSpeed));
            this.vx = this.baseVx;
            this.vy = (Math.random() - 0.5) * PARTICLE_CONFIG.verticalVariation;
            this.size = PARTICLE_CONFIG.minSize + Math.random() * (PARTICLE_CONFIG.maxSize - PARTICLE_CONFIG.minSize);
            this.opacity = PARTICLE_CONFIG.minOpacity + Math.random() * (PARTICLE_CONFIG.maxOpacity - PARTICLE_CONFIG.minOpacity);
        }
        
        updateSpeed(speedMultiplier) {
            this.vx = this.baseVx * speedMultiplier;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < -50) {
                this.x = particleCanvas.width + 50;
                this.y = Math.random() * particleCanvas.height;
            }
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
        particles.push(new Particle());
    }
    
    let animationRunning = false;
    let currentSpeedMultiplier = 1;
    
    function animateParticles() {
        if (!animationRunning) return;
        
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        
        particles.forEach(particle => {
            particle.updateSpeed(currentSpeedMultiplier);
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    // Dégradé
    const fullPageOverlay = document.createElement('div');
    fullPageOverlay.id = 'full-page-gradient';
    fullPageOverlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: white; z-index: 95; pointer-events: none; transition: background-color 0.5s ease;`;
    document.body.appendChild(fullPageOverlay);
    
    // Conteneur panorama
    const panoramaContainer = document.createElement('div');
    panoramaContainer.id = 'panorama-container';
    panoramaContainer.style.cssText = `position: fixed; top: ${topMargin}px; left: 0; width: 100vw; height: ${availableHeight}px; overflow: hidden; z-index: 96; background: transparent !important;`;
    
    const bande = document.createElement('div');
    bande.className = 'panorama-band';
    bande.style.cssText = `position: relative; height: 100%; display: flex; align-items: flex-start; will-change: transform; transition: transform 0.1s ease-out; background: transparent !important;`;
    
    // Textes défilants
    const textScrollContainer = document.createElement('div');
    textScrollContainer.id = 'text-scroll-container';
    textScrollContainer.style.cssText = `position: fixed; top: 50%; left: 0; transform: translateY(-50%); width: 100vw; height: auto; z-index: 99; pointer-events: none; display: flex; gap: ${window.innerWidth * 0.6}px; will-change: transform; padding-left: ${window.innerWidth * 0.3}px;`;
    
    const loremTexts = [
        { text: "Le temps, dans Interstellar, n'est pas une constante universelle mais une dimension malléable, courbée par la gravité et fragmentée entre les mondes. Christopher Nolan transforme une théorie d'astrophysique en expérience émotionnelle brute." },
        { text: "Sur la planète Miller, une heure équivaut à sept années terrestres. Le spectateur ressent physiquement le poids du temps perdu, l'angoisse d'un père qui voit sa fille vieillir à distance, prisonnière d'une physique implacable." },
        { text: "Le tesseract matérialise l'impossible : un espace où passé, présent et futur coexistent. Cooper traverse les dimensions pour communiquer avec sa fille à travers le temps, utilisant la gravité comme seul langage universel." },
        { text: "Cette représentation visuelle du continuum espace-temps traduit les théories de Kip Thorne en une métaphore du lien paternel. La science devient affect, la physique devient amour." }
    ];

    loremTexts.forEach((textData, index) => {
        const textBlock = document.createElement('div');
        textBlock.className = 'scroll-text-block';
        textBlock.style.cssText = `min-width: 600px; max-width: 700px; padding: 0; background: transparent; opacity: 0; transition: opacity 0.5s ease;`;
        textBlock.innerHTML = `<p style="margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 22px; line-height: 1.8; color: #333; font-weight: 300; letter-spacing: 0.3px;">${textData.text}</p>`;
        textScrollContainer.appendChild(textBlock);
    });

    document.body.appendChild(textScrollContainer);
    
    // Sous-titres
    const subtitleContainer = document.createElement('div');
    subtitleContainer.id = 'panorama-subtitle-container';
    subtitleContainer.style.cssText = `position: fixed; bottom: 60px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1000px; text-align: center; z-index: 100; opacity: 0; transition: opacity 0.8s ease; pointer-events: none;`;
    
    const subtitle = document.createElement('p');
    subtitle.id = 'panorama-subtitle-text';
    subtitle.style.cssText = `margin: 0; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 18px; line-height: 1.6; color: #333; font-weight: 300; letter-spacing: 0.5px;`;
    subtitle.textContent = '';
    
    subtitleContainer.appendChild(subtitle);
    document.body.appendChild(subtitleContainer);
    
    const panoramaSubtitles = [
        { text: "La dilatation temporelle devient palpable, chaque seconde compte double...", duration: 4 },
        { text: "Entre deux mondes, le temps se fragmente et se distord.", duration: 3 },
        { text: "Dans le tesseract, toutes les temporalités coexistent simultanément.", duration: 4 },
        { text: "La gravité transcende les dimensions, seul vecteur de communication.", duration: 4 },
        { text: "Le passé, le présent et le futur ne font qu'un dans cet espace-temps courbé.", duration: 5 }
    ];
    
    let subtitleIndex = 0;
    let subtitleTimer = null;
    
    function displayNextSubtitle() {
        if (subtitleIndex >= panoramaSubtitles.length) {
            subtitleContainer.style.opacity = '0';
            return;
        }
        
        const currentSubtitle = panoramaSubtitles[subtitleIndex];
        subtitle.textContent = currentSubtitle.text;
        subtitleContainer.style.opacity = '1';
        
        const brightness = parseInt(fullPageOverlay.style.backgroundColor.match(/\d+/)[0]);
        subtitle.style.color = brightness < 128 ? 'white' : '#333';
        
        setTimeout(() => {
            subtitleContainer.style.opacity = '0';
            setTimeout(() => {
                subtitleIndex++;
                displayNextSubtitle();
            }, 1000);
        }, currentSubtitle.duration * 1000);
    }
    
    let imagesLoaded = 0;
    let totalWidth = 0;
    let scrollPosition = 0;
    let pano1EndPosition = 0;
    let pano2StartPosition = 0;
    let pano3EndPosition = 0;
    let isAutoScrolling = false;
    let autoScrollSpeed = 20;

    const heightRatios = [1/5, 3/5, 5/5];
    
    chapter.panoramas.forEach((panoramaData, index) => {
        const img = document.createElement('img');
        img.src = panoramaData.src;
        img.style.cssText = `height: auto; width: auto; display: block; align-self: flex-start; background: transparent !important; ${index === 2 ? `margin-left: -${panoramaData.overlapAmount}px;` : ''}`;
        
        img.onload = () => {
            imagesLoaded++;
            
            if (imagesLoaded === chapter.panoramas.length) {
                bande.children[0].style.height = `${availableHeight * heightRatios[0]}px`;
                bande.children[1].style.height = `${availableHeight * heightRatios[1]}px`;
                bande.children[2].style.height = `${availableHeight * heightRatios[2]}px`;
                
                const img1Width = bande.children[0].offsetWidth;
                const img2Width = bande.children[1].offsetWidth;
                const img3Width = bande.children[2].offsetWidth;
                
                pano1EndPosition = img1Width;
                pano2StartPosition = img1Width;
                totalWidth = img1Width + img2Width + img3Width - chapter.panoramas[2].overlapAmount;
                pano3EndPosition = totalWidth;
                
                const extraBlackSpace = window.innerWidth * 2;
                const finalScrollEnd = totalWidth + extraBlackSpace;
                
                animationRunning = true;
                animateParticles();
                
                function updatePanoramaPosition() {
                    bande.style.transform = `translateX(-${scrollPosition}px)`;
                    
                    if (scrollPosition <= pano1EndPosition) {
                        const textBlocks = textScrollContainer.querySelectorAll('.scroll-text-block');
                        const screenWidth = window.innerWidth;
                        const leftFadeZone = 200;
                        const rightFadeStart = screenWidth * (2/3);
                        
                        textBlocks.forEach((block, index) => {
                            const blockPosition = (window.innerWidth * 0.3) + (index * (window.innerWidth * 0.6 + 650)) - (scrollPosition * 0.65);
                            let opacity = 0;
                            
                            if (blockPosition < leftFadeZone) {
                                opacity = 0;
                            } else if (blockPosition >= leftFadeZone && blockPosition <= rightFadeStart) {
                                opacity = 1;
                            } else if (blockPosition > rightFadeStart) {
                                const distanceInFadeZone = blockPosition - rightFadeStart;
                                const fadeZoneWidth = screenWidth - rightFadeStart;
                                opacity = Math.max(0, 1 - (distanceInFadeZone / fadeZoneWidth));
                            }
                            
                            block.style.opacity = opacity;
                        });
                        
                        textScrollContainer.style.transform = `translateX(-${scrollPosition * 0.65}px) translateY(-50%)`;
                        subtitleContainer.style.opacity = '0';
                    } else {
                        textScrollContainer.style.opacity = '0';
                        
                        if (!subtitleTimer && subtitleIndex === 0) {
                            displayNextSubtitle();
                            subtitleTimer = true;
                        }
                    }
                    
                    const gradientStart = pano2StartPosition + (img2Width * 0.2);
                    const gradientEnd = pano3EndPosition * 0.8;
                    const gradientProgress = Math.max(0, Math.min(1, (scrollPosition - gradientStart) / (gradientEnd - gradientStart)));
                    
                    const brightness = Math.floor(255 * (1 - gradientProgress));
                    fullPageOverlay.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
                    subtitle.style.color = brightness < 128 ? 'white' : '#333';
                    
                    const pano2Progress = Math.max(0, (scrollPosition - pano1EndPosition) / img2Width);

                    if (scrollPosition > pano1EndPosition) {
                        particleCanvas.style.opacity = `${Math.min(pano2Progress * 2, 1)}`;
                        currentSpeedMultiplier = 1 + (gradientProgress * PARTICLE_CONFIG.speedMultiplierMax);
                    } else {
                        particleCanvas.style.opacity = '0';
                    }
                    
                    const blackScreenProgress = (scrollPosition - totalWidth) / extraBlackSpace;
                    
                    if (blackScreenProgress >= 0.95 && !panoramaContainer.dataset.transitioned) {
                        panoramaContainer.dataset.transitioned = 'true';
                        
                        if (subtitleTimer) clearTimeout(subtitleTimer);
                        
                        const transitionOverlay = document.createElement('div');
                        transitionOverlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: black; z-index: 9500; opacity: 0; transition: opacity 1s ease-in-out;`;
                        document.body.appendChild(transitionOverlay);
                        
                        setTimeout(() => transitionOverlay.style.opacity = '1', 100);
                        
                        setTimeout(() => {
                            if (panoramaContainer.wheelListener) {
                                window.removeEventListener('wheel', panoramaContainer.wheelListener);
                            }
                            animationRunning = false;
                            isAutoScrolling = false;
                            textScrollContainer.remove();
                            subtitleContainer.remove();
                            panoramaContainer.remove();
                            fullPageOverlay.remove();
                            particleCanvas.remove();
                            
                            displayChapter(5);
                            setTimeout(() => {
                                transitionOverlay.style.opacity = '0';
                                setTimeout(() => transitionOverlay.remove(), 1000);
                            }, 500);
                        }, 1000);
                    }
                }
                
                const handleWheel = (e) => {
                    e.preventDefault();
                    
                    if (!isAutoScrolling) {
                        scrollPosition += e.deltaY * 2;
                        scrollPosition = Math.max(0, Math.min(scrollPosition, finalScrollEnd));
                        updatePanoramaPosition();
                        
                        if (scrollPosition >= pano1EndPosition * 0.95) {
                            isAutoScrolling = true;
                            window.removeEventListener('wheel', wheelListener);
                            autoScroll();
                        }
                    }
                };
                
                const wheelListener = (e) => handleWheel(e);
                window.addEventListener('wheel', wheelListener, { passive: false });
                panoramaContainer.wheelListener = wheelListener;
                window.panoramaWheelListener = wheelListener;
                
                function autoScroll() {
                    if (isAutoScrolling && scrollPosition < finalScrollEnd) {
                        scrollPosition += autoScrollSpeed;
                        scrollPosition = Math.min(scrollPosition, finalScrollEnd);
                        updatePanoramaPosition();
                        requestAnimationFrame(autoScroll);
                    }
                }
            }
        };
        
        bande.appendChild(img);
    });
    
    panoramaContainer.appendChild(bande);
    document.body.appendChild(panoramaContainer);
}