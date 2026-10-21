/**
 * Contenido de la portada.
 *
 * Datos de ejemplo (reemplazar antes de publicar):
 * universidad y año del título, plazos, valores de referencia,
 * teléfono, WhatsApp, horario, ciudad y cobertura.
 * El correo centroevaluacionesforense@gmail.com es el de contacto real.
 */

const ENTREGA = 'Informe pericial y ratificación en audiencia'
const PLAZO = '3 semanas aproximadas'

export const expert = {
  name: 'Marta Vidal Parra',
  role: 'Fundadora · Perito judicial · Asistente Social',
  headline: 'Peritajes para causas de familia, penal y laboral',
  lead: 'Asistente Social especializada en psicología jurídica, mediación familiar y penal, y peritaje social. Acreditada ante las Cortes de Apelaciones de Chile.',
}

export const aboutParagraphs = [
  {
    text: 'Soy la fundadora del Centro de Evaluaciones Forenses. Asistente Social, magíster en Psicología Jurídica e Intervención Psicosocial, con mención en Mediación Familiar y Penal.',
  },
  {
    text: 'Con más de diez años de experiencia en el ámbito pericial, efectuando evaluaciones para organismos judiciales en materia penal, familia y civil. Dichos informes periciales se sustentan en un trabajo metodológico riguroso, guiado por entrevistas semiestructuradas, aplicación de instrumentos, análisis técnico y triangulación de información, entre otras acciones.',
  },
  {
    text: 'Además, disponemos de profesionales especializados del área psicológica, quienes se encargan de efectuar evaluaciones en dicho ámbito, en causas judiciales de tribunales de familia, penal, civil y laboral.',
    emphasis: true,
  },
  {
    text: 'Todos nuestros profesionales disponen de experiencia y especialización, y se encuentran acreditados por las distintas Cortes de Apelaciones de Chile.',
  },
]

export const credentials = [
  {
    label: 'Título',
    value: 'Asistente Social',
    detail: 'Universidad de La Frontera, 2007',
  },
  {
    label: 'Postgrado',
    value: 'Magíster en Psicología Jurídica e Intervención Psicosocial',
    detail: 'Universidad Mayor, sede Temuco. Mención en Mediación Familiar y Penal',
  },
  {
    label: 'Registro de perito',
    value: 'Inscrita en la nómina de peritos judiciales',
    detail: 'Bienio 2026-2027, por las diferentes Cortes de Apelaciones de Chile.',
  },
]

export type ServiceOffer = {
  name: string
  purpose: string
  cause: string
  deliverable: string
  timeline: string
  audience: string
}

export type ServiceGroup = {
  title: string
  items: ServiceOffer[]
}

export type ServiceArea = {
  id: string
  title: string
  icon: 'penal' | 'civil' | 'laboral' | 'familia'
  groups?: ServiceGroup[]
  items?: ServiceOffer[]
}

function offer(input: Omit<ServiceOffer, 'deliverable' | 'timeline'>): ServiceOffer {
  return { ...input, deliverable: ENTREGA, timeline: PLAZO }
}

const penalVictim = 'Abogado querellante, Fiscalía o tribunal'
const penalAccused = 'Defensa, Defensoría Penal Pública o tribunal'
const civilAudience = 'Abogado o particular'
const laborAudience = 'Abogado, trabajador o empresa'
const familyAudience = 'Abogado, particular o tribunal de familia'

