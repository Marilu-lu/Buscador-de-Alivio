// 1. BASE DE DATOS
let inventarioHierbas = [
    { id: 1, nombre: "Abedul", cientifico: "Betula alba", familia: "Betulaceae", categoria: "Urinario", precio: 2200, stock: 15, partes: "Hojas, corteza.", uso: "Tratamiento de trastornos renales, diurético.", preparacion: "Infusión: 1 cda por taza.", precauciones: "No usar en insuficiencia renal severa.", imagen: "img/abedul.jpg" },
    { id: 2, nombre: "Achicoria", cientifico: "Cichorium intybus", familia: "Asteraceae", categoria: "Hepático", precio: 1800, stock: 20, partes: "Raíz, hojas.", uso: "Afecciones hepáticas y digestivas.", preparacion: "Decocción: 1 cdta por taza.", precauciones: "Evitar en cálculos biliares.", imagen: "img/achicoria.jpg" },
    { id: 3, nombre: "Ajenjo", cientifico: "Artemisia absinthium", familia: "Asteraceae", categoria: "Digestivo", precio: 2500, stock: 12, partes: "Hojas y flores.", uso: "Colerético, antiparasitario intestinal.", preparacion: "Infusión: 1/2 cdta por taza.", precauciones: "No usar durante el embarazo.", imagen: "img/ajenjo.jpg" },
    { id: 4, nombre: "Albahaca", cientifico: "Ocimum basilicum", familia: "Lamiaceae", categoria: "Digestivo", precio: 1500, stock: 30, partes: "Hojas y flores.", uso: "Digestivo, antiespasmódico.", preparacion: "Infusión: 1 cda por taza.", precauciones: "No se han descrito.", imagen: "img/albahaca.jpg" },
    { id: 5, nombre: "Alcachofa", cientifico: "Cynara scolymus", familia: "Asteraceae", categoria: "Hepático", precio: 2800, stock: 10, partes: "Hojas.", uso: "Estimula secreción biliar, reduce colesterol.", preparacion: "Infusión: 1 cda por taza.", precauciones: "Evitar en obstrucción biliar.", imagen: "img/alcachofa.jpg" },
    { id: 6, nombre: "Aloe (Sábila)", cientifico: "Aloe vera", familia: "Xanthorrhoeaceae", categoria: "Tópico", precio: 3500, stock: 8, partes: "Gel (pulpa).", uso: "Cicatrizante, gastritis, quemaduras.", preparacion: "Gel fresco tópico o ingerido.", precauciones: "No ingerir la piel externa.", imagen: "img/aloe%20vera.jpg" },
    { id: 7, nombre: "Anís", cientifico: "Pimpinella anisum", familia: "Apiaceae", categoria: "Digestivo", precio: 2100, stock: 25, partes: "Frutos (semillas).", uso: "Alivia flatulencias e indigestión.", preparacion: "Infusión: 1 cdta por taza.", precauciones: "No se han descrito.", imagen: "img/anis.jpg" },
    { id: 8, nombre: "Árnica", cientifico: "Arnica montana", familia: "Asteraceae", categoria: "Tópico", precio: 3200, stock: 5, partes: "Flores.", uso: "Anti-inflamatorio externo en golpes.", preparacion: "Compresas o tintura externa.", precauciones: "Solo uso externo.", imagen: "img/arnica.jpg" },
    { id: 9, nombre: "Arrayán", cientifico: "Luma chequen", familia: "Myrtaceae", categoria: "Respiratorio", precio: 2400, stock: 18, partes: "Hojas.", uso: "Tratamiento de tos, antiséptico.", preparacion: "Infusión: 1 cda por taza.", precauciones: "No usar en embarazo.", imagen: "img/arrayan.jpg" },
    { id: 10, nombre: "Artemisa", cientifico: "Artemisia vulgaris", familia: "Asteraceae", categoria: "Relajación", precio: 2700, stock: 14, partes: "Hojas y flores.", uso: "Jaquecas, anti-inflamatorio.", preparacion: "Infusión: 1 cdta por taza.", precauciones: "No usar durante el embarazo.", imagen: "img/artemisa.jpg" },
    { id: 11, nombre: "Boldo", cientifico: "Peumus boldus", familia: "Monimiaceae", categoria: "Hepático", precio: 2000, stock: 40, partes: "Hojas.", uso: "Trastornos digestivos y hepáticos.", preparacion: "Infusión: 1 cda por taza.", precauciones: "Evitar en obstrucción biliar.", imagen: "img/boldo.jpg" },
    { id: 12, nombre: "Matico", cientifico: "Buddleja globosa", familia: "Scrophulariaceae", categoria: "Tópico", precio: 2600, stock: 22, partes: "Hojas.", uso: "Cicatrizante, úlceras digestivas.", preparacion: "Infusión o decocción.", precauciones: "No se han descrito graves.", imagen: "img/matico.jpg" }
];

