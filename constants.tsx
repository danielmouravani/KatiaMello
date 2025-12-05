import { Eye, Activity, ShieldCheck, Microscope, Glasses, Users } from "lucide-react";
import { NavItem, Specialty, Doctor, Testimonial, Stat, Partner, Lens, Exam } from "./types";

export const WHATSAPP_LINK = "https://wa.me/5521987445823?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Catarata", href: "#catarata" },
  { label: "Refrativa", href: "#refrativa" },
  { label: "Exames", href: "#exames" },
  { label: "Sobre", href: "#stats" },
  { label: "Especialidades", href: "#specialties" },
  { label: "Corpo Clínico", href: "#team" },
  { label: "Convênios", href: "#partners" },
  { label: "Contato", href: "#footer" },
];

export const SPECIALTIES: Specialty[] = [
  {
    title: "Catarata",
    description: "Cirurgia moderna com facoemulsificação e lentes premium para restaurar sua visão.",
    icon: Eye,
    image: "https://picsum.photos/400/300?random=1"
  },
  {
    title: "Cirurgia Refrativa",
    description: "Correção de miopia, hipermetropia e astigmatismo com tecnologia laser de ponta.",
    icon: Activity,
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    title: "Córnea",
    description: "Tratamentos avançados para ceratocone, transplantes e doenças da superfície ocular.",
    icon: Microscope,
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    title: "Retina e Vítreo",
    description: "Diagnóstico e tratamento de retinopatia diabética, descolamento e DMRI.",
    icon: Activity,
    image: "https://picsum.photos/400/300?random=4"
  },
  {
    title: "Glaucoma",
    description: "Controle da pressão intraocular com colírios, lasers e cirurgias minimamente invasivas.",
    icon: ShieldCheck,
    image: "https://picsum.photos/400/300?random=5"
  },
  {
    title: "Lentes de Contato",
    description: "Adaptação personalizada de lentes rígidas, gelatinosas e esclerais.",
    icon: Glasses,
    image: "https://picsum.photos/400/300?random=6"
  }
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dra. Katia Mello",
    specialty: "Catarata",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dra-katia-que-cabe-A85e4prWEzTLbe2p.jpg"
  },
  {
    name: "Dra. Fabia Crespo",
    specialty: "Glaucoma",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/img_5543-2-A3Q2pg8qv8TDWEv8.jpg",
    crm: "52838446"
  },
  {
    name: "Dra. Claudia Morgado",
    specialty: "Córnea",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/470494881_582373847728893_3199652955436485462_n-mjE792GKxacvBDPZ.jpg"
  },
  {
    name: "Dra. Adriana Franco",
    specialty: "Retina",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dra-adriana-franco_-mp8Wn5DJnZuv6NE0.jpg"
  },
  {
    name: "Dra. Marceli Bastos",
    specialty: "Oftalmologista",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dra-marceli-bastos_-Awv4rnakX6c9K08Z.jpg"
  },
  {
    name: "Dra. Alana Reis",
    specialty: "Glaucoma",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dra-alana-maggesissi_-AGB2G52gO7t2DqRW.jpg"
  },
  {
    name: "Dr. Rodrigo Pegado",
    specialty: "Retina",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dr-rodrigo-pegado-YD0lpx432bU94ZzY.jpg"
  },
  {
    name: "Dr. Marcio Monteiro",
    specialty: "Oftalmologista",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dr-marcio-pereira-m6LZvR7bw1ipERaR.jpg"
  },
  {
    name: "Dr. Rodrigo Borges",
    specialty: "Córnea",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dr-rodrigo-borges-AGBznl628jfrE5gm.jpeg"
  },
  {
    name: "Dra. Julia Soares",
    specialty: "Córnea",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/f97cc78b-f8ae-4c37-8832-46ade3a4b5ff-mv0P2wDJWViBZRMb.png"
  }
];

