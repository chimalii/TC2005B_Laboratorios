const misPorVer = [
    {
        tipo_por_ver: "Serie",
        titulo_por_ver: "Shogun",
        estado: "En curso"
    },
    {
        tipo_por_ver: "Película",
        titulo_por_ver: "Kung-Fu Panda 4",
        estado: "Por ver"
    },
    {
        tipo_por_ver: "Documental",
        titulo_por_ver: "Rompan todo: La historia del rock en América Latina",
        estado: "Vista"
    }
];

module.exports = class Produccion {

    //CONTRUCTOR de la clase Produccion
    constructor(mi_tipo_por_ver, mi_titulo_por_ver, mi_estado) {
        this.tipo_por_ver = mi_tipo_por_ver;
        this.titulo_por_ver = mi_titulo_por_ver;
        this.estado = mi_estado;
    }

    //MÉTODO para guardar el nuevo objeto
    save() {
        misPorVer.push({
            tipo_por_ver: this.tipo_por_ver,
            titulo_por_ver: this.titulo_por_ver,
            estado: this.estado,
        }); 
    }

    //MÉTODO que devuelve objetos guardados
    static fetchAll() {
        return misPorVer;
    }
}