function validarFormulario() {
    const nombreCompleto = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const telefono = document.getElementById("phone").value;
    const mensaje = document.getElementById("Message").value;

    if (!nombreCompleto) {
        alert("Por favor, ingresa tu nombre completo.");
        return false;
    }

    if (!email || !/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        alert("Ingresa una dirección de correo electrónico válida.");
        return false;
    }

    if (!telefono || !/^\d+$/.test(telefono)) {
        alert("Ingresa un número de teléfono válido (solo dígitos).");
        return false;
    }

    if (!mensaje || mensaje.length > 400) {
        alert("El mensaje debe tener máximo 400 caracteres.");
        return false;
    }

    
    alert("Formulario enviado correctamente.");
    return true;
}


/* //proyectos 
window.addEventListener("load", () => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then(response => response.json())
        .then(data => {
            // Filtrar el proyecto con UUID 1
            const proyecto1 = proyecto.find(proyecto => proyecto.uuid === "1");
            if (proyecto1) {
                mostrarProyecto(proyecto1);
            } else {
                alert("El proyecto con UUID 1 no existe en la API.");
            }

            // Tomar otros tres proyectos al azar
            const otrosProyectos = obtenerProyectosAleatorios(data, 3);
            otrosProyectos.forEach(mostrarProyecto);
        });
});

// Ejemplo de datos de proyectos
const proyectos = [
    {
        uuid: "1",
        name: "Simplify",
        description: "Ul Design & App development",
        // ... otros campos de proyecto
    },
    {
        uuid: "2",
        name: "Dashcoin",
        description: "Web development",
        // ... otros campos de proyecto
    },
    {
        uuid: "3",
        name: "Vectorify",
        description: "User Experience Design",
        // ... otros campos de proyecto
    },
    // ... más proyectos
];
// Función para mostrar un proyecto en la página
function mostrarProyecto(proyecto) {
    const proyectosDiv = document.getElementById("proyectos");
    const proyectoDiv = document.createElement("div");
    proyectoDiv.innerHTML = `
        <h2>${proyecto.name}</h2>
        <p>${proyecto.description}</p>
        <p>${proyecto.content}</p>
        <img src="${proyecto.image}" alt="Imagen del proyecto">
        <p>Completado el: ${proyecto.completed_on}</p>
        <a href="#${proyecto.uuid}">Ver más</a>
    `;
    proyectosDiv.appendChild(proyectoDiv);
}





 
// Asignar eventos de clic a los enlaces "Learn more"
document.addEventListener("DOMContentLoaded", () => {
    const learnMoreLinks = document.querySelectorAll("a[href^='#uuid']");

    learnMoreLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const uuid = link.getAttribute("href").substring(1); // Obtén la UUID desde el atributo href
            mostrarProyectoPorUUID(uuid); // Muestra el proyecto correspondiente
        });
    });
});

// Función para mostrar un proyecto por UUID
function mostrarProyectoPorUUID(uuid) {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then(response => response.json())
        .then(proyectos => {
            const proyecto = proyectosos.find(proyecto => proyecto.uuid === uuid);
            if (proyecto) {
                // Actualiza el contenido de la sección
                const section = document.getElementById(uuid);
                section.querySelector("h4").textContent = proyecto.name;
                section.querySelector("p").textContent = proyecto.description;
                section.querySelector("img").src = proyecto.image;
                section.querySelector("p.completed-on").textContent = `Completado el: ${proyecto.completed_on}`;
            } else {
                alert(`El proyecto con UUID ${uuid} no existe en la API.`);
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
}
 */
// 1.js
// 1.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then(response => response.json())
        .then(data => {
            const proyecto1 = data.find(proyecto => proyecto.uuid === "1");
            if (proyecto1) {
                mostrarProyecto(proyecto1);
            } else {
                alert("El proyecto con UUID 1 no existe en la API.");
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
        
});
function mostrarProyecto(proyecto) {
    const container = document.getElementById("projects-container");
    const proyectoDiv = document.createElement("div");
    proyectoDiv.innerHTML = `
        <h2>${proyecto.name}</h2>
        <p>${proyecto.description}</p>
        <p>${proyecto.content}</p>
        <img src="${proyecto.image}" alt="Imagen del proyecto">
        <p>Completado el: ${proyecto.completed_on}</p>
    `;
    container.appendChild(proyectoDiv);
}

// Función para obtener proyectos aleatorios
function obtenerProyectosAleatorios(data, cantidad) {
    const proyectosAleatorios = [];
    while (proyectosAleatorios.length < cantidad) {
        const proyectoAleatorio = data[Math.floor(Math.random() * data.length)];
        if (!proyectosAleatorios.includes(proyectoAleatorio)) {
            proyectosAleatorios.push(proyectoAleatorio);
        }
    }
    return proyectosAleatorios;
}