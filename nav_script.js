const mainNav = document.getElementById('mainNav');
const linkGrid = document.getElementById('link-grid');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const sidebar = document.getElementById('floating-sidebar');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNavContainer = document.getElementById('mobileNavContainer');
const mobileNavCloseBtn = document.getElementById('mobileNavCloseBtn');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavContent = document.getElementById('mobileNavContent');

let currentGroupIndex = 0;
let currentCategoryIndex = null; 

function loadBestIcon(imgElement, link) {
    const domain = new URL(link.url).hostname;
    const sources = [];

    if (link.local_icon_name) {
        sources.push(`images/${link.local_icon_name}.svg`);
        sources.push(`images/${link.local_icon_name}.webp`);
        sources.push(`images/${link.local_icon_name}.png`);
        sources.push(`images/${link.local_icon_name}.jpg`);
    }

    sources.push(`https://logo.clearbit.com/${domain}`);
    sources.push(`https://www.google.com/s2/favicons?sz=64&domain=${domain}`);

    const defaultIcon = 'images/default-icon.svg';
    let currentSourceIndex = 0;

    const tryNextSource = () => {
        if (currentSourceIndex < sources.length) {
            imgElement.src = sources[currentSourceIndex];
            currentSourceIndex++;
        } else {
            imgElement.src = defaultIcon;
            imgElement.onerror = null;
        }
    };

    imgElement.onerror = tryNextSource;
    tryNextSource();
}

function createLinkCard(link) {
    const card = document.createElement('a');
    card.className = 'link-card';
    card.href = link.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    card.innerHTML = `
      <div class="link-card-content">
        <div class="link-card-header">
          <img alt="${link.name} icon" class="link-icon">
          <h3 class="link-name">${link.name}</h3>
        </div>
        <p class="link-desc">${link.desc}</p>
      </div>
      <div class="card-tooltip">${link.desc}</div>
    `;
    
    const imgElement = card.querySelector('.link-icon');
    loadBestIcon(imgElement, link);
    return card;
}

function renderNavigation() {
  mainNav.innerHTML = '';
  navData.forEach((group, groupIndex) => {
    const li = document.createElement('li');
    li.className = 'nav-group';

    const groupButton = document.createElement('button');
    groupButton.className = 'group-btn';
    groupButton.innerHTML = `<span>${group.group}</span>`;
    groupButton.onclick = () => {
      if (currentGroupIndex !== groupIndex || currentCategoryIndex !== null) {
        currentGroupIndex = groupIndex;
        currentCategoryIndex = null;
        if(searchInput) searchInput.value = '';
        renderAll();
      }
    };
    li.appendChild(groupButton);

    if (group.categories && group.categories.length > 0) {
      const categoryList = document.createElement('ul');
      categoryList.className = 'category-list';
      group.categories.forEach((category, categoryIndex) => {
        const categoryLi = document.createElement('li');
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category.name;
        categoryButton.className = 'category-btn';
        categoryButton.onclick = () => {
          currentGroupIndex = groupIndex;
          currentCategoryIndex = categoryIndex;
          if(searchInput) searchInput.value = '';
          renderAll();
        };
        categoryLi.appendChild(categoryButton);
        categoryList.appendChild(categoryLi);
      });
      li.appendChild(categoryList);
    }
    mainNav.appendChild(li);
  });
  updateNavActiveState();
}

