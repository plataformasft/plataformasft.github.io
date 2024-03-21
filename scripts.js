const users = [
    { email: "plataformas@vitapro.com.pe", password: "Lima2022" },
    { email: "bdonayred@vitapro.com.pe", password: "980733753" },
    { email: "kmendezs@vitapro.com.ec", password: "Lima2024" },
    { email: "rperedas@vitapro.com.pe", password: "Lima2024" },
    { email: "rzevillanoso@vitapro.com.pe", password: "Vita2024"},
    {email: "jmolinam@vitapro.com.pe", password: "Paloma@1983"},
    {email: "agarciagodoc@vitapro.com.pe", password:"Paloma@3611"},
    {email: "wllerenaa@vitapro.com.pe", password:"Marianita109"},
    {email: "mmanceroe@inbalnor.com.ec", password:"Vitapro2024"},
    {email: "rcamachoc@vitapro.com.hn", password:"Vitapro2024"},
    

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
    { name: "Gestión AT", url: "https://app.powerbi.com/Redirect?action=OpenApp&appId=be09ab89-8aa9-4ac7-bc0b-bb6c25587d74&ctid=3b16616d-f174-497a-a1ae-900d85106996" },
    { name: "Nutrición", url: "https://app.powerbi.com/Redirect?action=OpenApp&appId=cc78899e-f3e0-476d-aa8d-dd915fbbfdd6&ctid=3b16616d-f174-497a-a1ae-900d85106996" }    // Agrega más enlaces según sea necesario
    ];

// Limpiar el contenedor antes de agregar nuevos enlaces
dashboardLinksContainer.innerHTML = "";

// Construir los enlaces y agregarlos al contenedor
dashboardLinks.forEach(link => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.classList.add("dashboard-link"); // Añadir la clase dashboard-link
    anchor.style.display = "block"; // Establecer estilo para mostrar cada enlace en una nueva línea
    dashboardLinksContainer.appendChild(anchor);
});



    // Construye los enlaces y agrégales al contenedor
    // dashboardLinks.forEach(link => {
    //     const anchor = document.createElement("a");
    //     anchor.href = link.url;
    //     anchor.textContent = link.name
    //     anchor.classList.add("dashboard-link"); // Añade la clase dashboard-link
    //     dashboardLinksContainer.appendChild(anchor);
    // });


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
        img1.style.width = "1140px"; // Establece el ancho al 100% del contenedor
        //img1.style.height = "541.25px"; // Ajusta la altura automáticamente para mantener la proporción
        img1.style.height = "541.25px";
        img1.style.transform = "scale(01)";
    }
}

