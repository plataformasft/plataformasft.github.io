const users = [
    { email: "plataformas@vitapro.com.pe", password: "Lima2022" , name: "Plataformas"},
    { email: "bdonayred@vitapro.com.pe", password: "980733753" , name: "Bruno Donayre"},
    { email: "kmendezs@vitapro.com.ec", password: "Mendez2024" , name: "Kristel Mendez"},
    { email: "rperedas@vitapro.com.pe", password: "Pereda2024" , name: "Roy Pereda"},
    { email: "rzevillanoso@vitapro.com.pe", password: "Vita2024", name: "Rene Zevillanos"},
    {email: "rpalaciosj@vitapro.com.ec", password:"Nico2499", name: "Nicol Palacios"},
    {email: "gerencia@vitapro.com.pe", password:"Lima2024", name: "Gerencia"},
    {email: "acotado@vitapro.com.pe", password:"Lima2024", name: "Acotado"},
    {email:"jmaguinab@vitapro.com.pe", password:"Peru2040",name:"Jossy"},
    
    

    // Listado Nutricion/finanzas
    {email: "jmolinam@vitapro.com.pe", password: "Paloma@1983", name: "Jesus Molina"},
    {email: "agarciagodoc@vitapro.com.pe", password:"Paloma@3611", name: "Angelica Garcia"},
    {email: "wllerenaa@vitapro.com.pe", password:"Marianita109", name: "Wilhem Llerena"},
    {email: "mmanceroe@inbalnor.com.ec", password:"Vitapro2024", name: "Miriam Mancero"},
    {email: "rcamachoc@vitapro.com.hn", password:"Vitapro2024", name: "Roberto Josef Camacho"},
    
    // Listado de Rene para gerencia
    {email: "yparrag@vitapro.com.ec", password:"Parra2024", name: "Yanelly Parra"},
    {email: "cmarina@vitapro.com.ec", password:"Marin2024", name: "Andrés Marín"},
    {email: "mnovillon@vitapro.com.pe", password:"Novillo2024", name: "Manuel Novillo"},
    {email: "jtorresor@vitapro.com.ec", password:"Torres2024", name: "Jonathan Torres"},
    {email: "fhingtonr@vitapro.com.ec", password:"Hington2024", name: "Fidel Hington"},
    {email: "gsuarezu@vitapro.com.ec", password:"Suarez2024", name: "Gabriela Suarez"},
    {email: "mnunesa@vitapro.com.ec", password:"Nunez2024", name: "Marina Nunez"},
    {email: "avieirad@vitapro.com.ec", password:"Vieira2024", name: "Andressa Vieira"},
    {email: "jbellop@vitapro.com.ec", password:"Bello2024", name: "Jimmy Bello"},
    {email: "lveram@vitapro.com.ec", password:"Vera2024", name: "Lexy Vera"},
    {email: "jcabreraca@vitapro.com.ec", password:"Cabrera2024", name: "Jessica Cabrera"},
    {email: "wvargasa@vitapro.com.pe", password:"Vargas2024", name: "Wagner Vargas"},
    {email: "mriveraca@vitapro.com.ec", password:"Rivera2024", name: "María Alejandra Rivera"},
    {email: "bbowlert@vitapro.com.pe", password:"Bowler2024", name: "Brenda Bowler"},
    {email: "erone@vitapro.com.ec", password:"Ron2024", name: "Ernesto Ron"},
    {email: "jchavezgu@vitapro.com.ec", password:"Chavez2024", name: "Juan Carlos Chavez"},
    {email: "ypradov@vitapro.com.ec", password:"Prado2024", name: "Yamil Prado"},
    {email: "eariasf@vitapro.com.ec", password:"Arias2024", name: "Sebastian Arias"},
    {email: "storalh@vitapro.com.ec", password:"Toral2024", name: "Salatihel Toral"},
    {email: "frodriguess@vitapro.com.ec", password:"Rodriguez2024", name: "Felipe Rodriguez"},
    {email: "fvargasel@vitapro.com.ec", password:"Vargas2024", name: "Fabricio Vargas"},
    {email: "rquintanav@vitapro.com.ec", password:"Quintana2024", name: "Rafael Quintana"},
    {email: "jmartinezq@vitapro.com.ec", password:"Martinez2024", name: "José Luis Martinez"},
    {email: "jgarciap@vitapro.com.ec", password:"Garcia2024", name: "Jaime García"},
    {email: "rpalaciosj@vitapro.com.ec", password:"Palacios2024", name: "Nicole Palacios"},
    {email: "jlucasb@vitapro.com.ec", password:"Llucas2024", name: "Jhustine Llucas"},
    {email: "acooperp@vitapro.com.ec", password:"Cooper2024", name: "Allan Cooper"},
    {email: "gingermanl@vitapro.com.ec", password:"Ingerman2024", name: "Paola Ingerman"},
    {email: "nrodriguezl@vitapro.com.ec", password:"Rodriguez2024", name: "Nino Rodriguez"},
    {email: "aballadareso@vitapro.com.ec", password:"Balladares2024", name: "Ana Balladares"},
    {email: "avieirad@vitapro.com.ec", password:"Viera2024", name: "Andressa Viera"},
    {email: "pmontalbettg@vitapro.com.ec", password:"Montalbetti2024", name: "Pablo Montalbetti"},
    {email: "cquispeb@vitapro.com.ec", password:"Quispe2024", name: "Carlos Quispe"},
    {email: "bboadam@vitapro.com.ec", password:"Boada2024", name: "Susana Boada"},

    //nuevos usuarios para agrupadores gerencia
    {email: "vsandovala@vitapro.com.pe", password:"Lima2024", name: "Violeta Mercedes Sandoval Altamirano"},
    {email: "gmarinosg@vitapro.com.pe", password:"Gemg2024", name: "Gaby Eliana Mariños Gutierrez"},

    // Listado de Rene para Asesores tecnicos de campo: acotado
    {email: "ajaraa@vitapro.com.ec", password:"Jara2024", name: "Adrian Jara"},
    {email: "apazminof@vitapro.com.ec", password:"Pazmiño2024", name: "Andres Pazmiño"},
    {email: "ccrespop@vitapro.com.ec", password:"Crespo2024", name: "Carlos Crespo"},
    {email: "czambranoe@vitapro.com.ec", password:"Zambrano2024", name: "Carlos Zambrano"},
    {email: "cpolitc@vitapro.com.ec", password:"Polit2024", name: "Carol Polit"},
    {email: "cmonterol@vitapro.com.ec", password:"Montero2024", name: "Cristhian Montero"},
    {email: "ecelip@vitapro.com.ec", password:"Celi2024", name: "Elvis Celi"},
    {email: "fgonzalezd@vitapro.com.ec", password:"Gonzalez2024", name: "Fernando Gonzalez"},
    {email: "fpluasd@vitapro.com.ec", password:"Pluas2024", name: "Freddy Pluas"},
    {email: "hdavalosf@vitapro.com.ec", password:"Davalos2024", name: "Hugo Davalos"},
    {email: "ivintimillau@vitapro.com.ec", password:"Vintimilla2024", name: "Israel Vintimilla"},
    {email: "jmorap@vitapro.com.ec", password:"Mora2024", name: "Jorge Mora"},
    {email: "jgarcesm@vitapro.com.ec", password:"Garces2024", name: "Juan José Garces"},
    {email: "kjucag@vitapro.com.ec", password:"Juca2024", name: "Karla Juca"},
    {email: "kmoranteb@vitapro.com.ec", password:"Morante2024", name: "Katherine Morante"},
    {email: "kverap@vitapro.com.ec", password:"Vera2024", name: "Kiara Vera"},
    {email: "kquimisp@vitapro.com.ec", password:"Quimi2024", name: "Klever Quimi"},
    {email: "lsalazarco@vitapro.com.ec", password:"Salazar2024", name: "Luis Salazar"},
    {email: "obajanaf@vitapro.com.ec", password:"Bajaña2024", name: "Omar Bajaña"},
    {email: "pmedinar@vitapro.com.ec", password:"Medina2024", name: "Paul Medina"},
    {email: "rmindad@vitapro.com.ec", password:"Minda2024", name: "Rolando Minda"},
    {email: "rerazoq@vitapro.com.ec", password:"Erazo2024", name: "Rosa Erazo"},
    {email: "wsanchezj@vitapro.com.ec", password:"Sanchez2024", name: "Wendy Sanchez"},
    {email: "wriverai@vitapro.com.ec", password:"Rivera2024", name: "William Rivera"}



    // Agrega más usuarios según sea necesario
];