function renderMobileNavigation() {
  mobileNavContent.innerHTML = '';
  const navList = document.createElement('ul');

  const createMobileCategory = (category, groupIndex, categoryIndex) => {
    const categoryLi = document.createElement('li');
    const categoryButton = document.createElement('button');
    categoryButton.textContent = category.name;
    categoryButton.className = 'mobile-category-btn';
    categoryButton.onclick = () => {
      currentGroupIndex = groupIndex;
      currentCategoryIndex = categoryIndex;
      if (searchInput) searchInput.value = '';
      closeMobileNav();
      renderAll();
    };
    categoryLi.appendChild(categoryButton);
    return categoryLi;
  };
  
  navData.forEach((group, groupIndex) => {
    const groupLi = document.createElement('li');
    const groupButton = document.createElement('button');
    groupButton.className = 'mobile-nav-group-btn';
    groupButton.innerHTML = `<span>${group.group}</span>`;
    groupLi.appendChild(groupButton);

    const groupButtonOnlyLi = document.createElement('li');
    const groupButtonOnly = document.createElement('button');
    groupButtonOnly.className = 'mobile-category-btn';
    groupButtonOnly.textContent = `查看「${group.group}」全部`;
    groupButtonOnly.onclick = () => {
        currentGroupIndex = groupIndex;
        currentCategoryIndex = null;
        if (searchInput) searchInput.value = '';
        closeMobileNav();
        renderAll();
    };
    groupButtonOnlyLi.appendChild(groupButtonOnly);

    if (group.categories && group.categories.length > 0) {
      const categoryList = document.createElement('ul');
      categoryList.className = 'mobile-category-list';
      categoryList.appendChild(groupButtonOnlyLi);
      
      group.categories.forEach((category, categoryIndex) => {
        categoryList.appendChild(createMobileCategory(category, groupIndex, categoryIndex));
      });
      
      groupLi.appendChild(categoryList);
      groupButton.onclick = () => {
        groupButton.classList.toggle('expanded');
        categoryList.classList.toggle('expanded');
      };
    } else {
        groupButton.onclick = () => {
            currentGroupIndex = groupIndex;
            currentCategoryIndex = null;
            if (searchInput) searchInput.value = '';
            closeMobileNav();
            renderAll();
        };
    }
    navList.appendChild(groupLi);
  });
  
  const productsNavSource = document.getElementById('productsNav');
  if (productsNavSource) {
    const mobileProductsNav = productsNavSource.cloneNode(true);
    mobileProductsNav.removeAttribute('id');
    
    mobileProductsNav.querySelectorAll('.nav-group').forEach(group => {
      const groupButton = group.querySelector('.group-btn');
      const categoryList = group.querySelector('.category-list');
      
      if (groupButton && categoryList) {
        const mobileGroupLi = document.createElement('li');
        const mobileGroupBtn = document.createElement('button');
        mobileGroupBtn.className = 'mobile-nav-group-btn';
        mobileGroupBtn.innerHTML = groupButton.innerHTML;
        mobileGroupLi.appendChild(mobileGroupBtn);
        
        const mobileCategoryList = document.createElement('ul');
        mobileCategoryList.className = 'mobile-category-list';
        
        categoryList.querySelectorAll('li a').forEach(link => {
          const mobileLinkLi = document.createElement('li');
          const mobileLink = link.cloneNode(true);
          mobileLink.className = 'mobile-category-btn';
          mobileLink.onclick = () => closeMobileNav();
          mobileLinkLi.appendChild(mobileLink);
          mobileCategoryList.appendChild(mobileLinkLi);
        });
        
        mobileGroupLi.appendChild(mobileCategoryList);
        mobileGroupBtn.onclick = () => {
          mobileGroupBtn.classList.toggle('expanded');
          mobileCategoryList.classList.toggle('expanded');
        };
        
        navList.appendChild(mobileGroupLi);
      }
    });
  }

  mobileNavContent.appendChild(navList);
  updateMobileNavActiveState();
}

function updateMobileNavActiveState() {
  document.querySelectorAll('#mobileNavContent .mobile-nav-group-btn, #mobileNavContent .mobile-category-btn').forEach(btn => btn.classList.remove('active'));
  
  if (searchInput.value.trim()) return;

  const groupBtn = mobileNavContent.querySelectorAll('.mobile-nav-group-btn')[currentGroupIndex];
  if(groupBtn) groupBtn.classList.add('active');

  const categoryLists = mobileNavContent.querySelectorAll('.mobile-category-list');
  if (currentCategoryIndex !== null && categoryLists[currentGroupIndex]) {
    const categoryBtn = categoryLists[currentGroupIndex].querySelectorAll('.mobile-category-btn')[currentCategoryIndex + 1];
    if (categoryBtn) categoryBtn.classList.add('active');
  } else if (currentCategoryIndex === null) {
      const allBtn = categoryLists[currentGroupIndex]?.querySelector('.mobile-category-btn');
      if(allBtn) allBtn.classList.add('active');
  }
}

function updateNavActiveState() {
  document.querySelectorAll('#mainNav .group-btn, #mainNav .category-btn').forEach(btn => btn.classList.remove('active'));

  if (searchInput.value.trim()) return;

  const groupBtn = mainNav.children[currentGroupIndex]?.querySelector('.group-btn');
  if (groupBtn) {
    if (currentCategoryIndex === null) {
      groupBtn.classList.add('active');
    }
  }

  if (currentCategoryIndex !== null) {
    const categoryList = mainNav.children[currentGroupIndex]?.querySelector('.category-list');
    if (categoryList) {
      const categoryBtn = categoryList.children[currentCategoryIndex]?.querySelector('.category-btn');
      if (categoryBtn) {
        categoryBtn.classList.add('active');
      }
    }
  }
  updateMobileNavActiveState();
}

