// 1 Activo
// 2 Vencida
// 3 Cumplida
enum Estado {
    "ACTIVO",
    "VENCIDA",
    "CUMPLIDA"
}
type TipoEstado = "ACTIVO" | "VENCIDA" | "CUMPLIDA";
export interface INote {
    id?: number;
    titulo: string; 
    descripcion: string;
    fechaCreacion?: Date;
    fechaVencimiento: Date;
    estado: TipoEstado
}
const nota: INote = {
    descripcion: '',
    estado: "ACTIVO",
    fechaVencimiento: new Date(),
    titulo: '',
    fechaCreacion: new Date(),
    id: 0
}