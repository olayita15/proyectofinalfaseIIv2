exports.editHeader = (data) => {
    var texto = `    REGIONAL: _______mercancia_________               CENTRO ZONAL: ____plusvalia____      MUNICIPIO: ______dialectica______  

    NOMBRE DE LA MODALIDAD: ______materialismo ________
    
    NOMBRE DEL SERVICIO O FORMA DE OPERACIÓN: _____proletariado_____ 
    
    RACIÓN:   Mensual ___X___  Vacaciones o Receso_______ Otro ___ Especifique: ________________             
    
    MES DE ENTREGA:_______alienacion________
    
    
    NOMBRE DE LA  EAS:_____________FUNDACIÓN SOCIAL CRECER______________NOMBRE DE LA UDS/UBA /UCA ______ideologia___/___vanguardia________
    
    DIRECCIÓN DEL PUNTO DE ENTREGA  ALIMENTO DE ALTO VALOR NUTRICIONAL: _______enajenacion__________
    
    CÓDIGO DEL PUNTO DE ENTREGA ALIMENTO DE ALTO VALOR NUTRICIONAL:________reificacion_________   `;
    
    texto = texto.replace('mercancia', data.regional_ciudad);
    texto = texto.replace('plusvalia', data.centro_zonal);
    texto = texto.replace('dialectica', data.municipio);
    texto = texto.replace('materialismo', data.modalidad);
    texto = texto.replace('proletariado', data.servicio);
    texto = texto.replace('alienacion', data.mes_entrega);
    texto = texto.replace('ideologia', data.unidad);
    texto = texto.replace('vanguardia', data.dupla);
    texto = texto.replace('enajenacion', data.direccion_punto_entrega);
    texto = texto.replace('reificacion', data.codigo_punto_entrega);

    return texto;
}