export const STATS: Stat[] = [
  {
    value: 25,
    label: "Anos de Experiência",
    description: "Cuidando da visão de Duque de Caxias com dedicação.",
    suffix: " Anos"
  },
  {
    value: 200,
    label: "Atendimentos",
    description: "Milhares de pacientes satisfeitos e com a saúde ocular renovada.",
    prefix: "+",
    suffix: "k"
  },
  {
    value: 5,
    decimals: 1,
    label: "Atendimento 5 Estrelas",
    description: "Excelência e qualidade reconhecida por nossos pacientes.",
    suffix: ""
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Allan Goes",
    content: "Atendimento rápido e eficiente. A equipe é muito atenciosa e o ambiente super moderno.",
    rating: 5
  },
  {
    name: "Hayane Silva",
    content: "Recomendo muito. O atendimento foi para minha filha de 4 anos e ela foi muito bem tratada.",
    rating: 5
  },
  {
    name: "Ceiça Freitas",
    content: "Atenciosos, sem demora na espera. Médicos excelentes e equipamentos novos.",
    rating: 5
  },
  {
    name: "Kauan Costa",
    content: "Excelente atendimento, apesar de demorar um pouco pra marcar, valeu a pena.",
    rating: 4
  },
  {
    name: "Maria Oliveira",
    content: "Fiz minha cirurgia de catarata e estou enxergando perfeitamente. Obrigada Dra. Katia!",
    rating: 5
  },
  {
    name: "Roberto Santos",
    content: "Profissionais de altíssimo nível. A estrutura da clínica surpreende pela modernidade.",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    content: "Levo meus pais há anos. Confiança total na equipe e no diagnóstico preciso.",
    rating: 5
  },
  {
    name: "Lucas Mendes",
    content: "A cirurgia refrativa mudou minha vida. Adeus óculos! Recuperação super rápida.",
    rating: 5
  }
];

