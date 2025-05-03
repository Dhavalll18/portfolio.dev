document.addEventListener('DOMContentLoaded', function() {
    // Role cycling animation
    const roles = [
      "Full Stack Developer",
      "UI/UX Designer",
      "Cloud Architect",
      "DevOps Engineer",
      "System Architect"
    ];
    const roleText = document.getElementById('role-text');
    let currentRoleIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;
  
    function typeEffect() {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        currentText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      roleText.textContent = currentText;
      roleText.classList.add('role-cursor');
      let typeSpeed = isDeleting ? 50 : 100;
      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeSpeed = 500;
      }
      setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();
  
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    // Check for saved theme preference or use user's system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      body.classList.remove('light');
      body.classList.add('dark');
      themeToggle.checked = true;
    }
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // GitHub Modal Functionality
    const githubModal = document.getElementById('github-modal');
    const githubModalTechStack = document.getElementById('github-modal-tech-stack');
    const githubModalFeatures = document.getElementById('github-modal-features');
    const projectGithubData = {
      'project-1': {
        techStack: 'React, Node.js, MongoDB, Redux, Express.js',
        features: 'Real-time inventory management, payment processing integration, analytics dashboard, user authentication'
      },
      'project-2': {
        techStack: 'Flutter, Firebase, TensorFlow Lite, SQLite',
        features: 'Machine learning-based workout recommendations, real-time progress tracking, social features, offline support'
      },
      'project-3': {
        techStack: 'Vue.js, Laravel, PostgreSQL, WebSocket',
        features: 'Real-time collaboration, customizable workflows, resource management, team communication'
      },
      'project-4': {
        techStack: 'React, Express.js, MQTT, WebSocket',
        features: 'IoT device integration, automation rules engine, energy monitoring, voice control support'
      },
      'project-5': {
        techStack: 'Angular, NestJS, MongoDB, WebRTC',
        features: 'Speech recognition, adaptive learning algorithms, progress tracking, peer-to-peer practice sessions'
      },
      'project-6': {
        techStack: 'React, Django, D3.js, PostgreSQL',
        features: 'Real-time market data integration, portfolio tracking, predictive analytics, custom alerts'
      }
    };
  
    document.querySelectorAll('.github-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = link.getAttribute('data-project-id');
        const project = projectGithubData[projectId];
        githubModalTechStack.textContent = project.techStack;
        githubModalFeatures.textContent = project.features;
        githubModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });
  
    document.querySelectorAll('.close-github-modal').forEach(button => {
      button.addEventListener('click', () => {
        githubModal.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  
    githubModal.addEventListener('click', (e) => {
      if (e.target === githubModal) {
        githubModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  
    // Demo Modal Functionality
    const demoModal = document.getElementById('demo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const projectData = {
      'project-1': {
        title: 'E-commerce Platform',
        image: 'https://readdy.ai/api/search-image?query=A%20modern%20e-commerce%20dashboard%20interface%20with%20clean%20design%2C%20showing%20analytics%20graphs%2C%20product%20management%20panels%2C%20and%20sales%20statistics.%20The%20interface%20has%20a%20professional%20look%20with%20a%20light%20color%20scheme%20and%20organized%20data%20visualization.&width=1280&height=720&seq=131&orientation=landscape',
        description: 'This e-commerce platform features a robust admin dashboard with real-time analytics, inventory management, and order processing capabilities. The system includes advanced features such as dynamic pricing, automated inventory alerts, and comprehensive reporting tools.'
      },
      'project-2': {
        title: 'Fitness Tracker App',
        image: 'https://readdy.ai/api/search-image?query=A%20mobile%20fitness%20application%20interface%20showing%20workout%20tracking%20screens%2C%20progress%20charts%2C%20and%20personalized%20fitness%20plans.%20The%20app%20has%20a%20modern%2C%20clean%20design%20with%20health%20metrics%20and%20activity%20tracking%20features%20prominently%20displayed.&width=1280&height=720&seq=132&orientation=landscape',
        description: 'The fitness tracking application provides personalized workout plans, progress tracking, and nutrition guidance. It integrates with wearable devices and uses machine learning to adapt recommendations based on user performance and goals.'
      },
      'project-3': {
        title: 'Project Management Tool',
        image: 'https://readdy.ai/api/search-image?query=A%20collaborative%20project%20management%20tool%20interface%20showing%20kanban%20boards%2C%20task%20assignments%2C%20team%20communication%20features%2C%20and%20project%20timelines.%20The%20interface%20has%20a%20clean%2C%20organized%20layout%20with%20color-coded%20tasks%20and%20team%20member%20avatars.&width=1280&height=720&seq=133&orientation=landscape',
        description: 'This comprehensive project management solution offers real-time collaboration features, customizable workflows, and detailed analytics. Teams can track progress, manage resources, and communicate effectively through an intuitive interface.'
      },
      'project-4': {
        title: 'Smart Home Dashboard',
        image: 'https://readdy.ai/api/search-image?query=A%20smart%20home%20automation%20system%20interface%20showing%20connected%20devices%2C%20room%20controls%2C%20energy%20usage%20statistics%2C%20and%20automation%20schedules.%20The%20interface%20has%20a%20modern%20design%20with%20device%20status%20indicators%20and%20interactive%20controls.&width=1280&height=720&seq=134&orientation=landscape',
        description: 'The smart home control system provides centralized management of connected devices, energy monitoring, and automated routines. Users can create custom scenarios, monitor usage patterns, and control their home environment remotely.'
      },
      'project-5': {
        title: 'Language Learning App',
        image: 'https://readdy.ai/api/search-image?query=A%20language%20learning%20application%20interface%20showing%20lesson%20modules%2C%20vocabulary%20practice%2C%20conversation%20exercises%2C%20and%20progress%20tracking.%20The%20interface%20has%20an%20engaging%2C%20educational%20design%20with%20interactive%20language%20learning%20elements.&width=1280&height=720&seq=135&orientation=landscape',
        description: 'This innovative language learning platform combines AI-powered speech recognition, adaptive learning paths, and interactive exercises. Users can practice with native speakers and track their progress through comprehensive analytics.'
      },
      'project-6': {
        title: 'Financial Analytics Dashboard',
        image: 'https://readdy.ai/api/search-image?query=A%20financial%20analytics%20dashboard%20showing%20investment%20portfolio%20tracking%2C%20market%20trends%2C%20stock%20performance%20charts%2C%20and%20financial%20planning%20tools.%20The%20interface%20has%20a%20professional%2C%20data-rich%20design%20with%20financial%20metrics%20and%20visualization%20tools.&width=1280&height=720&seq=136&orientation=landscape',
        description: 'The financial analytics platform provides comprehensive portfolio management, market analysis, and predictive modeling tools. Users can track investments, analyze trends, and make data-driven financial decisions.'
      }
    };
  
    document.querySelectorAll('.demo-link').forEach((link, index) => {
      link.setAttribute('data-project-id', `project-${index + 1}`);
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = link.getAttribute('data-project-id');
        const project = projectData[projectId];
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = `${project.title} Demo`;
        modalDescription.textContent = project.description;
        demoModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });
  
    const closeModalFunction = () => {
      demoModal.classList.add('hidden');
      document.body.style.overflow = '';
    };
  
    closeModal.addEventListener('click', closeModalFunction);
    modalCloseBtn.addEventListener('click', closeModalFunction);
  
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModalFunction();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !demoModal.classList.contains('hidden')) {
        closeModalFunction();
      }
    });
  
    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const consent = document.getElementById('consent').checked;
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      if (!consent) {
        alert('Please provide consent to be contacted.');
        return;
      }
      // Simulate form submission
      const messageDiv = document.createElement('div');
      messageDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50';
      messageDiv.textContent = `Thank you for your message, ${name}! I'll get back to you soon.`;
      document.body.appendChild(messageDiv);
      setTimeout(() => messageDiv.remove(), 3000);
      contactForm.reset();
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-value');
    const animateProgressBars = () => {
      progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (barPosition < screenPosition) {
          const width = bar.parentElement.getAttribute('data-width') || bar.style.width;
          bar.style.width = width;
        }
      });
    };
    // Set initial width to 0
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.parentElement.setAttribute('data-width', width);
      bar.style.width = '0';
    });
    // Trigger animation on scroll
    window.addEventListener('scroll', animateProgressBars);
    // Trigger once on load
    animateProgressBars();
  });