function checkPassword() {
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;
    // Correos permitidos para mostrar el div ACOTADO
    const allowedEmails = [ "acotado@vitapro.com.pe",
                            "ajaraa@vitapro.com.ec",
                            "apazminof@vitapro.com.ec",
                            "ccrespop@vitapro.com.ec",
                            "czambranoe@vitapro.com.ec",
                            "cpolitc@vitapro.com.ec",
                            "cmonterol@vitapro.com.ec",
                            "ecelip@vitapro.com.ec",
                            "fgonzalezd@vitapro.com.ec",
                            "fpluasd@vitapro.com.ec",
                            "hdavalosf@vitapro.com.ec",
                            "ivintimillau@vitapro.com.ec",
                            "jmorap@vitapro.com.ec",
                            "jgarcesm@vitapro.com.ec",
                            "kjucag@vitapro.com.ec",
                            "kmoranteb@vitapro.com.ec",
                            "kverap@vitapro.com.ec",
                            "kquimisp@vitapro.com.ec",
                            "lsalazarco@vitapro.com.ec",
                            "obajanaf@vitapro.com.ec",
                            "pmedinar@vitapro.com.ec",
                            "rmindad@vitapro.com.ec",
                            "rerazoq@vitapro.com.ec",
                            "wsanchezj@vitapro.com.ec",
                            "wriverai@vitapro.com.ec"

                          ]; 
    // Correos permitidos para mostrar el div GERENCIA
    const allowedEmailsAT  = [ "gerencia@vitapro.com.pe",
                            "yparrag@vitapro.com.ec",
                            "cmarina@vitapro.com.ec",
                            "mnovillon@vitapro.com.ec",
                            "jtorresor@vitapro.com.ec",
                            "fhingtonr@vitapro.com.ec",
                            "gsuarezu@vitapro.com.ec",
                            "mnunesa@vitapro.com.ec",
                            "avieirad@vitapro.com.ec",
                            "jbellop@vitapro.com.ec",
                            "lveram@vitapro.com.ec",
                            "jcabreraca@vitapro.com.ec",
                            "wvargasa@vitapro.com.pe",
                            "kmendezs@vitapro.com.ec",
                            "mriveraca@vitapro.com.ec",
                            "bbowlert@vitapro.com.pe",
                            "erone@vitapro.com.ec",
                            "jchavezgu@vitapro.com.ec",
                            "ypradov@vitapro.com.ec",
                            "rzevillanoso@vitapro.com.pe",
                            "eariasf@vitapro.com.ec",
                            "storalh@vitapro.com.ec",
                            "frodriguess@vitapro.com.ec",
                            "fvargasel@vitapro.com.ec",
                            "rquintanav@vitapro.com.ec",
                            "jmartinezq@vitapro.com.ec",
                            "jgarciap@vitapro.com.ec",
                            "rpalaciosj@vitapro.com.ec",
                            "jlucasb@vitapro.com.ec",
                            "acooperp@vitapro.com.ec",
                            "gingermanl@vitapro.com.ec",
                            "nrodriguezl@vitapro.com.ec",
                            "aballadareso@vitapro.com.ec",
                            "avieirad@vitapro.com.ec",
                            "pmontalbettg@vitapro.com.ec",
                            "cquispeb@vitapro.com.ec",
                            "vsandovala@vitapro.com.pe"
                          ]; 

    const user = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

    if (user) {
        let isAllowed = false;

        // Verificar si el correo electrónico está en la lista de correos permitidos
        if (allowedEmails.includes(enteredEmail)) {
            isAllowed = true;
            // Mostrar el div "Atributo_prod - AT"
            document.getElementById("atributoProdAT").style.display = "block";
            document.getElementById("containerAT").style.display = "block"; // Mostrar el contenedor del título
            document.getElementById("dashboardLinksContainer").style.display = "none";
            document.getElementById("usernameAT").innerText = "Hola, " + user.name; // Mostrar el nombre del usuario
        } else if (allowedEmailsAT.includes(enteredEmail)) {
            isAllowed = true;
            // Mostrar el div "Gestión de Asesoría Técnica"
            document.getElementById("gestionAT").style.display = "block";
            document.getElementById("containerGestionAT").style.display = "block"; // Mostrar el contenedor del título
            document.getElementById("dashboardLinksContainer").style.display = "none";
            document.getElementById("usernameGestionAT").innerText = "Hola, " + user.name; // Mostrar el nombre del usuario
        }

        if (!isAllowed) {
            // Ocultar los divs si el correo electrónico no está permitido
            document.getElementById("atributoProdAT").style.display = "none";
            document.getElementById("gestionAT").style.display = "none";
        }

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
    { name: "Nutrición", url: "https://app.powerbi.com/Redirect?action=OpenApp&appId=cc78899e-f3e0-476d-aa8d-dd915fbbfdd6&ctid=3b16616d-f174-497a-a1ae-900d85106996" } ,
    { name: "Finanzas", url: "https://app.powerbi.com/Redirect?action=OpenApp&appId=2e41b323-44b8-4a89-a5ed-621a108ffdb6&ctid=3b16616d-f174-497a-a1ae-900d85106996"}
        
        // Agrega más enlaces según sea necesario
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
        img1.style.width = "1600px"; // Establece el ancho al 100% del contenedor
        //img1.style.height = "541.25px"; // Ajusta la altura automáticamente para mantener la proporción
        img1.style.height = "2800px";
        img1.style.transform = "scale(01)";
    }
}