let packsPreparados = [
    { id: 101, nombre: "Pack Digestivo", precio: 4000, descripcion: "Boldo + Manzanilla. Ideal para aliviar malestares estomacales y digestiones pesadas.", stock: 5 },
    { id: 102, nombre: "Pack Alivio Tópico", precio: 5500, descripcion: "Matico + Aloe Vera. Combinación de potentes cicatrizantes y regeneradores de la piel.", stock: 4 },
    { id: 103, nombre: "Pack Purificante Hepático", precio: 4500, descripcion: "Achicoria + Alcachofa. Estimula y regula la secreción biliar y ayuda a controlar el colesterol.", stock: 6 },
    { id: 104, nombre: "Pack Bienestar Urinario", precio: 3800, descripcion: "Abedul + Anís. Propiedades diuréticas, desinfectantes de vías urinarias y aliviador de gases.", stock: 7 },
    { id: 105, nombre: "Pack Alivio Jaquecas", precio: 4200, descripcion: "Artemisa + Albahaca. Preparación natural orientada a mitigar dolores de cabeza y espasmos.", stock: 3 }
];

let carrito = [];

// 2. INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    renderizarCatalogo(inventarioHierbas);
    renderizarPacks();
    renderizarCarrito();
    renderizarAdminLista();

    // Eventos Filtro
    document.getElementById("filtro-form").addEventListener("submit", filtrarProductos);
    document.getElementById("filtro-form").addEventListener("reset", () => setTimeout(() => renderizarCatalogo(inventarioHierbas), 10));
    
    // Eventos Formularios
    document.getElementById("checkout-form").addEventListener("submit", procesarCheckout);
    document.getElementById("admin-form").addEventListener("submit", agregarProductoAdmin);
    
    // Botones Generales
    document.getElementById("btn-vaciar").addEventListener("click", vaciarCarrito);
    document.getElementById("btn-modo").addEventListener("click", () => document.body.classList.toggle("dark-mode"));
    document.getElementById("cerrar-detalle").addEventListener("click", () => document.getElementById("detalle-producto").classList.add("oculto"));
});

