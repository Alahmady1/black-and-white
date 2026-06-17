// Black & White Integration Layer
// Connects Frontend to Flask Backend (Port 5000)

window.BW_Integration = {
    API_URL: "http://localhost:5000/api",
    
    // Fallback logic for standalone menu.html
    fetchMenu: async function() {
        try {
            const res = await fetch(`${this.API_URL}/products`);
            if (!res.ok) throw new Error("Backend offline");
            const products = await res.json();
            return products;
        } catch (e) {
            console.warn("Falling back to static menu data", e);
            // Fallback to static JSON
            const res = await fetch('/js/menu-data.json');
            return await res.json();
        }
    },

    // Method to be called before WhatsApp order
    logOrder: async function(cartItems, total, source = 'web') {
        const customerId = localStorage.getItem('bw_customer_id');
        const payload = {
            items: cartItems.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total: total,
            customer_id: customerId || null,
            source: source,
            notes: "Payment: Cash Only"
        };
        
        try {
            const res = await fetch(`${this.API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log("Order logged successfully", data);
            
            // Save to localStorage for receipt page
            localStorage.setItem('bw_last_order', JSON.stringify({
                order_number: data.order_number,
                items: payload.items,
                total: payload.total
            }));
            
            return data;
        } catch (e) {
            console.error("Failed to log order to database", e);
            return null;
        }
    },
    
    checkAuth: function() {
        return !!localStorage.getItem('bw_customer_id');
    }
};

// Global interceptor for standalone menu.html checkout if needed
document.addEventListener('DOMContentLoaded', () => {
    // Add auth link to navbar safely
    const navs = document.querySelectorAll('.navbar-nav');
    if (navs.length > 0 && !document.getElementById('authLink')) {
        const authName = localStorage.getItem('bw_customer_name');
        const authLi = document.createElement('li');
        authLi.className = 'nav-item';
        authLi.id = 'authLink';
        authLi.innerHTML = authName 
            ? `<a class="nav-link text-warning fw-bold" href="#">مرحباً، ${authName}</a>`
            : `<a class="nav-link text-warning fw-bold" href="/auth.html">تسجيل الدخول</a>`;
        navs[0].appendChild(authLi);
    }
});
