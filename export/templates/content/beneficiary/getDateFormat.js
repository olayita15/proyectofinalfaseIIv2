exports.getDateFormat = (date)=>{
    const fecha = new Date(date);
    const dia = fecha.getUTCDate().toString().padStart(2, '0');
    const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getUTCFullYear().toString();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    return fechaFormateada
}