// 3. RENDERIZADO DOM
function renderizarCatalogo(lista) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";
    lista.forEach(h => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${h.imagen}" alt="${h.nombre}" onerror="this.src='https://via.placeholder.com/200?text=${h.nombre}'">
            <h3>${h.nombre}</h3>
            <p style="font-size:0.9rem; color:#666;">${h.categoria}</p>
            <p class="precio">$${h.precio.toLocaleString('es-CL')}</p>
            <p style="font-size:0.8rem;">Stock: ${h.stock}</p>
            <div class="card-buttons">
                <button class="btn-secundario" onclick="verDetalle(${h.id})">Detalles</button>
                <button class="btn-primary" onclick="agregarAlCarrito(${h.id}, false)" ${h.stock === 0 ? 'disabled' : ''}>
                    ${h.stock === 0 ? 'Agotado' : 'Agregar'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderizarPacks() {
    const grid = document.getElementById("pack-grid");
    grid.innerHTML = "";
    packsPreparados.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${p.nombre}</h3>
            <p style="margin: 10px 0; font-size:0.9rem;">${p.descripcion}</p>
            <p class="precio">$${p.precio.toLocaleString('es-CL')}</p>
            <p style="font-size:0.8rem;">Stock: ${p.stock}</p>
            <div class="card-buttons">
                <button class="btn-primary" style="width:100%" onclick="agregarAlCarrito(${p.id}, true)" ${p.stock === 0 ? 'disabled' : ''}>
                    ${p.stock === 0 ? 'Agotado' : 'Agregar Pack'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 4. LÓGICA CARRITO
window.agregarAlCarrito = (id, esPack) => {
    let item;
    if (esPack) {
        item = packsPreparados.find(p => p.id === id);
        if (item && item.stock > 0) { item.stock--; carrito.push({ ...item, esPack: true }); }
    } else {
        item = inventarioHierbas.find(h => h.id === id);
        if (item && item.stock > 0) { item.stock--; carrito.push({ ...item, esPack: false }); }
    }
    
    renderizarCatalogo(inventarioHierbas);
    renderizarPacks();
    renderizarCarrito();
    alert(`¡${item.nombre} agregado al carrito!`);
};

function renderizarCarrito() {
    const list = document.getElementById("cart-list");
    const empty = document.getElementById("cart-empty");
    list.innerHTML = "";
    
    if (carrito.length === 0) {
        empty.style.display = "block";
        actualizarTotales(0);
        return;
    }
    
    empty.style.display = "none";
    let subtotal = 0;
    
    carrito.forEach((item, index) => {
        subtotal += item.precio;
        const div = document.createElement("div");
        div.className = "admin-item";
        div.innerHTML = `
            <span><strong>${item.nombre}</strong> - $${item.precio.toLocaleString('es-CL')}</span>
            <button class="btn-danger" style="padding: 5px 10px" onclick="removerDelCarrito(${index})">X</button>
        `;
        list.appendChild(div);
    });
    
    actualizarTotales(subtotal);
}

window.removerDelCarrito = (index) => {
    const item = carrito[index];
    if (item.esPack) {
        const packInfo = packsPreparados.find(p => p.id === item.id);
        if (packInfo) packInfo.stock++;
    } else {
        const hierbaInfo = inventarioHierbas.find(h => h.id === item.id);
        if (hierbaInfo) hierbaInfo.stock++;
    }
    carrito.splice(index, 1);
    renderizarCatalogo(inventarioHierbas);
    renderizarPacks();
    renderizarCarrito();
};

function vaciarCarrito() {
    if(carrito.length === 0) return;
    carrito.forEach(item => {
        if (item.esPack) packsPreparados.find(p => p.id === item.id).stock++;
        else inventarioHierbas.find(h => h.id === item.id).stock++;
    });
    carrito = [];
    renderizarCatalogo(inventarioHierbas);
    renderizarPacks();
    renderizarCarrito();
}

function actualizarTotales(subtotal) {
    const despacho = subtotal > 0 && subtotal < 15000 ? 3000 : 0;
    document.getElementById("cart-subtotal").textContent = `$${subtotal.toLocaleString('es-CL')}`;
    document.getElementById("cart-despacho").textContent = subtotal > 0 && despacho === 0 ? "¡Gratis!" : `$${despacho.toLocaleString('es-CL')}`;
    document.getElementById("cart-total").textContent = `$${(subtotal + despacho).toLocaleString('es-CL')}`;
}

// 5. VENTANA MODAL (DETALLES)
window.verDetalle = (id) => {
    const h = inventarioHierbas.find(i => i.id === id);
    const modal = document.getElementById("detalle-producto");
    document.getElementById("detalle-info").innerHTML = `
        <h2 style="color:#2c5e3b">${h.nombre}</h2>
        <p style="font-style:italic; margin-bottom: 15px;">${h.cientifico} - Familia: ${h.familia}</p>
        <p><strong><i class="fa-solid fa-leaf"></i> Partes:</strong> ${h.partes}</p>
        <p style="margin: 10px 0;"><strong><i class="fa-solid fa-book-medical"></i> Uso:</strong> ${h.uso}</p>
        <p><strong><i class="fa-solid fa-mug-hot"></i> Preparación:</strong> ${h.preparacion}</p>
        <div style="background:#fdf2f2; padding:10px; border-radius:5px; margin-top:15px; color:#d9534f;">
            <strong><i class="fa-solid fa-triangle-exclamation"></i> Precauciones:</strong> ${h.precauciones}
        </div>
    `;
    modal.classList.remove("oculto");
};

// 6. FILTROS
function filtrarProductos(e) {
    e.preventDefault();
    const texto = document.getElementById("buscar-hierba").value.toLowerCase();
    const cat = document.getElementById("select-categoria").value;
    
    const filtrados = inventarioHierbas.filter(h => {
        const matchTexto = h.nombre.toLowerCase().includes(texto) || h.uso.toLowerCase().includes(texto);
        const matchCat = cat === "todas" || h.categoria === cat;
        return matchTexto && matchCat;
    });
    renderizarCatalogo(filtrados);
}

// 7. VALIDACIÓN DE FORMULARIOS
function procesarCheckout(e) {
    e.preventDefault();
    let valido = true;
    
    const nombre = document.getElementById("checkout-nombre").value.trim();
    const email = document.getElementById("checkout-email").value.trim();
    const tel = document.getElementById("checkout-telefono").value.trim();
    const dir = document.getElementById("checkout-direccion").value.trim();

    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    if (nombre.length < 3) { document.getElementById("error-nombre").textContent = "Nombre muy corto."; valido = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById("error-email").textContent = "Email inválido."; valido = false; }
    if (!/^[0-9]{9}$/.test(tel)) { document.getElementById("error-telefono").textContent = "Debe tener 9 números."; valido = false; }
    if (!dir) { document.getElementById("error-direccion").textContent = "Dirección requerida."; valido = false; }
    
    if (carrito.length === 0) { alert("Tu carrito está vacío."); valido = false; }

    if (valido) {
        alert(`¡Gracias por tu compra, ${nombre}! Tu pedido será procesado.`);
        carrito = [];
        renderizarCarrito();
        e.target.reset();
    }
}

// 8. ADMINISTRACIÓN CRUD
function renderizarAdminLista() {
    const list = document.getElementById("admin-lista");
    list.innerHTML = "";
    inventarioHierbas.forEach(h => {
        const div = document.createElement("div");
        div.className = "admin-item";
        div.innerHTML = `
            <span><strong>${h.nombre}</strong> - $${h.precio} | Stock: ${h.stock}</span>
            <button class="btn-danger" style="padding: 5px 10px" onclick="eliminarProducto(${h.id})">Eliminar</button>
        `;
        list.appendChild(div);
    });
}

function agregarProductoAdmin(e) {
    e.preventDefault();
    let valido = true;
    document.querySelectorAll("#admin-form .error-message").forEach(el => el.textContent = "");

    const nombre = document.getElementById("admin-nombre").value.trim();
    const cat = document.getElementById("admin-categoria").value;
    const precio = parseInt(document.getElementById("admin-precio").value);
    const stock = parseInt(document.getElementById("admin-stock").value) || 0;
    const uso = document.getElementById("admin-uso").value.trim();

    if (!nombre) { document.getElementById("error-admin-nombre").textContent = "Obligatorio"; valido = false; }
    if (isNaN(precio) || precio <= 0) { document.getElementById("error-admin-precio").textContent = "Mayor a 0"; valido = false; }
    if (!uso) { document.getElementById("error-admin-uso").textContent = "Obligatorio"; valido = false; }

    if (valido) {
        inventarioHierbas.push({
            id: Date.now(), nombre, categoria: cat, precio, stock, uso, 
            cientifico: "N/A", familia: "N/A", partes: "N/A", preparacion: "N/A", precauciones: "N/A", imagen: "img/default.jpg"
        });
        e.target.reset();
        renderizarCatalogo(inventarioHierbas);
        renderizarAdminLista();
        alert("Producto agregado exitosamente.");
    }
}

window.eliminarProducto = (id) => {
    if(confirm("¿Eliminar este producto?")) {
        inventarioHierbas = inventarioHierbas.filter(h => h.id !== id);
        renderizarCatalogo(inventarioHierbas);
        renderizarAdminLista();
    }
};