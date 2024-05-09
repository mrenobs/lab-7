document.addEventListener("DOMContentLoaded", () => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then(response => response.json())
        .then(data => {
            const proyecto1 = data.find(proyecto => proyecto.uuid === "2");
            if (proyecto1) {
                mostrarProyecto(proyecto1);
            } else {
                alert("El proyecto con UUID 2 no existe en la API.");
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos de la API:", error);
        });
        
});
function mostrarProyecto(proyecto) {
    const container = document.getElementById("projects-container2");
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
