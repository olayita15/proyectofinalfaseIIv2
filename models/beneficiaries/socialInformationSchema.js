const mongoose = require('mongoose');
const { Schema } = mongoose;

const socialInformationSchema = new Schema({
  groupEthnicity: { type: String, enum: ['AFROCOLOMBIANO','INDIGENA',
  'NO SE AUTORECONOCE EN NINGUNO','RAIZAL DEL ARCHIPIELAGO DE SAN ANDRES'],  },
  beneficiarySisbenized: { type: Boolean, required: false },
  sisbenScore: { type: String, required: false },
  belongsToFamiliesInAction: { type: Boolean, required: false },
  directlyAffectedByArmedConflict: { type: Boolean, required: false },
  focusingCriteria:  { type: String, enum: ['a. Pertenecientes a hogares con puntaje SISBEN',
  'b. Pertenecientes a familias identificadas a través de la Estrategia para la Superación de la Pobreza Extrema  Red UNIDOS.',
  'c. Niñas, niños y mujeres gestantes pertenecientes al programa Familias en Acción de Prosperidad Social.',
  'd. Niñas y niños egresados de la estrategia de atención y prevención de la desnutrición aguda (Centros de Recuperación Nutricional -CRN- y 1000 días para cambiar el mundo y unidades de búsqueda activa','e. Remitidos por las entidades del Sistema Nacional de Bienestar Familiar -SNBF- que se encuentren en situación de vulnerabilidad, riesgo de vulneración de derechos o programas de protección del ICBF',
  'f. Víctimas de hechos violentos asociados al conflicto armado, de acuerdo con las directrices establecidas en la Ley 1448 de 2011 y los Decretos ley 4633, 4634 y 4635 de 2011, así como la Sentencia T-025 de 2004 proferida por la Corte Constitucional y demás desarrollos jurisprudenciales en torno a la existencia de un estado de cosas inconstitucional; para lo cual se considerarán aquellos cuyo estado se encuentre incluido dentro del RUV.',
  'g. Pertenecientes a comunidades étnicas (indígenas, comunidades negras, afrocolombianas, Palenqueros, Raizales y Rrom), que demanden el servicio.',
  'h. Niños y niñas con discapacidad que requieren diversos tipos de apoyo para su participación efectiva y que demandan acompañamiento en las actividades de cuidado; así como los que sean remitidos por las entidades del SNBF con base en el registro para la localización y caracterización de personas con discapacidad del Ministerio de Salud y Protección Social, como de los comités territoriales y locales de discapacidad y las entidades territoriales en salud.',
  'i. Usuarios del subsidio en especie para población vulnerable, del que trata el artículo 12 de la Ley 1537 de 2012 (Vivienda de Interés Social y Vivienda de Interés Prioritario), y el Decreto 1921 de 2012 o el que reglamente la materia.',
  'j. Niñas y niños cuyos padres estén en establecimientos de reclusión.',
  'k. Población migrante, refugiada o apátrida que cumpla con alguna de las siguientes características: ausencia de vivienda o condiciones de hacinamiento, que no cuenten con acceso a servicios públicos domiciliarios o que no cuenten con ningún tipo de afiliación al Sistema General de Seguridad Social en Salud.',
  'l. Niñas y niños remitidos del servicio HCB FAMI y DIMF que al cumplir los dos (2) años deben transitar a otros servicios de educación inicial de atención permanente.',
  'm. Niñas y niños cuyos padres estén activos en la ruta de reincorporación e identificados en las bases de datos remitidas de forma oficial al ICBF por la Agencia para la Reincorporación y la Normalización – ARN.',
  'n. Para el servicio de Hogar Infantil se atenderá prioritariamente niños y niñas hijos de trabajadores que evidencien vinculación laboral y demás requisitos establecidos en la resolución 1740 de 2010.',
  'o. Ingresos iguales o inferiores a 1.5 Smlv'],  },
  justificationDocumentExists: { type: Boolean, required: false }
});

module.exports = socialInformationSchema;

