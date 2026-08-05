type Message = { from: "them" | "me"; text: string; time: string };

type Chat = {
  name: string;
  initial: string;
  messages: Message[];
};

const chats: Chat[] = [
  {
    name: "Marcos T.",
    initial: "M",
    messages: [
      { from: "them", text: "Mano, preciso te agradecer! 🙏", time: "10:15" },
      {
        from: "them",
        text: "Fiz o treino de controle na sala e já tô segurando 30 embaixadinhas.",
        time: "10:16",
      },
      { from: "me", text: "Isso aí Marcos! Constância é tudo 💪", time: "10:18" },
      { from: "them", text: "Melhor R$27 que gastei esse ano.", time: "10:20" },
    ],
  },
  {
    name: "Fernanda R.",
    initial: "F",
    messages: [
      { from: "them", text: "Eu tava sem tempo de ir na quadra…", time: "14:32" },
      { from: "them", text: "Abri o guia, escolhi um treino de 15 min e pronto.", time: "14:33" },
      { from: "me", text: "É pra isso mesmo, Fê 🤩", time: "14:35" },
      { from: "them", text: "Meu fôlego no jogo de sábado mudou demais.", time: "14:37" },
    ],
  },
  {
    name: "Diego A.",
    initial: "D",
    messages: [
      { from: "them", text: "Comprei ontem, hoje já treinei duas vezes.", time: "19:05" },
      { from: "them", text: "Sem rede, sem areia, só a bola mesmo.", time: "19:06" },
      { from: "me", text: "Simples e direto, é a ideia 🙌", time: "19:08" },
      { from: "them", text: "Já mandei pro grupo da galera.", time: "19:10" },
    ],
  },
  {
    name: "Camila S.",
    initial: "C",
    messages: [
      { from: "them", text: "Nunca consegui manter rotina de treino.", time: "09:45" },
      { from: "them", text: "Com a tabela semanal completei 3 semanas seguidas 😍", time: "09:46" },
      { from: "me", text: "Que orgulho, Camila! 💛", time: "09:48" },
      { from: "them", text: "Meu toque melhorou muito, recomendo demais.", time: "09:50" },
    ],
  },
  {
    name: "Rafael M.",
    initial: "R",
    messages: [
      { from: "them", text: "Cara, esse material salvou minha semana.", time: "21:10" },
      { from: "them", text: "Tava estagnado, repetindo sempre o mesmo treino.", time: "21:11" },
      { from: "me", text: "Feliz demais em ouvir isso, Rafa 🙏", time: "21:13" },
      { from: "them", text: "Cheguei bem mais afiado no jogo de domingo.", time: "21:15" },
    ],
  },
  {
    name: "Bruno L.",
    initial: "B",
    messages: [
      { from: "them", text: "Achei que precisava de quadra pra evoluir.", time: "08:07" },
      { from: "them", text: "Treino no quintal, 20 minutos por dia. Funciona!", time: "08:08" },
      { from: "me", text: "É isso, Bruno! 🥳", time: "08:10" },
      { from: "them", text: "A galera já perguntou onde eu tava treinando 😂", time: "08:12" },
    ],
  },
];

export function WhatsappChats() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {chats.map((chat) => (
        <div
          key={chat.name}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
              {chat.initial}
            </div>
            <div>
              <p className="font-heading text-sm font-semibold">{chat.name}</p>
              <p className="text-xs text-primary">online</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-muted/30 p-4">
            {chat.messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                  message.from === "me"
                    ? "self-end rounded-br-sm bg-primary/10 text-foreground"
                    : "self-start rounded-bl-sm bg-card text-foreground"
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                  {message.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
