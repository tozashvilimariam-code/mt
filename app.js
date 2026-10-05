/**
 * OmniReserve — Universal Booking Platform
 * Modern Interactive Frontend Logic with Mouse Drag-to-Reveal Details
 * Palette: Skin tone (Nude), Pure White, Warm Beige
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. VENUES MOCK DATABASE (WITH RICH DEEP DETAILS)
  // ==========================================
  const VENUES = [
    {
      id: 'v1',
      title: 'AquaZen Olympic Pool & Wellness',
      category: 'pool',
      categoryName: '🏊‍♂️ აუზი & სპა',
      city: 'თბილისი',
      rating: 4.9,
      reviewsCount: 428,
      price: 45,
      priceLabel: '₾ / ვიზიტი',
      desc: '25-მეტრიანი ოლიმპიური დახურული აუზი, ფინური საუნა, ჰამამი და ჰიდრომასაჟის ზონა.',
      workingHours: '07:00 - 23:00 (ყოველდღე)',
      address: 'ვაკე, ჭავჭავაძის გამზ. 74ბ',
      specs: 'წყლის ტემპერატურა: 28°C • ოლიმპიური სიღრმე: 1.8მ - 2.4მ • ულტრაიისფერი წმენდა ISO 9001',
      amenitiesDetailed: ['საცურაო აუზი (25მ)', 'ფინური მშრალი საუნა', 'რომაული ჰამამი', 'უფასო პირსახოცი', 'მიწისქვეშა პარკინგი', 'ჯანსაღი ბარი'],
      tags: ['ოლიმპიური აუზი', 'საუნა', 'უფასო პირსახოცი', 'პარკინგი'],
      personas: ['relax', 'health'],
      img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v2',
      title: 'MedCare Multi-Profile Clinic',
      category: 'clinic',
      categoryName: '🏥 კლინიკა & ექიმი',
      city: 'თბილისი',
      rating: 4.95,
      reviewsCount: 610,
      price: 70,
      priceLabel: '₾ / კონსულტაცია',
      desc: 'წამყვანი სპეციალისტების კონსულტაცია, ულტრათანამედროვე დიაგნოსტიკა და სრული ანალიზები ურიგოდ.',
      workingHours: '08:30 - 20:00 (ორშ-შაბ)',
      address: 'საბურთალო, ვაჟა-ფშაველას გამზ. 29',
      specs: 'საერთაშორისო აკრედიტაცია JCI • Philips 3T MRI • Siemens ციფრული ულტრასონოგრაფია • უსწრაფესი ლაბორატორია',
      amenitiesDetailed: ['თერაპევტი / კარდიოლოგი', 'სრული ლაბორატორიული კვლევები', 'კერძო დაზღვევის 100% დაფარვა', 'ელექტრონული სამედიცინო ბარათი', 'პარკინგი'],
      tags: ['ექიმის ვიზიტი', 'ულტრასონოგრაფია', 'ლაბორატორია', 'დაზღვევა'],
      personas: ['health'],
      img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v3',
      title: 'Kazbegi Mountain View Chalet',
      category: 'hotel',
      categoryName: '🏨 სასტუმრო & კოტეჯი',
      city: 'ყაზბეგი',
      rating: 4.92,
      reviewsCount: 350,
      price: 240,
      priceLabel: '₾ / ღამე',
      desc: 'პანორამული ხედი მყინვარწვერზე, ხის ეკო-კოტეჯი ბუხრით, ტერასა და ტრადიციული მთის საუზმე.',
      workingHours: 'Check-in: 14:00 • Check-out: 12:00',
      address: 'დაბა სტეფანწმინდა, გერგეტის ქუჩა 12',
      specs: 'ფართობი: 75 მ² • ხის ეკოლოგიური მასალა • შეშის ბუხარი • King Size საწოლი • პანორამული ტერასა',
      amenitiesDetailed: ['მყინვარწვერის 360° ხედი', 'შეშის ბუხარი', 'ტრადიციული მთის საუზმე', 'მაღალი სიჩქარის Starlink WiFi', 'მწვადის & გრილის ზონა'],
      tags: ['მთის ხედი', 'ბუხარი', 'საუზმე შედის', 'WiFi'],
      personas: ['romantic', 'relax'],
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v4',
      title: 'Skyline Roof Gastro Lounge',
      category: 'restaurant',
      categoryName: '🍽️ რესტორანი',
      city: 'თბილისი',
      rating: 4.88,
      reviewsCount: 520,
      price: 60,
      priceLabel: '₾ / დეპოზიტი',
      desc: 'ავტორული ქართულ-ევროპული სამზარეულო, 360° პანორამა თბილისზე და ცოცხალი ჯაზის საღამოები.',
      workingHours: '12:00 - 02:00 (ყოველდღე)',
      address: 'მთაწმინდის რაიონი, რუსთაველის გამზ. 42 (მე-14 სართული)',
      specs: 'მიშლენის გამოცდილების მქონე შეფ-მზარეული • 120-მდე ექსკლუზიური ქართული და ევროპული ღვინო • Sommelier Service',
      amenitiesDetailed: ['ღია და დახურული პანორამული ტერასა', 'საღამოს ცოცხალი ჯაზი', 'ავტორული კოქტეილების ბარი', 'Valet პარკინგი', 'VIP ოთახი'],
      tags: ['პანორამული ხედი', 'ლაივ მუსიკა', 'კოქტეილ ბარი', 'ტერასა'],
      personas: ['romantic', 'business', 'fun'],
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v5',
      title: 'Black Sea Panoramic Infinity Pool',
      category: 'pool',
      categoryName: '🏊‍♂️ აუზი & სპა',
      city: 'ბათუმი',
      rating: 4.89,
      reviewsCount: 290,
      price: 55,
      priceLabel: '₾ / დღიური',
      desc: 'ღია უსასრულო აუზი ზღვის სანაპიროს ხედით, შეზლონგები, გამაგრილებელი ბარი და სპა პროცედურები.',
      workingHours: '08:00 - 22:00 (სეზონური გათბობით)',
      address: 'ბათუმის ბულვარი, ზღვისპირის ქ. 8',
      specs: 'Infinity Edge დიზაინი • ზღვის წყლის ფილტრაცია • ტემპერატურა 27°C • სიღრმე 1.5მ - 2.0მ',
      amenitiesDetailed: ['შეზლონგები & ქოლგები', 'Poolside კოქტეილ ბარი', 'ჯაკუზი ზღვის ხედით', 'ტაილანდური მასაჟის კაბინეტი', 'პირსახოცების სერვისი'],
      tags: ['ღია აუზი', 'ზღვის ხედი', 'ლაუნჯ ბარი', 'DJ მუსიკა'],
      personas: ['relax', 'fun'],
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v6',
      title: 'Apex Karting & Racing Simulator',
      category: 'entertainment',
      categoryName: '🎯 გართობა & აქტივობა',
      city: 'თბილისი',
      rating: 4.93,
      reviewsCount: 410,
      price: 35,
      priceLabel: '₾ / 10 წთ',
      desc: 'უახლესი ელექტრო კარტინგი და პროფესიონალური F1 სიმულატორები მეგობრებისა და კორპორატიულებისთვის.',
      workingHours: '11:00 - 01:00 (ყოველდღე)',
      address: 'დიდუბე, აგლაძის ქ. 32',
      specs: 'SODI RT8 ელექტრო კარტები (0-60 კმ/სთ 3.2 წამში) • 650მ დახურული პროფესიული ტრასა • ტელემეტრიის ციფრული ეკრანები',
      amenitiesDetailed: ['პროფესიული ეკიპირება (ჩაფხუტი, კომბინიზონი)', 'F1 მოძრავი ჰიდრავლიკური სიმულატორები', 'ლაუნჯი & Playroom', 'ტურნირების ორგანიზება'],
      tags: ['კარტინგი', 'F1 სიმულატორი', 'ჯგუფური შეჯიბრი', 'VR ზონა'],
      personas: ['fun'],
      img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v7',
      title: 'Artisan Hub & Coffee Roasters',
      category: 'cafe',
      categoryName: '☕ კაფე & ბრანჩი',
      city: 'თბილისი',
      rating: 4.85,
      reviewsCount: 380,
      price: 20,
      priceLabel: '₾ / ბრანჩი',
      desc: 'სპეციალთი ყავა, მაღალსიჩქარიანი ოპტიკური WiFi, ერგონომიული სამუშაო მაგიდები და ჯანსაღი ბრანჩი.',
      workingHours: '08:00 - 22:00',
      address: 'ვერა, ზანდუკელის ქ. 14',
      specs: '100% ეთიოპიური და გვატემალის არაბიკა • La Marzocco KB90 • 200 Mbps ოპტიკური ინტერნეტი • ჩუმი ზონა Zoom-ზარებისთვის',
      amenitiesDetailed: ['Specialty Coffee & Cold Brew', 'ერგონომიული სკამები', 'USB & Type-C პორტები ყოველ მაგიდაზე', 'Vegan & Gluten-free მენიუ'],
      tags: ['Coworking', 'Specialty Coffee', 'მაღალი სიჩქარის WiFi', 'Vegan'],
      personas: ['business', 'relax'],
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v8',
      title: 'Dental Art Aesthetic Clinic',
      category: 'clinic',
      categoryName: '🏥 კლინიკა & ექიმი',
      city: 'თბილისი',
      rating: 4.96,
      reviewsCount: 310,
      price: 80,
      priceLabel: '₾ / ვიზიტი',
      desc: 'ესთეტიკური სტომატოლოგია, 3D სკანირება, უმტკივნეულო გათეთრება და ციფრული ღიმილის დიზაინი.',
      workingHours: '09:00 - 20:00 (ორშ-შაბ)',
      address: 'ვაკე, აბაშიძის ქ. 61',
      specs: '3Shape TRIOS ინტრაორალური სკანერი • ციფრული ღიმილის დიზაინი (DSD) • გერმანული KaVo დანადგარები • 100% უმტკივნეულო ანესთეზია',
      amenitiesDetailed: ['ციფრული დიაგნოსტიკა', 'Zoom 4 ლაზერული გათეთრება', 'კერამიკული ვინირები', 'პარკინგი', 'გარანტიის ოფიციალური პასპორტი'],
      tags: ['სტომატოლოგია', '3D სკანირება', 'უმტკივნეულო', 'გარანტია'],
      personas: ['health'],
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v9',
      title: 'Kakheti Chateau & Wine Cellar',
      category: 'hotel',
      categoryName: '🏨 სასტუმრო & კოტეჯი',
      city: 'კახეთი',
      rating: 4.94,
      reviewsCount: 460,
      price: 220,
      priceLabel: '₾ / ღამე',
      desc: 'ისტორიული შატო ვენახებში, კახური ქვევრის ღვინის დეგუსტაცია, ღია აუზი და უმაღლესი სერვისი.',
      workingHours: 'Check-in: 15:00 • Check-out: 12:00',
      address: 'თელავის რაიონი, სოფელი კისისხევი',
      specs: 'ისტორიული მე-19 საუკუნის მარანი • 40 ჰექტარი ვენახი • ღია პანორამული აუზი კავკასიონის ხედით',
      amenitiesDetailed: ['ქვევრის ღვინის დეგუსტაცია სომელიესთან', 'ღია აუზი შეზლონგებით', 'კახური კულინარიული მასტერკლასები', 'ღვინის სპა პროცედურები'],
      tags: ['ღვინის ტური', 'ღია აუზი', 'ვენახის ხედი', 'რესტორანი'],
      personas: ['romantic', 'relax'],
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v10',
      title: 'StrikeZone VIP Bowling & Billiards',
      category: 'entertainment',
      categoryName: '🎯 გართობა & აქტივობა',
      city: 'თბილისი',
      rating: 4.87,
      reviewsCount: 490,
      price: 50,
      priceLabel: '₾ / საათი',
      desc: '12 პროფესიული ბოულინგის ბილიკი, ამერიკული პული, არკადული თამაშები და საფირმო კოქტეილები.',
      workingHours: '12:00 - 02:00 (ყოველდღე)',
      address: 'საბურთალო, პეკინის გამზ. 34',
      specs: 'Brunswick უახლესი ბილიკები • ავტომატური ქულების სისტემა • სპეციალური საბავშვო დამცავი ბორტები',
      amenitiesDetailed: ['12 ბოულინგის ბილიკი', 'პროფესიონალური ბილიარდის მაგიდები', 'VIP განცალკევებული დარბაზი', 'საფირმო პიცა & ბურგერები'],
      tags: ['ბოულინგი', 'ბილიარდი', 'VIP ოთახი', 'სამაგიდო თამაშები'],
      personas: ['fun'],
      img: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v11',
      title: 'Botanical Garden Eco Cafe & Garden',
      category: 'cafe',
      categoryName: '☕ კაფე & ბრანჩი',
      city: 'ბათუმი',
      rating: 4.86,
      reviewsCount: 275,
      price: 25,
      priceLabel: '₾ / ადამიანი',
      desc: 'ბოტანიკური ბაღის სიმწვანეში ჩაფლული კაფე, ხელნაკეთი დესერტები, ჩაის ცერემონიები და ზღვის ნიავი.',
      workingHours: '09:00 - 21:00',
      address: 'მწვანე კონცხი, ბოტანიკური ბაღის ტერიტორია',
      specs: '100% ეკოლოგიური პროდუქტები • საკუთარი საკონდიტრო • ზღვისა და სუბტროპიკული ტყის პანორამა',
      amenitiesDetailed: ['ხელნაკეთი ფრანგული დესერტები', 'იაპონური & ქართული ჩაის რიტუალები', 'ღია ხის ტერასა', 'Pet-Friendly გარემო'],
      tags: ['ბოტანიკური გარემო', 'დესერტები', 'ჩაის ცერემონია', 'ტერასა'],
      personas: ['romantic', 'relax'],
      img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'v12',
      title: 'Old Town Heritage Boutique Hotel',
      category: 'hotel',
      categoryName: '🏨 სასტუმრო & კოტეჯი',
      city: 'თბილისი',
      rating: 4.9,
      reviewsCount: 380,
      price: 190,
      priceLabel: '₾ / ღამე',
      desc: 'ძველი თბილისის აივნები, ნარიყალას ხედი, ავთენტური დიზაინი და უმაღლესი კლასის კომფორტი.',
      workingHours: 'Check-in: 14:00 • Check-out: 12:00',
      address: 'ძველი თბილისი, ბეთლემის ქ. 18',
      specs: 'მე-19 საუკუნის რესტავრირებული აივანი • იტალიური თეთრეული • Hermes პარფიუმერია • ხედი ნარიყალას ციხეზე',
      amenitiesDetailed: ['ავთენტური თბილისური აივანი', 'საუზმე შიდა ეზოში', 'ღვინის ექსკლუზიური კოლექცია', '24/7 პერსონალური კონსიერჟი'],
      tags: ['ძველი თბილისი', 'ისტორიული ხედი', 'საუზმე', 'კონსიერჟი'],
      personas: ['romantic', 'business'],
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // State
  let currentCategory = 'all';
  let currentPersona = 'all';
  let currentCity = 'all';
  let selectedVenue = null;
  let selectedSlot = '10:00';
  let personCount = 2;

  // Persona Names Dictionary
  const PERSONA_NAMES = {
    all: { name: 'ჩემი პროფილი', icon: '✨' },
    relax: { name: 'რელაქსი & ველნესი', icon: '🧖‍♂️' },
    business: { name: 'ბიზნესი & სამუშაო', icon: '💼' },
    romantic: { name: 'რომანტიკა & წყვილები', icon: '🕯️' },
    fun: { name: 'გართობა & მეგობრები', icon: '🎉' },
    health: { name: 'ჯანმრთელობა & მოვლა', icon: '🩺' }
  };

  // DOM Elements
  const catalogGrid = document.getElementById('catalog-grid');
  const emptyState = document.getElementById('empty-state');
  const shownCount = document.getElementById('shown-count');
  const categoryTabs = document.getElementById('category-tabs');
  const personaChips = document.getElementById('persona-chips');
  const personaToggleBtn = document.getElementById('persona-toggle-btn');
  const currentPersonaIcon = document.getElementById('current-persona-icon');
  const currentPersonaName = document.getElementById('current-persona-name');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  // Search Elements
  const searchCategorySelect = document.getElementById('search-category');
  const searchCitySelect = document.getElementById('search-city');
  const searchDateInput = document.getElementById('search-date');
  const searchGuestsSelect = document.getElementById('search-guests');
  const heroSearchAction = document.getElementById('hero-search-action');

  // Set default search date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  searchDateInput.value = tomorrow.toISOString().split('T')[0];

  // Booking Modal Elements
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCatBadge = document.getElementById('modal-cat-badge');
  const modalVenueTitle = document.getElementById('modal-venue-title');
  const modalVenueLocation = document.getElementById('modal-venue-location');
  const modalEstimatedPrice = document.getElementById('modal-estimated-price');
  const modalDate = document.getElementById('modal-date');
  modalDate.value = tomorrow.toISOString().split('T')[0];

  const modalStep1 = document.getElementById('modal-step-1');
  const modalStep2 = document.getElementById('modal-step-2');
  const modalStep3 = document.getElementById('modal-step-3');
  const step1NextBtn = document.getElementById('step-1-next-btn');
  const step2BackBtn = document.getElementById('step-2-back-btn');
  const bookingForm = document.getElementById('booking-form');
  const finishModalBtn = document.getElementById('finish-modal-btn');
  const saveCalendarBtn = document.getElementById('save-calendar-btn');

  const stepperMinus = document.getElementById('stepper-minus');
  const stepperPlus = document.getElementById('stepper-plus');
  const stepperValue = document.getElementById('stepper-value');
  const serviceVariantSelect = document.getElementById('modal-service-variant');

  // Voucher DOM elements
  const voucherVenueName = document.getElementById('voucher-venue-name');
  const voucherBookingCode = document.getElementById('voucher-booking-code');
  const voucherGuestName = document.getElementById('voucher-guest-name');
  const voucherDatetime = document.getElementById('voucher-datetime');
  const voucherPersons = document.getElementById('voucher-persons');

  // Draggable Bottom Sheet Elements
  const draggableDetailSheet = document.getElementById('draggable-detail-sheet');
  const sheetCard = document.getElementById('sheet-card');
  const sheetDragHandle = document.getElementById('sheet-drag-handle');
  const sheetCloseBtn = document.getElementById('sheet-close-btn');
  const sheetCatBadge = document.getElementById('sheet-cat-badge');
  const sheetVenueTitle = document.getElementById('sheet-venue-title');
  const sheetVenueLoc = document.getElementById('sheet-venue-loc');
  const sheetVenueDesc = document.getElementById('sheet-venue-desc');
  const sheetSpecHours = document.getElementById('sheet-spec-hours');
  const sheetSpecAddress = document.getElementById('sheet-spec-address');
  const sheetSpecDetails = document.getElementById('sheet-spec-details');
  const sheetAmenitiesContainer = document.getElementById('sheet-amenities-container');
  const sheetPriceVal = document.getElementById('sheet-price-val');
  const sheetPriceLabel = document.getElementById('sheet-price-label');
  const sheetBookNowBtn = document.getElementById('sheet-book-now-btn');

  // Burger Menu
  const burgerMenuBtn = document.getElementById('burger-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  // ==========================================
  // 2. RENDER CATALOG WITH MOUSE DRAG CAPABILITY
  // ==========================================
  function renderCatalog() {
    let filtered = VENUES.filter(venue => {
      const matchCat = (currentCategory === 'all' || venue.category === currentCategory);
      const matchPersona = (currentPersona === 'all' || venue.personas.includes(currentPersona));
      const matchCity = (currentCity === 'all' || venue.city.toLowerCase() === currentCity.toLowerCase());
      return matchCat && matchPersona && matchCity;
    });

    shownCount.textContent = filtered.length;

    if (filtered.length === 0) {
      catalogGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');
    catalogGrid.innerHTML = filtered.map(item => `
      <article class="venue-card" data-venue-id="${item.id}" id="card-${item.id}">
        <div class="drag-progress-bar" id="drag-bar-${item.id}"></div>
        
        <div class="venue-img-wrapper">
          <img src="${item.img}" alt="${item.title}" class="venue-img" loading="lazy">
          <span class="venue-category-badge">${item.categoryName}</span>
          <span class="venue-rating-badge">★ ${item.rating} <small>(${item.reviewsCount})</small></span>
        </div>

        <div class="venue-body">
          <div class="venue-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${item.city}
          </div>
          <h3 class="venue-title">${item.title}</h3>
          <p class="venue-desc">${item.desc}</p>
          
          <div class="venue-tags">
            ${item.tags.map(t => `<span class="venue-tag">#${t}</span>`).join('')}
          </div>

          <!-- MOUSE DRAG HANDLE -->
          <div class="venue-drag-handle" data-drag-for="${item.id}" title="დააჭირეთ და გადაათრიეთ მაუსით დეტალებისთვის">
            <div class="drag-handle-left">
              <span>↔️</span>
              <span>გადაათრიე დეტალებისთვის</span>
            </div>
            <div class="drag-handle-right">
              <span>DRAG</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>

          <div class="venue-footer">
            <div class="venue-price-box">
              <span class="price-sub">საწყისი ფასი</span>
              <div class="price-main">
                <span class="price-currency">₾</span>${item.price} <span class="price-sub">${item.priceLabel.replace('₾', '')}</span>
              </div>
            </div>
            <div class="card-actions-row">
              <button class="btn-inspect open-sheet-btn" data-venue-id="${item.id}" title="დეტალების ნახვა">
                დეტალები
              </button>
              <button class="btn btn-primary open-booking-btn" data-venue-id="${item.id}">
                დაჯავშნა
              </button>
            </div>
          </div>
        </div>

        <!-- SLIDING DETAILED OVERLAY (REVEALED VIA MOUSE DRAG) -->
        <div class="venue-detail-overlay" id="overlay-${item.id}">
          <div class="detail-overlay-header">
            <span class="detail-drag-tag">🔍 დეტალური პასპორტი</span>
            <button class="btn-close-overlay" data-close-overlay="${item.id}" aria-label="დახურვა">✕</button>
          </div>

          <div class="detail-overlay-body">
            <div class="detail-spec-box">
              <div class="spec-title">🕒 სამუშაო გრაფიკი</div>
              <div class="spec-text">${item.workingHours}</div>
            </div>

            <div class="detail-spec-box">
              <div class="spec-title">📍 მისამართი</div>
              <div class="spec-text">${item.address}</div>
            </div>

            <div class="detail-spec-box">
              <div class="spec-title">✨ ტექნიკური მახასიათებლები</div>
              <div class="spec-text">${item.specs}</div>
            </div>

            <div>
              <div class="spec-title" style="margin-bottom: 0.5rem;">სერვისები & კომფორტი</div>
              <div class="detail-amenities-list">
                ${item.amenitiesDetailed.map(a => `<span class="amenity-chip">✓ ${a}</span>`).join('')}
              </div>
            </div>
          </div>

          <div class="detail-overlay-footer">
            <button class="btn btn-secondary btn-close-overlay" data-close-overlay="${item.id}">უკან</button>
            <button class="btn btn-primary open-booking-btn" data-venue-id="${item.id}">
              დაჯავშნა ₾${item.price}
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach Click and Drag Listeners
    attachDragAndClickEvents();
  }

  // ==========================================
  // 3. MOUSE DRAG EVENT HANDLERS
  // ==========================================
  function attachDragAndClickEvents() {
    // 1. Direct Booking button clicks
    document.querySelectorAll('.open-booking-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-venue-id');
        openBookingModal(id);
      });
    });

    // 2. Direct Detail Sheet button clicks
    document.querySelectorAll('.open-sheet-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-venue-id');
        openDetailSheet(id);
      });
    });

    // 3. Close Overlay button clicks
    document.querySelectorAll('[data-close-overlay]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-close-overlay');
        const overlay = document.getElementById(`overlay-${id}`);
        if (overlay) overlay.classList.remove('is-active');
      });
    });

    // 4. MOUSE DRAG DETECTION FOR EACH CARD & HANDLE
    document.querySelectorAll('.venue-card').forEach(card => {
      const venueId = card.getAttribute('data-venue-id');
      const handle = card.querySelector('.venue-drag-handle');
      const overlay = document.getElementById(`overlay-${venueId}`);
      const progressBar = document.getElementById(`drag-bar-${venueId}`);

      let isDragging = false;
      let startX = 0;
      let currentX = 0;
      let dragDistance = 0;

      function onMouseDown(e) {
        // Only trigger on left mouse button
        if (e.button !== 0) return;
        // Don't trigger if clicked on a regular button
        if (e.target.closest('button') && !e.target.closest('.venue-drag-handle')) return;

        isDragging = true;
        startX = e.clientX;
        card.style.transition = 'none';
        document.body.style.userSelect = 'none';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      }

      function onMouseMove(e) {
        if (!isDragging) return;
        currentX = e.clientX;
        dragDistance = currentX - startX;

        // Visual progress feedback
        const progressPercent = Math.min(Math.abs(dragDistance) / 80 * 100, 100);
        if (progressBar) {
          progressBar.style.width = `${progressPercent}%`;
        }

        // Slight card tilt/translation during drag
        if (Math.abs(dragDistance) > 10) {
          card.style.transform = `translateX(${dragDistance * 0.15}px)`;
        }
      }

      function onMouseUp(e) {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = '';

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        card.style.transition = '';
        card.style.transform = '';

        if (progressBar) {
          progressBar.style.width = '0%';
        }

        // If drag threshold crossed (50px in either direction), reveal detail overlay!
        if (Math.abs(dragDistance) >= 45) {
          if (overlay) {
            overlay.classList.add('is-active');
            const venue = VENUES.find(v => v.id === venueId);
            showToast(`დეტალური ინფორმაცია გაიხსნა: ${venue ? venue.title : ''}`, '🔍');
          }
        }

        dragDistance = 0;
      }

      // Attach mouse down to the drag handle specifically and card surface
      if (handle) {
        handle.addEventListener('mousedown', onMouseDown);
      }
      card.addEventListener('mousedown', (e) => {
        // If clicking on image or body, also allow dragging
        if (e.target.closest('.venue-img-wrapper') || e.target.closest('.venue-desc')) {
          onMouseDown(e);
        }
      });
    });
  }

  // ==========================================
  // 4. DRAGGABLE BOTTOM SHEET LOGIC
  // ==========================================
  function openDetailSheet(venueId) {
    const venue = VENUES.find(v => v.id === venueId);
    if (!venue) return;
    selectedVenue = venue;

    sheetCatBadge.textContent = venue.categoryName;
    sheetVenueTitle.textContent = venue.title;
    sheetVenueLoc.textContent = `📍 ${venue.city} • რეიტინგი ★ ${venue.rating} (${venue.reviewsCount} შეფასება)`;
    sheetVenueDesc.textContent = venue.desc;
    sheetSpecHours.textContent = venue.workingHours;
    sheetSpecAddress.textContent = venue.address;
    sheetSpecDetails.textContent = venue.specs;
    sheetPriceVal.textContent = venue.price;
    sheetPriceLabel.textContent = venue.priceLabel.replace('₾', '');

    sheetAmenitiesContainer.innerHTML = venue.amenitiesDetailed
      .map(a => `<span class="amenity-chip">✓ ${a}</span>`)
      .join('');

    draggableDetailSheet.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailSheet() {
    draggableDetailSheet.classList.add('hidden');
    document.body.style.overflow = '';
  }

  sheetCloseBtn.addEventListener('click', closeDetailSheet);
  draggableDetailSheet.addEventListener('click', (e) => {
    if (e.target === draggableDetailSheet) {
      closeDetailSheet();
    }
  });

  sheetBookNowBtn.addEventListener('click', () => {
    closeDetailSheet();
    if (selectedVenue) {
      openBookingModal(selectedVenue.id);
    }
  });

  // Sheet Handle Mouse Drag to dismiss
  let sheetDragging = false;
  let sheetStartY = 0;

  sheetDragHandle.addEventListener('mousedown', (e) => {
    sheetDragging = true;
    sheetStartY = e.clientY;
    sheetCard.style.transition = 'none';

    function onSheetMouseMove(e) {
      if (!sheetDragging) return;
      const deltaY = e.clientY - sheetStartY;
      if (deltaY > 0) {
        sheetCard.style.transform = `translateX(-50%) translateY(${deltaY}px)`;
      }
    }

    function onSheetMouseUp(e) {
      if (!sheetDragging) return;
      sheetDragging = false;
      sheetCard.style.transition = '';
      const deltaY = e.clientY - sheetStartY;

      if (deltaY > 80) {
        closeDetailSheet();
      } else {
        sheetCard.style.transform = 'translateX(-50%) translateY(0)';
      }

      document.removeEventListener('mousemove', onSheetMouseMove);
      document.removeEventListener('mouseup', onSheetMouseUp);
    }

    document.addEventListener('mousemove', onSheetMouseMove);
    document.addEventListener('mouseup', onSheetMouseUp);
  });

  // ==========================================
  // 5. TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(message, icon = '✨') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 4000);
  }

  // ==========================================
  // 6. FILTER LISTENERS (Categories & Personas)
  // ==========================================
  categoryTabs.addEventListener('click', (e) => {
    const target = e.target.closest('.cat-tab');
    if (!target) return;

    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    target.classList.add('active');

    currentCategory = target.getAttribute('data-cat');
    renderCatalog();
  });

  personaChips.addEventListener('click', (e) => {
    const target = e.target.closest('.persona-chip');
    if (!target) return;

    document.querySelectorAll('.persona-chip').forEach(c => c.classList.remove('active'));
    target.classList.add('active');

    currentPersona = target.getAttribute('data-persona');
    updatePersonaBadge(currentPersona);
    renderCatalog();

    showToast(`პერსონალიზაციის რეჟიმი: ${PERSONA_NAMES[currentPersona].name}`, PERSONA_NAMES[currentPersona].icon);
  });

  function updatePersonaBadge(personaKey) {
    const info = PERSONA_NAMES[personaKey] || PERSONA_NAMES.all;
    currentPersonaIcon.textContent = info.icon;
    currentPersonaName.textContent = info.name;
  }

  // Persona button in navbar cycles to next persona
  personaToggleBtn.addEventListener('click', () => {
    const personas = Object.keys(PERSONA_NAMES);
    const currentIndex = personas.indexOf(currentPersona);
    const nextIndex = (currentIndex + 1) % personas.length;
    currentPersona = personas[nextIndex];

    document.querySelectorAll('.persona-chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-persona') === currentPersona);
    });

    updatePersonaBadge(currentPersona);
    renderCatalog();
    showToast(`პერსონა განახლდა: ${PERSONA_NAMES[currentPersona].name}`, PERSONA_NAMES[currentPersona].icon);
  });

  // Hero Search Trigger
  heroSearchAction.addEventListener('click', () => {
    currentCategory = searchCategorySelect.value;
    currentCity = searchCitySelect.value;

    document.querySelectorAll('.cat-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-cat') === currentCategory);
    });

    renderCatalog();
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    showToast(`ძიების შედეგები განახლდა (${currentCity === 'all' ? 'სრული საქართველო' : currentCity})`, '🔍');
  });

  // Reset Filters
  resetFiltersBtn.addEventListener('click', () => {
    currentCategory = 'all';
    currentPersona = 'all';
    currentCity = 'all';

    searchCategorySelect.value = 'all';
    searchCitySelect.value = 'all';

    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.cat-tab[data-cat="all"]').classList.add('active');

    document.querySelectorAll('.persona-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.persona-chip[data-persona="all"]').classList.add('active');

    updatePersonaBadge('all');
    renderCatalog();
    showToast('ფილტრები გასუფთავდა', '🔄');
  });

  // Footer Category clicks
  document.querySelectorAll('[data-footer-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-footer-cat');
      currentCategory = cat;
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-cat') === cat);
      });
      renderCatalog();
    });
  });

  // ==========================================
  // 7. BOOKING MODAL LOGIC
  // ==========================================
  function openBookingModal(venueId) {
    selectedVenue = VENUES.find(v => v.id === venueId);
    if (!selectedVenue) return;

    modalCatBadge.textContent = selectedVenue.categoryName;
    modalVenueTitle.textContent = selectedVenue.title;
    modalVenueLocation.textContent = `📍 ${selectedVenue.city} • რეიტინგი ★ ${selectedVenue.rating}`;

    personCount = 2;
    stepperValue.textContent = personCount;
    selectedSlot = '10:00';

    document.querySelectorAll('.time-slot-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-slot') === '10:00');
    });

    serviceVariantSelect.value = 'standard';
    calculatePrice();

    setModalStep(1);

    bookingModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    bookingModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeBookingModal);

  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeBookingModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!bookingModal.classList.contains('hidden')) closeBookingModal();
      if (!draggableDetailSheet.classList.contains('hidden')) closeDetailSheet();
    }
  });

  // Stepper logic
  stepperMinus.addEventListener('click', () => {
    if (personCount > 1) {
      personCount--;
      stepperValue.textContent = personCount;
      calculatePrice();
    }
  });

  stepperPlus.addEventListener('click', () => {
    if (personCount < 20) {
      personCount++;
      stepperValue.textContent = personCount;
      calculatePrice();
    }
  });

  // Time slot selection
  document.getElementById('modal-time-slots').addEventListener('click', (e) => {
    const btn = e.target.closest('.time-slot-btn');
    if (!btn) return;
    document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSlot = btn.getAttribute('data-slot');
  });

  serviceVariantSelect.addEventListener('change', calculatePrice);

  function calculatePrice() {
    if (!selectedVenue) return;

    let base = selectedVenue.price;
    let total = 0;
    if (selectedVenue.category === 'hotel') {
      total = base;
      if (personCount > 2) total += (personCount - 2) * 40;
    } else {
      total = base * personCount;
    }

    if (serviceVariantSelect.value === 'vip') {
      total = Math.round(total * 1.25);
    } else if (serviceVariantSelect.value === 'group' && personCount >= 4) {
      total = Math.round(total * 0.85);
    }

    modalEstimatedPrice.textContent = `₾ ${total}.00`;
    return total;
  }

  // Stepper navigation
  function setModalStep(step) {
    modalStep1.classList.toggle('active', step === 1);
    modalStep2.classList.toggle('active', step === 2);
    modalStep3.classList.toggle('active', step === 3);

    document.querySelectorAll('.step-dot').forEach(dot => {
      const stepNum = parseInt(dot.getAttribute('data-step-indicator'));
      dot.classList.toggle('active', stepNum <= step);
    });
  }

  step1NextBtn.addEventListener('click', () => {
    setModalStep(2);
  });

  step2BackBtn.addEventListener('click', () => {
    setModalStep(1);
  });

  // Booking Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const clientName = document.getElementById('modal-client-name').value.trim();
    const clientPhone = document.getElementById('modal-client-phone').value.trim();
    const bookingDate = modalDate.value || '2026-10-07';

    // Populate Voucher
    const randomResId = '#RES-' + Math.floor(10000 + Math.random() * 90000);
    voucherVenueName.textContent = selectedVenue.title;
    voucherBookingCode.textContent = randomResId;
    voucherGuestName.textContent = clientName || 'გიორგი ბერიძე';
    voucherDatetime.textContent = `${bookingDate} | ${selectedSlot}`;
    voucherPersons.textContent = `${personCount} პერსონა (${modalEstimatedPrice.textContent})`;

    setModalStep(3);
    showToast(`ჯავშანი ${randomResId} წარმატებით დადასტურდა! SMS გაიგზავნა: ${clientPhone}`, '✅');
  });

  finishModalBtn.addEventListener('click', () => {
    closeBookingModal();
    showToast('თქვენი ჯავშნის დეტალები შენახულია პროფილში!', '🌟');
  });

  saveCalendarBtn.addEventListener('click', () => {
    showToast('ჯავშანი წარმატებით დაემატა თქვენს კალენდარში!', '📅');
  });

  // Partner Button
  const partnerBtn = document.getElementById('partner-btn');
  if (partnerBtn) {
    partnerBtn.addEventListener('click', () => {
      showToast('პარტნიორობის განაცხადის ფორმა მალე გაიხსნება!', '🤝');
    });
  }

  // Mobile Menu
  burgerMenuBtn.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '76px';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.background = '#FFFFFF';
      navMenu.style.padding = '1.5rem';
      navMenu.style.borderBottom = '1px solid #E2D5C3';
    }
  });

  // Initial catalog render
  renderCatalog();
});
