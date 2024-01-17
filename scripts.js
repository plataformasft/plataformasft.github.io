const users = [
    { email: "plataformas@vitapro.com.pe", password: "Lima2022" },
    { email: "bdonayred@vitapro.com.pe", password: "980733753" }
    // Agrega más usuarios según sea necesario
];

function checkPassword() {
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    const user = users.find(u => u.email === enteredEmail && u.password === enteredPassword);

    if (user) {
        showDashboards();
        showImage();
    } else {
        alert("Credenciales incorrectas. Intenta de nuevo.");
    }
}


function showDashboards() {
    const dashboardLinksContainer = document.getElementById("dashboardLinksContainer");
    const loginContainer = document.querySelector(".login-container");

    // Enlaces a tus dashboards de Power BI
    const dashboardLinks = [
    { name: "Gestión AT", url: "https://app.powerbi.com/Redirect?action=OpenApp&appId=be09ab89-8aa9-4ac7-bc0b-bb6c25587d74&ctid=3b16616d-f174-497a-a1ae-900d85106996" }
        // Agrega más enlaces según sea necesario
    ];

    // Construye los enlaces y agrégales al contenedor
    dashboardLinks.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.name
        anchor.classList.add("dashboard-link"); // Añade la clase dashboard-link
        dashboardLinksContainer.appendChild(anchor);
    });


// Oculta el contenedor de inicio de sesión
loginContainer.style.display = "none";


    // Agrega una clase al primer dashboard-link para activarlo
    const firstDashboardLink = document.querySelector(".dashboard-link");
    if (firstDashboardLink) {
        firstDashboardLink.classList.add("dashboard-link-active"); // Nueva clase para el enlace activo
    }
}

function showImage() {
    const img1 = document.getElementById("dashboardImage"); // Cambié el ID a "dashboardImage"
    
    if (img1) {
        img1.style.display = "block"; // Hace visible la imagen
    }
}

