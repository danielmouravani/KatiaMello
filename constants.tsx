import { Eye, Activity, ShieldCheck, Microscope, Glasses, Users } from "lucide-react";
import { NavItem, Specialty, Doctor, Testimonial, Stat, Partner, Lens } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Catarata", href: "cataract" },
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
    specialty: "Glaucoma",
    image: "https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/dr-marcio-pereira-m6LZvR7bw1ipERaR.jpg"
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