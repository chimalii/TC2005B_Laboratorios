const misResenias = [
    {
      tipo: "Película",
      titulo: "Phanthom Thread", 
      fecha: "2017-12-25", 
      calificacion: 5, 
      resenia: "Phantom Thread's finely woven narrative is filled out nicely by humor, intoxicating romantic tension, and yet another impressively committed performance from Daniel Day-Lewis.", 
      imagen: "https://play-lh.googleusercontent.com/oBNm0M7mh5IU-sk5wId1klvrilS8RPNWYOlclSu4RpaucWeqsr_JNZF2shZMiKhfXz0",
    }
];

module.exports = class Resenia {

    //CONTRUCTOR de la clase, para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_tipo, mi_titulo, mi_fecha, mi_calificacion, mi_resenia, mi_imagen) {
        this.tipo = mi_tipo;
        this.titulo = mi_titulo;
        this.fecha = mi_fecha;
        this.calificacion = mi_calificacion;
        this.resenia = mi_resenia;
        this.imagen = mi_imagen;
    }

    //MÉTODO para guardar de manera persistente el nuevo objeto
    save() {
        misResenias.push({
            tipo: this.tipo,
            titulo: this.titulo,
            fecha: this.fecha,
            calificacion: this.calificacion,
            resenia: this.resenia,
            imagen: this.imagen,
        }); //Es lo mismo que misResenias.push(this);
    }

    //MÉTODO para devolver los objetos del almacenamiento persistente
    static fetchAll() {
        return misResenias;
    }

}