function renderLinks() {
  linkGrid.innerHTML = '';
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  if (searchTerm) {
    linkGrid.className = 'link-grid';
    const allLinks = navData.flatMap(group => group.categories.flatMap(cat => cat.links));
    const linksToRender = allLinks.filter(link =>
      link.name.toLowerCase().includes(searchTerm) ||
      link.desc.toLowerCase().includes(searchTerm) ||
      link.url.toLowerCase().includes(searchTerm)
    );

    if (linksToRender.length === 0) {
      linkGrid.className = '';
      const encodedTerm = encodeURIComponent(searchTerm);
      const sanitizedSearchTerm = searchTerm.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      linkGrid.innerHTML = `
        <div class="search-fallback">
            <p>站内未找到与 “<strong>${sanitizedSearchTerm}</strong>” 相关的内容</p>
            <span>您可以尝试使用其他搜索引擎：</span>
            <div class="search-engine-list">
                <a href="https://www.baidu.com/s?wd=${encodedTerm}" target="_blank" rel="noopener noreferrer" class="search-engine-btn baidu">百度</a>
                <a href="https://www.bing.com/search?q=${encodedTerm}" target="_blank" rel="noopener noreferrer" class="search-engine-btn bing">Bing</a>
                <a href="https://www.google.com/search?q=${encodedTerm}" target="_blank" rel="noopener noreferrer" class="search-engine-btn google">Google</a>
                <a href="https://sogou.com/web?query=${encodedTerm}" target="_blank" rel="noopener noreferrer" class="search-engine-btn sogou">搜狗</a>
                <a href="https://duckduckgo.com/?q=${encodedTerm}" target="_blank" rel="noopener noreferrer" class="search-engine-btn duckduckgo">DuckDuckGo</a>
            </div>
        </div>`;
    } else {
      linksToRender.forEach(link => linkGrid.appendChild(createLinkCard(link)));
    }
    return;
  }

  const currentGroup = navData[currentGroupIndex];
  if (!currentGroup || !currentGroup.categories) {
    linkGrid.className = '';
    linkGrid.innerHTML = '<p class="empty-message">此分类下暂无内容。</p>';
    return;
  }

  if (currentCategoryIndex !== null) {
    linkGrid.className = 'link-grid';
    const currentCategory = currentGroup.categories[currentCategoryIndex];
    const linksToRender = currentCategory?.links || [];
    if (linksToRender.length === 0) {
      linkGrid.innerHTML = '<p class="empty-message">此分类下暂无网站，敬请期待。</p>';
    } else {
      linksToRender.forEach(link => {
        linkGrid.appendChild(createLinkCard(link));
      });
    }
  } else {
    linkGrid.className = 'category-view-container';
    let hasContent = false;
    currentGroup.categories.forEach(category => {
      if (category.links && category.links.length > 0) {
        hasContent = true;
        
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';

        const titleWrapper = document.createElement('div');
        titleWrapper.className = 'category-section-header';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-section-title';
        categoryTitle.textContent = category.name;
        titleWrapper.appendChild(categoryTitle);

        const LINKS_THRESHOLD = 10;
        if (category.links.length > LINKS_THRESHOLD) {
          const showMoreBtn = document.createElement('button');
          showMoreBtn.className = 'show-more-btn';
          showMoreBtn.innerHTML = '更多 <span>&rarr;</span>';
          
          showMoreBtn.onclick = function() {
            const section = this.closest('.category-section');
            const isExpanded = section.classList.toggle('is-expanded');
            this.innerHTML = isExpanded ? '收起 <span>&uarr;</span>' : '更多 <span>&rarr;</span>';
          };
          titleWrapper.appendChild(showMoreBtn);
        }

        categorySection.appendChild(titleWrapper);
        
        const linkGridInner = document.createElement('div');
        linkGridInner.className = 'link-grid';
        category.links.forEach((link, linkIndex) => {
          const card = createLinkCard(link);
          if (linkIndex >= LINKS_THRESHOLD) {
            card.classList.add('is-extra-card');
          }
          linkGridInner.appendChild(card);
        });
        categorySection.appendChild(linkGridInner);
        linkGrid.appendChild(categorySection);
      }
    });

    if (!hasContent) {
        linkGrid.className = '';
        linkGrid.innerHTML = '<p class="empty-message">此分类下暂无网站，敬请期待。</p>';
    }
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

function openMobileNav() {
    mobileNavContainer.classList.add('open');
    mobileNavOverlay.classList.add('open');
    document.body.classList.add('mobile-nav-active');
}

function closeMobileNav() {
    mobileNavContainer.classList.remove('open');
    mobileNavOverlay.classList.remove('open');
    document.body.classList.remove('mobile-nav-active');
}

function renderAll() {
  renderNavigation();
  renderMobileNavigation();
  renderLinks();
  if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function init() {
  currentCategoryIndex = null;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim() !== '') {
        currentCategoryIndex = null;
        document.querySelectorAll('#mainNav .group-btn, #mainNav .category-btn, #productsNav .category-btn').forEach(btn => btn.classList.remove('active'));
      }
      updateNavActiveState();
      renderLinks();
    });
  }
  
  renderAll();

  if(themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (sidebar && closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
      sidebar.classList.add('is-hidden');
    });
  }

  mobileNavToggle.addEventListener('click', openMobileNav);
  mobileNavCloseBtn.addEventListener('click', closeMobileNav);
  mobileNavOverlay.addEventListener('click', closeMobileNav);
}

document.addEventListener('DOMContentLoaded', init);