export const PARTNERS: Partner[] = [
  { name: "Amil", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/amil-YbNB9aoNxzc51oO1.png" },
  { name: "Bradesco Saúde", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/bradesco-saude-dJoZ4JjqMetr57bD.png" },
  { name: "Care Plus", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/care-plus-Aq2WoBOk3yHN0jO9.png" },
  { name: "Caurj", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/caurj-AzGX7rqGkEUkkqB1.png" },
  { name: "Real Grandeza", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/fundacao-real-grandeza-YNqBrJv8RpSeE1Dy.png" },
  { name: "Geap Saúde", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/geap-saude-Awv4kr7GxkFBVwxE.png" },
  { name: "Marinha do Brasil", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/marinha-A85e4po5gZIZDKxD.png" },
  { name: "Omint", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/omint-mp8W9na8Nyi0wyw5.png" },
  { name: "Porto Seguro", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/porto-seguro-AE0P4pBzRxi6vMNG.png" },
  { name: "Saúde Caixa", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/saude-caixa-mv0W7jEogOFpMDN7.png" },
  { name: "Saúde Petrobras", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/saude-petrobras-Yyv97ozGrkse8e2Z.png" },
  { name: "SulAmérica", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/sulamerica-saude-Awv4kr7v56c2bVO0.png" },
  { name: "Assefaz", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/assffaz-Yyv97ozGbPsyr3jz.png" },
  { name: "Assim Saúde", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/assim-AR0LbJ6qk0c8pWwn.png" },
  { name: "Mediservice", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/mediservice-YZ98b2y4kKupqbZ4.png" },
  { name: "Nuclep", logo: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/nuclep-d951gpRv03F6naGD.png" },
];

export const LENSES: Lens[] = [
  {
    title: "Lentes Monofocais",
    description: "Corrigem a visão para uma única distância, geralmente para longe. Ideais para quem não se importa em usar óculos para leitura.",
    features: ["Visão nítida para longe", "Tecnologia asférica", "Proteção UV"]
  },
  {
    title: "Lentes Multifocais",
    description: "Permitem visão clara em múltiplas distâncias, eliminando a necessidade de óculos para longe e perto. São ideais para leitura e atividades gerais.",
    features: ["Independência de óculos", "Foco perto e longe", "Maior liberdade"]
  },
  {
    title: "Lentes Trifocais",
    description: "Oferecem três zonas de foco: perto, intermediário e longe. Garantem transição suave entre diferentes distâncias, sendo ideais para computador.",
    features: ["Visão intermediária otimizada", "Conforto digital", "Performance superior"]
  },
  {
    title: "Lentes EDOF",
    description: "Foco Estendido. Proporcionam visão nítida em uma faixa contínua de distâncias. Reduzem halos noturnos, oferecendo mais conforto visual.",
    features: ["Menos halos e glare", "Contraste aprimorado", "Transição natural"]
  }
];

export const EXAMS: Exam[] = [
  { title: "Adaptação de lentes de contato", description: "Avaliação e escolha da melhor lente de contato para cada paciente.", category: "Lentes" },
  { title: "Avaliação ortóptica", description: "Avalia o alinhamento ocular e alterações na motilidade dos olhos.", category: "Geral" },
  { title: "Biometria óptica", description: "Medições precisas para cálculo de lentes intraoculares e verificação de medidas oculares.", category: "Pré-Operatório" },
  { title: "Biomicroscopia", description: "Exame detalhado das estruturas anteriores do olho.", category: "Geral" },
  { title: "Campo visual", description: "Avalia a visão periférica, essencial para diagnóstico de glaucoma e doenças neurológicas.", category: "Glaucoma" },
  { title: "Curva de pressão", description: "Avalia o comportamento da pressão ocular antes e após a ingestão de líquido.", category: "Glaucoma" },
  { title: "Ecobiometria", description: "Ultrassom ocular para medir estruturas e calcular lentes intraoculares.", category: "Pré-Operatório" },
  { title: "Exérese TU Conjuntival", description: "Procedimento de remoção de tumorações da conjuntiva.", category: "Cirúrgico" },
  { title: "Fotocoagulação a laser", description: "Tratamento a laser indicado para diversas doenças retinianas, como retinopatia diabética.", category: "Retina" },
  { title: "Fundoscopia sob midríase", description: "Avaliação detalhada da retina com pupila dilatada.", category: "Retina" },
  { title: "Gonioscopia", description: "Exame que avalia o ângulo de drenagem do olho, fundamental no glaucoma.", category: "Glaucoma" },
  { title: "Mapeamento de retina", description: "Exame aprofundado que analisa toda a retina, incluindo a periferia.", category: "Retina" },
  { title: "Microscopia especular", description: "Avalia a quantidade e saúde das células da córnea (endotélio).", category: "Córnea" },
  { title: "OCT de glaucoma", description: "Tomografia que avalia fibras nervosas e o nervo óptico com alta precisão.", category: "Glaucoma" },
  { title: "OCT de retina", description: "Tomografia retiniana de alta resolução para diagnóstico de mácula e retina.", category: "Retina" },
  { title: "PAM", description: "Avalia o potencial de visão do paciente, geralmente antes de cirurgias de catarata.", category: "Pré-Operatório" },
  { title: "Paquimetria", description: "Mede com precisão a espessura da córnea.", category: "Córnea" },
  { title: "Pterígio", description: "Avaliação clínica do tecido fibrovascular que cresce sobre a córnea.", category: "Superfície Ocular" },
  { title: "Refração sob cicloplegia", description: "Exame de grau realizado com relaxamento do foco ocular (colírio dilatador).", category: "Geral" },
  { title: "Retinografia", description: "Registro fotográfico detalhado do fundo do olho e nervo óptico.", category: "Retina" },
  { title: "Sondagem de vias lacrimais", description: "Desobstrução e avaliação das vias lacrimais.", category: "Vias Lacrimais" },
  { title: "Teste do olhinho", description: "Avaliação da transparência ocular em bebês recém-nascidos.", category: "Pediatria" },
  { title: "Teste de sobrecarga", description: "Avalia a pressão ocular após sobrecarga hídrica.", category: "Glaucoma" },
  { title: "Tonometria", description: "Medição da pressão intraocular, essencial para rastreio de glaucoma.", category: "Glaucoma" },
  { title: "Topografia", description: "Mapeamento da curvatura e formato da córnea.", category: "Córnea" },
  { title: "Ultrassonografia", description: "Ultrassom para análise interna do globo ocular quando há opacidade.", category: "Geral" },
  { title: "Visão subnormal", description: "Avaliação e acompanhamento de pacientes com baixa visão severa.", category: "Especial" },
  { title: "YAG capsulotomia", description: "Laser para limpar a 'sujeira' da lente intraocular pós-catarata.", category: "Laser" },
  { title: "YAG iridectomia", description: "Laser que cria uma abertura na íris para tratamento ou prevenção de glaucoma.", category: "Laser" }
];