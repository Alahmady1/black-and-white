(function () {
  const grid = document.getElementById("menuGrid");
  const searchInput = document.getElementById("menuSearch");
  const categoryBar = document.getElementById("categoryBar");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");

  let allItems = [];
  let categories = ["الكل"];
  let activeCategory = "الكل";
  let searchQuery = "";

  const whatsappNumber = "201226002261";

  const imageMap = {
    "ليمون نعناع": "/flavors/j_lemon_mint.png",
    "مولتن كيك": "/flavors/molten_caake.png",
    "شوكليت كيك": "/flavors/chocaletecake.png",
    سينابون: "/flavors/cinabon.png",
    "ريد فلفيت": "/flavors/red_velvet.png",
    "سان سباستيان": "/flavors/san_spastian.png",
    "ميني بان كيك": "/flavors/mini bancake.png",
    "تشيز كيك": "/flavors/cheese_cake.png",
    "وافل أوريو": "/flavors/waffle_nutella.png",
    "وافل فور سيزون لوتس": "/flavors/waffle_4season.png",
    "وافل فور سيزون أوريو": "/flavors/waffle_4season.png",
    "وافل ميكس لوتس": "/flavors/waffle_nutella.png",
    "وافل ميكس كراميل": "/flavors/waffle_nutella.png",
    "وافل ميكس كندر": "/flavors/waffle_nutella.png",
    "وافل ميكس بيستاشيو": "/flavors/waffle_nutella.png",
  };

  function getImage(item) {
    const img = imageMap[item.name] || item.image || "";

    if (img.startsWith("/")) {
      return img;
    }

    return "/flavors/no-image.png";
  }
  function fixBrokenImage(img) {
    img.onerror = null;
    img.src = "/flavors/no-image.png";
  }

  function getImageStyle(item) {
    if (item.objectPosition) return `object-position: ${item.objectPosition}`;
    return "";
  }

  function getCart() {
    return JSON.parse(localStorage.getItem("bw_cart") || "[]");
  }

  function saveCart(cart) {
    localStorage.setItem("bw_cart", JSON.stringify(cart));
  }

  function getCartTotal(cart) {
    return cart.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0,
    );
  }

  function updateCartButton() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + Number(item.quantity), 0);
    const btn = document.getElementById("cartButton");
    if (btn) btn.textContent = `السلة (${count})`;
  }

  function renderCartModal() {
    const cart = getCart();
    const total = getCartTotal(cart);

    const itemsHtml = cart.length
      ? cart
          .map(
            (item) => `
        <div style="display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid #ddd;padding:8px 0">
          <div>
            <strong>${item.name}</strong>
            <div>${item.price} ج.م × ${item.quantity}</div>
          </div>
          <button class="remove-cart-item" data-id="${item.id}" style="border:0;background:#dc3545;color:white;padding:4px 8px;border-radius:6px">حذف</button>
        </div>
      `,
          )
          .join("")
      : `<p style="text-align:center">السلة فارغة</p>`;

    document.getElementById("cartItems").innerHTML = itemsHtml;
    document.getElementById("cartTotal").textContent = `${total} ج.م`;
  }

  function openCart() {
    renderCartModal();
    document.getElementById("cartOverlay").style.display = "flex";
  }

  function closeCart() {
    document.getElementById("cartOverlay").style.display = "none";
  }

  function checkoutWhatsApp() {
    const cart = getCart();

    if (!cart.length) {
      alert("السلة فارغة");
      return;
    }

    const lines = cart.map((item, index) => {
      const itemTotal = Number(item.price) * Number(item.quantity);
      return `${index + 1}- ${item.name} × ${item.quantity} = ${itemTotal} ج.م`;
    });

    const total = getCartTotal(cart);

    const messageText =
      `طلب جديد من Black & White\n\n` +
      lines.join("\n") +
      `\n\nالإجمالي: ${total} ج.م` +
      `\nالدفع: كاش`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageText,
    )}`;
    window.open(url, "_blank");
    fetch("https://web-production-c87a6.up.railway.app/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: localStorage.getItem("bw_customer_id") || null,
        customer_name: localStorage.getItem("bw_customer_name") || "Guest",
        phone: localStorage.getItem("bw_customer_phone") || "",
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total_price: total,
        source: "whatsapp",
        notes: document.getElementById("orderNotes")?.value || "",
      }),
    }).catch((err) => console.error("Order save failed:", err));
  }

  function createCartUI() {
    const oldButton = document.getElementById("cartButton");
    const oldOverlay = document.getElementById("cartOverlay");

    if (oldButton) oldButton.remove();
    if (oldOverlay) oldOverlay.remove();

    const cartButton = document.createElement("button");
    cartButton.id = "cartButton";
    cartButton.textContent = "السلة (0)";
    cartButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      background: #111;
      color: white;
      border: 0;
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: bold;
      box-shadow: 0 4px 15px rgba(0,0,0,.25);
    `;
    document.body.appendChild(cartButton);

    const cartOverlay = document.createElement("div");
    cartOverlay.id = "cartOverlay";
    cartOverlay.style.cssText = `
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.55);
      z-index: 10000;
      align-items: center;
      justify-content: center;
      padding: 16px;
    `;

    cartOverlay.innerHTML = `
      <div style="background:white;color:#111;width:min(480px,100%);border-radius:16px;padding:20px;direction:rtl">
        <h3 style="margin-top:0">سلة الطلبات</h3>
        <div id="cartItems"></div>
        <h4 style="margin-top:16px">الإجمالي: <span id="cartTotal">0 ج.م</span></h4>
        <textarea
          id="orderNotes"
          placeholder="اكتب ملاحظاتك على الأوردر"
          rows="3"
          style="width:100%;margin-top:12px;padding:10px;border-radius:8px;border:1px solid #ddd;"
        ></textarea>
        <button id="checkoutWhatsApp" style="width:100%;background:#25D366;color:white;border:0;padding:12px;border-radius:10px;font-weight:bold;margin-top:10px">
          إرسال الطلب على واتساب
        </button>
        <button id="closeCart" style="width:100%;background:#333;color:white;border:0;padding:10px;border-radius:10px;margin-top:8px">
          إغلاق
        </button>
      </div>
    `;

    document.body.appendChild(cartOverlay);

    cartButton.addEventListener("click", openCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);
    document
      .getElementById("checkoutWhatsApp")
      .addEventListener("click", checkoutWhatsApp);

    cartOverlay.addEventListener("click", (e) => {
      if (e.target.id === "cartOverlay") closeCart();

      const removeBtn = e.target.closest(".remove-cart-item");
      if (removeBtn) {
        const id = removeBtn.dataset.id;
        const cart = getCart().filter((item) => item.id !== id);
        saveCart(cart);
        renderCartModal();
        updateCartButton();
      }
    });

    updateCartButton();
  }

  function renderCategories() {
    categoryBar.innerHTML = categories
      .map(
        (cat) =>
          `<button type="button" class="category-btn${
            cat === activeCategory ? " active" : ""
          }" data-category="${cat}">${cat}</button>`,
      )
      .join("");

    categoryBar.querySelectorAll(".category-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category;
        renderCategories();
        renderItems();
      });
    });
  }

  function getFilteredItems() {
    const q = searchQuery.trim().toLowerCase();

    return allItems.filter((item) => {
      const matchCategory =
        activeCategory === "الكل" || item.category === activeCategory;

      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }
  function getImageClass(item) {
    if (item.imageFit === "contain") return "fit-contain";
    if (item.objectPosition) return "crop-multi";
    return "";
  }

  function getImageStyle(item) {
    if (item.objectPosition) {
      return `object-position: ${item.objectPosition}`;
    }
    return "";
  }
  function renderItems() {
    const filtered = getFilteredItems();
    resultCount.textContent = `${filtered.length} صنف`;

    if (filtered.length === 0) {
      grid.innerHTML = "";
      emptyState.classList.remove("d-none");
      return;
    }

    emptyState.classList.add("d-none");

    grid.innerHTML = filtered
      .map(
        (item) => `
        <div class="col-sm-6 col-lg-4 col-xl-3">
          <div class="card menu-card h-100">
            <div class="menu-card-img-wrap">
             <img
                src="${getImage(item)}"
                alt="${item.name}"
                class="${getImageClass(item)}"
                style="${getImageStyle(item)}"
                loading="lazy"
                onerror="this.onerror=null;this.src='/flavors/no-image.png';"
              />
            </div>
            <div class="card-body d-flex flex-column">
              <span class="category-badge">${item.category}</span>
              <h5 class="card-title">${item.name}</h5>
              <p class="text-muted small">${item.description || ""}</p>
              <p class="price mt-auto">${item.price} <small>ج.م</small></p>
              <button
                class="btn btn-dark w-100 mt-2 add-to-cart"
                data-id="${item.id}"
              >
                أضف للسلة
              </button>
            </div>
          </div>
        </div>`,
      )
      .join("");
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const id = btn.dataset.id;
    const item = allItems.find((p) => p.id === id);

    if (!item) return;

    const cart = getCart();
    const existing = cart.find((p) => p.id === id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        image: getImage(item),
        quantity: 1,
      });
    }

    saveCart(cart);
    updateCartButton();
    alert("تمت إضافة المنتج للسلة");
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderItems();
  });

  createCartUI();

  fetch("http://127.0.0.1:5000/api/products")
    .then((res) => res.json())
    .then((items) => {
      allItems = items || [];
      categories = ["الكل", ...new Set(allItems.map((item) => item.category))];
      renderCategories();
      renderItems();
    })
    .catch((err) => {
      console.error("MENU ERROR:", err);
      grid.innerHTML =
        '<div class="col-12"><p class="text-danger text-center">تعذر تحميل القائمة. حدّث الصفحة.</p></div>';
    });
})();
