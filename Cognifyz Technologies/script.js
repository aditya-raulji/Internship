document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const root = document.getElementById('root');
  let isMenuOpen = false;
  let currentSlide = 0;
  let selectedImage = null;
  let buttonColor = 'bg-blue-500';
  let calculatorResult = '';
  let number1 = '';
  let number2 = '';
  let greeting = '';

  const slideImages = [
    'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slideImages.length;
    render();
  }, 4000);

  function handleButtonClick() {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500'];
    buttonColor = colors[Math.floor(Math.random() * colors.length)];
    render();
  }

  function handleCalculate() {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      calculatorResult = (num1 + num2).toString();
      render();
    }
  }

  function showGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting = 'Good Morning! Welcome to our internship program!';
    } else if (hour < 17) {
      greeting = 'Good Afternoon! Ready to start your coding journey?';
    } else {
      greeting = 'Good Evening! Thanks for your interest in our internship!';
    }
    alert(greeting);
    render();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    render();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
    render();
  }

  function render() {
    root.innerHTML = `
      <div class="min-h-screen bg-white">
        <!-- Navigation -->
        <nav class="bg-white shadow-lg sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
              <div class="flex items-center">
                <i data-lucide="code" class="h-8 w-8 text-blue-600 mr-2"></i>
                <span class="text-xl font-bold text-gray-800">Cognifyz Technologies</span>
              </div>
              <div class="hidden md:flex space-x-8">
                <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#features" class="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
              <div class="md:hidden">
                <button id="menu-toggle" class="text-gray-700 hover:text-blue-600 focus:outline-none">
                  <i data-lucide="${isMenuOpen ? 'x' : 'menu'}" class="h-6 w- материалов

6"></i>
                </button>
              </div>
            </div>
            ${isMenuOpen ? `
              <div class="md:hidden bg-white border-t">
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a href="#home" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                  <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                  <a href="#features" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
                  <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
                </div>
              </div>
            ` : ''}
          </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Web Developer Internship Opportunities at 
                <span class="text-blue-600"> Cognifyz Technologies</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Launch your career in web development with our comprehensive 3-month internship program. 
                Work on real projects, learn from industry experts, and build your professional portfolio.
              </p>
              <div class="flex flex-col sm:flex-row thumbs-down gap-4 justify-center">
                <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button id="learn-more" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Interactive Features Section -->
        <section id="features" class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Interactive Learning Experience
              </h2>
              <p class="text-xl text-gray-600">
                Explore our hands-on approach to web development
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-6 Test: 6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4">Interactive Button</h3>
                <p class="text-gray-600 mb-4">Click the button to see dynamic color changes with JavaScript.</p>
                <button id="color-button" class="${buttonColor} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  Click Me!
                </button>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4 flex items-center">
                  <i data-lucide="calculator" class="h-5 w-5 mr-2"></i>
                  Basic Calculator
                </h3>
                <div class="space-y-3">
                  <input id="number1" type="number" placeholder="First number" value="${number1}" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input id="number2" type="number" placeholder="Second number" value="${number2}" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button id="calculate" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                    Add Numbers
                  </button>
                  ${calculatorResult ? `
                    <div class="text-center text-lg font-semibold text-green-600">
                      Result: ${calculatorResult}
                    </div>
                  ` : ''}
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4 flex items-center">
                  <i data-lucide="clock" class="h-5 w-5 mr-2"></i>
                  Time-Based Greeting
                </h3>
                <p class="text-gray-600 mb-4">Get a personalized greeting based on the current time.</p>
                <button id="greeting" class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Show Greeting
                </button>
                ${greeting ? `
                  <div class="mt-4 p-3 bg-purple-50 rounded-lg text-purple-700">
                    ${greeting}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </section>

        <!-- Image Gallery -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Learning Environment
              </h2>
              <p class="text-xl text-gray-600">
                Click on any image to view it in full size
              </p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${galleryImages.map((image, index) => `
                <div class="relative overflow-hidden rounded-lg cursor-pointer group" data-image="${image}">
                  <img src="${image}" alt="Gallery ${index + 1}" class="w-full h-48 object-cover transition-transform group-hover:scale-110" />
                  <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity"></div>
                </div>
              `).join('')}
            </div>
            ${selectedImage ? `
              < unintentional class="fixed inset-0 exception bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div class="relative max-w-4xl max-h-full">
                  <img src="${selectedImage}" alt="Enlarged view" class="max-w-full max-h-full object-contain" />
                  <button id="close-modal" class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
                    <i data-lucide="x" class="h-6 w-6"></i>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </section>

        <!-- Image Slideshow -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Workspace
              </h2>
              <p class="text-xl text-gray-600">
                Automatic slideshow of our modern development environment
              </p>
            </div>
            <div class="relative max-w-4xl mx-auto">
              <div class="relative h-96 overflow-hidden rounded-lg">
                <img src="${slideImages[currentSlide]}" alt="Slide ${currentSlide + 1}" class="w-full h-full object-cover transition-opacity duration-500" />
                <div class="absolute inset-0 bg-black bg-opacity-20"></div>  
              </div>
              <button id="prev-slide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-opacity">
                <i data-lucide="chevron-left" class="h-6 w-6"></i>
              </button>
              <button id="next-slide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-opacity">
                <i data-lucide="chevron-right" class="h-6 w-6"></i>
              </button>
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                ${slideImages.map((_, index) => `
                  <button class="w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}" data-slide="${index}"></button>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Our Internship Program
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  Our comprehensive 3-month web development internship is designed to transform beginners 
                  into confident developers. You'll work on real-world projects, collaborate with experienced 
                  developers, and build a portfolio that showcases your skills.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex items-start">
                    <i data-lucide="zap" class="h-6 w-6 text-blue-600 mr-3 mt-1"></i>
                    <div>
                      <h3 class="font-semibold text-gray-900">Real Projects</h3>
                      <p class="text-gray-600">Work on actual client projects</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <i data-lucide="users" class="h-6 w-6 text-blue-600

 mr-3 mt-1"></i>
                    <div>
                      <h3 class="font-semibold text-gray-900">Mentorship</h3>
                      <p class="text-gray-600">1-on-1 guidance from seniors</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <i data-lucide="award" class="h-6 w-6 text-blue-600 mr-3 mt-1"></i>
                    <div>
                      <h3 class="font-semibold text-gray-900">Certification</h3>
                      <p class="text-gray-600">Industry-recognized certificate</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <i data-lucide="target" class="h-6 w-6 text-blue-600 mr-3 mt-1"></i>
                    <div>
                      <h3 class="font-semibold text-gray-900">Career Support</h3>
                      <p class="text-gray-600">Job placement assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              <divJumping back in... let's continue from where we left off in the code.

              <div class="relative">
                <img
                  src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  class="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Qualifications Section -->
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We're Looking For
              </h2>
              <p class="text-xl text-gray-600">
                Join our team if you have passion for learning and Vendor: these desired skills
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <i data-lucide="book-open" class="h-8 w-8 text-blue-600 mb-4"></i>
                <h3 class="text-xl font-semibold mb-3

">Basic Programming</h3>
                <ul class="text-gray-600 space-y-2">
                  <li>• HTML, CSS, JavaScript fundamentals</li>
                  <li>• Understanding of programming concepts</li>
                  <li>• Problem-solving mindset</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <i data-lucide="code" class="h-8 w-8 text-blue-600 mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">Technical Skills</h3>
                <ul class="text-gray-600 space-y-2">
                  <li>• Git version control basics</li>
                  <li>• Responsive design principles</li>
                  <li>• API integration knowledge (bonus)</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <i data-lucide="star" class="h-8 w-8 text-blue-600 mb-4"></i>
                <h3 class="text-xl font-semibold mb-3">Soft Skills</h3>
                <ul class="text-gray-600 space-y-2">
                  <li>• Strong communication skills</li>
                  <li>• Team collaboration</li>
                  <li>• Eagerness to learn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Form -->
        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p class="text-xl text-gray-600">
                Fill out the form below to begin your application
              </p>
            </div>
            <div class="max-w-2xl mx-auto">
              <form id="contact-form" class="bg-gray-50 p-8 rounded-lg shadow-md">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Why are you interested in this internship?
                  </label>
                  <textarea
                    rows="4"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your motivation..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer id="contact" class="bg-gray-900 text-white py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div class="flex items-center mb-4">
                  <i data-lucide="code" class="h-8 w-8 text-blue-400 mr-2"></i>
                  <span class="text-xl font-bold">Cognifyz Technologies</span>
                </div>
                <p class="text-gray-400">
                  Empowering the next generation of web developers through hands-on learning 
                  and real-world experience.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <i data-lucide="mail" class="h-5 w-5 text-blue-400 mr-2"></i>
                    <span class="text-gray-400">internships@cognifyz.com</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="phone" class="h-5 w-5 text-blue-400 mr-2"></i>
                    <span class="text-gray-400">+1 (555) 123-4567</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="map-pin" class="h-5 w-5 text-blue-400 mr-2"></i>
                    <span class="text-gray-400">San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Program Highlights</h3>
                <ul class="text-gray-400 space-y-2">
                  <li>• 3-month intensive program</li>
                  <li>• Real-world project experience</li>
                  <li>• One-on-one mentorship</li>
                  <li>• Industry certification</li>
                  <li>• Career placement support</li>
                </ul>
              </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2024 Cognifyz Technologies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    `;

    lucide.createIcons();

    document.getElementById('menu-toggle').addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      render();
    });

    document.getElementById('color-button').addEventListener('click', handleButtonClick);

    document.getElementById('calculate').addEventListener('click', handleCalculate);

    document.getElementById('number1').addEventListener('input', (e) => {
      number1 = e.target.value;
    });

    document.getElementById('number2').addEventListener('input', (e) => {
      number2 = e.target.value;
    });

    document.getElementById('greeting').addEventListener('click', showGreeting);

    document.getElementById('learn-more').addEventListener('click', showGreeting);

    document.getElementById('prev-slide').addEventListener('click', () => {
      clearInterval(slideInterval);
      prevSlide();
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideImages.length;
        render();
      }, 4000);
    });

    document.getElementById('next-slide').addEventListener('click', () => {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideImages.length;
        render();
      }, 4000);
    });

    document.querySelectorAll('[data-slide]').forEach(button => {
      button.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide = parseInt(button.dataset.slide);
        render();
        slideInterval = setInterval(() => {
          currentSlide = (currentSlide + 1) % slideImages.length;
          render();
        }, 4000);
      });
    });

    document.querySelectorAll('[data-image]').forEach(image => {
      image.addEventListener('click', () => {
        selectedImage = image.dataset.image;
        render();
      });
    });

    if (document.getElementById('close-modal')) {
      document.getElementById('close-modal').addEventListener('click', () => {
        selectedImage = null;
        render();
      });
    }

    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (Note: This is a demo, no data is actually sent.)');
    });
  }

  render();
});