export const serviceAreas: ServiceArea[] = [
  {
    id: 'penal',
    title: 'Ámbito penal',
    icon: 'penal',
    groups: [
      {
        title: 'Víctimas',
        items: [
          offer({
            name: 'Valoración de daño psicológico',
            purpose:
              'Estima el daño emocional vinculado al delito y su relación con los hechos de la causa.',
            cause: 'Causas penales con víctima',
            audience: penalVictim,
          }),
          offer({
            name: 'Credibilidad del testimonio',
            purpose:
              'Analiza la consistencia del relato cuando la prueba depende en buena parte del testimonio.',
            cause: 'Delitos sexuales',
            audience: penalVictim,
          }),
          offer({
            name: 'Personalidad y funciones cognitivas',
            purpose:
              'Describe el funcionamiento cognitivo y de personalidad relevante para comprender el testimonio o el daño.',
            cause: 'Causas penales con víctima',
            audience: penalVictim,
          }),
        ],
      },
      {
        title: 'Imputados',
        items: [
          offer({
            name: 'Facultades mentales y funciones cognitivas',
            purpose:
              'Aporta antecedentes sobre la capacidad de comprender los hechos y de participar en el proceso.',
            cause: 'Causas penales, imputado o acusado',
            audience: penalAccused,
          }),
          offer({
            name: 'Evaluación de personalidad',
            purpose:
              'Describe rasgos de personalidad que el tribunal puede necesitar para valorar el caso o una medida.',
            cause: 'Causas penales, imputado o acusado',
            audience: penalAccused,
          }),
          offer({
            name: 'Riesgo por delitos violentos',
            purpose:
              'Evalúa factores de riesgo de violencia para decisiones de cautela, condena o seguimiento.',
            cause: 'Delitos violentos',
            audience: penalAccused,
          }),
          offer({
            name: 'Arraigo familiar, laboral y social',
            purpose: 'Documenta vínculos familiares, trabajo y redes de apoyo cuando se discute arraigo.',
            cause: 'Medidas cautelares o determinación de pena',
            audience: penalAccused,
          }),
          offer({
            name: 'Evaluación social familiar',
            purpose: 'Describe la situación familiar del imputado y su entorno de cuidado o apoyo.',
            cause: 'Causas penales con contexto familiar',
            audience: penalAccused,
          }),
        ],
      },
    ],
  },
  {
    id: 'civil',
    title: 'Ámbito civil',
    icon: 'civil',
    items: [
      offer({
        name: 'Daño y secuelas emocionales',
        purpose: 'Estima el daño psíquico y las secuelas asociadas a los hechos de la demanda.',
        cause: 'Juicios civiles de indemnización',
        audience: civilAudience,
      }),
      offer({
        name: 'Incapacidades psíquicas',
        purpose: 'Aporta antecedentes sobre la capacidad de una persona para decidir o administrar sus asuntos.',
        cause: 'Causas sobre capacidad civil',
        audience: civilAudience,
      }),
      offer({
        name: 'Mecanismos de protección',
        purpose: 'Valora si las medidas de protección existentes resguardan a la persona afectada.',
        cause: 'Causas civiles de protección',
        audience: civilAudience,
      }),
    ],
  },
  {
    id: 'laboral',
    title: 'Ámbito laboral',
    icon: 'laboral',
    items: [
      offer({
        name: 'Daño por maltrato o acoso laboral',
        purpose: 'Evalúa el daño asociado a maltrato o acoso dentro de la empresa.',
        cause: 'Tutela laboral y demandas por vulneración',
        audience: laborAudience,
      }),
      offer({
        name: 'Psicopatologías derivadas del trabajo',
        purpose: 'Analiza si hay una alteración psíquica relacionada con las condiciones de trabajo.',
        cause: 'Enfermedad profesional o daño laboral',
        audience: laborAudience,
      }),
    ],
  },
  {
    id: 'familia',
    title: 'Materia de familia',
    icon: 'familia',
    items: [
      offer({
        name: 'Competencias de crianza y cuidado',
        purpose:
          'Evalúa la capacidad de cuidado de niños, niñas y adolescentes para decisiones de cuidado personal.',
        cause: 'Cuidado personal y protección',
        audience: familyAudience,
      }),
      offer({
        name: 'Relación directa y regular',
        purpose: 'Informa las condiciones del vínculo para fijar, modificar o suspender un régimen de visitas.',
        cause: 'Régimen de relación directa y regular',
        audience: familyAudience,
      }),
      offer({
        name: 'Evaluación socioeconómica',
        purpose: 'Ordena ingresos, gastos y capacidad económica para alimentos, compensación o divorcio.',
        cause: 'Alimentos, compensación económica o divorcio',
        audience: familyAudience,
      }),
      offer({
        name: 'Violencia intrafamiliar',
        purpose: 'Describe el contexto de violencia no constitutiva de delito, conforme a la Ley N° 19.968.',
        cause: 'Causas de familia por violencia intrafamiliar',
        audience: familyAudience,
      }),
    ],
  },
]

export const causeOptions = ['Familia', 'Penal', 'Laboral', 'Civil', 'Otra'] as const

export const contact = {
  email: 'centroevaluacionesforense@gmail.com',
  phoneDisplay: '+56 9 3933 5709',
  phoneTel: '+56939335709',
  whatsappDisplay: '+56 9 6623 2356',
  whatsapp: '56966232356',
  whatsappText: 'Hola, quiero solicitar una cotización de una evaluación pericial.',
  city: 'Temuco',
  region: 'La Araucanía',
  coverage: 'Temuco, Padre Las Casas y Villarrica. Otras regiones con coordinación previa.',
  hours: 'Lunes a viernes, 9:00 a 18:00',
  modality: 'Presencial en Temuco y en línea cuando la distancia o el tribunal lo permiten.',
}

export function whatsappHref() {
  const text = encodeURIComponent(contact.whatsappText)
  return `https://wa.me/${contact.whatsapp}?text=${text}`
}
