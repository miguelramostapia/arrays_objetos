const propiedades_ventas = [
    {
        nombre: 'Departamento 1',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 2',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 3',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 4',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 5',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 6',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 7',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    },
    {
        nombre: 'Departamento 8',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Apartamento de lujo en zona exclusiva',
        ubicacion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        smoke_desc: 'No se permite fumar',
        pets: true,
        pets_desc: 'No se permiten mascotas'
    }
]

const texto_html=document.querySelector(".row")/*("#arreglo_cards")*/
let texto_de_paso=""
for (let venta of propiedades_ventas){
/*    texto_de_paso+=`<div class="card"><h5> ${venta.nombre}</h5></div>`*/
    texto_de_paso+=
    `<div id="arreglo_cards" class="col-md-4 mb-4">
        <div class="card">
            <img
            src=${venta.src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">${venta.descripcion}</h5>
                <p class="card-text">${venta.ubicacion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${venta.direccion}</p>
                <p><i class="fas fa-bed" ></i> ${venta.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${venta.baños} Baños      </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> ${venta.smoke_desc}</p>
                <p class="text-success"><i class="fas fa-paw"></i> ${venta.pets_desc}</p>
            </div>
        </div>
    </div>
    `
}
texto_html.innerHTML=texto_de_paso



