const API_BASE = "https://web-production-c87a6.up.railway.app/auth";
function switchTab(tab) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".form-section")
    .forEach((f) => f.classList.remove("active"));

  if (tab === "login") {
    document.querySelectorAll(".tab")[0].classList.add("active");
    document.getElementById("loginSection").classList.add("active");
  } else {
    document.querySelectorAll(".tab")[1].classList.add("active");
    document.getElementById("registerSection").classList.add("active");
  }
  document.getElementById("errorMsg").style.display = "none";
}

function showError(msg) {
  const el = document.getElementById("errorMsg");
  el.innerText = msg;
  el.style.display = "block";
}

async function login() {
  const phone = document.getElementById("loginPhone").value;
  const password = document.getElementById("loginPassword").value;

  if (!phone || !password) return showError("يرجى ملء جميع الحقول");

  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "فشل تسجيل الدخول");

    localStorage.setItem("bw_customer_id", data.customer_id);
    localStorage.setItem("bw_customer_name", data.name);
    window.location.href = "/menu.html";
  } catch (err) {
    showError(err.message);
  }
}

async function register() {
  const name = document.getElementById("regName").value;
  const phone = document.getElementById("regPhone").value;
  const password = document.getElementById("regPassword").value;

  if (!name || !phone || !password) return showError("يرجى ملء جميع الحقول");

  try {
    const res = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "فشل التسجيل");

    localStorage.setItem("bw_customer_id", data.customer_id);
    localStorage.setItem("bw_customer_name", name);
    const cart = JSON.parse(localStorage.getItem("bw_cart") || "[]");

    const hasGift = cart.some(
      (item) =>
        item.id === "gift-lemon-mint" ||
        item.gift === true ||
        item.name === "ليمون نعناع",
    );

    if (!hasGift) {
      cart.push({
        id: "gift-lemon-mint",
        name: "ليمون نعناع",
        price: 0,
        quantity: 1,
        image: "/flavors/j_lemon_mint.png",
        gift: true,
      });

      localStorage.setItem("bw_cart", JSON.stringify(cart));
    }

    alert(`تم التسجيل بنجاح! لقد حصلت على ${data.gift} مجاناً!`);
    window.location.href = "/menu.html";
  } catch (err) {
    showError(err.message);
  }
}
