# Reestruturar a landing no modelo de copy da referência

Manter 100% a identidade visual atual (verde/laranja, Outfit + Figtree, cantos arredondados, off-white) e trocar a **estrutura de copy e a ordem das seções** pelo modelo da página de referência, que é mais agressivo em conversão.

## Nova ordem da página

1. **Barra superior fixa de urgência** — "Oferta de lançamento acaba em 23:59:12 · De R$97 por R$27" com contador regressivo real (24h, reinicia por visitante via localStorage).
2. **Hero** — badge de categoria ("Treino em casa · Iniciante ao avançado"), título grande "147 Treinos de Futevôlei em Casa", subtítulo curto, imagem do produto/hero, bloco de preço com "De R$97 −72% / R$27 / pagamento único · acesso imediato", CTA "Quero os 147 treinos →", contador em cards (Horas : Min : Seg) e 3 selos (7 dias de garantia · Acesso imediato · Bônus incluso).
3. **Depoimentos em destaque (carrossel)** — logo depois do hero, prova social antecipada. Usa os depoimentos atuais em cards deslizáveis.
4. **O que você recebe** — lista de 10–11 itens com check, cobrindo os 147 treinos, PDF pronto, progressão, bônus.
5. **Frentes de treino** — os 5 blocos atuais (35/30/30/32/20) como grade de temas.
6. **Benefícios pra você** — lista curta em bullets (sem equipamento, no seu ritmo, direto ao ponto, do zero ao avançado, treina em qualquer espaço).
7. **Pra quem é** — lista dos 6 perfis atuais.
8. **Como funciona o acesso** — 3 passos: Receba no e-mail → Baixe o PDF → Treine dia após dia.
9. **Conversas reais (WhatsApp)** — grade de 6 cards imitando conversa de WhatsApp, com avatar, "online", balões e horários, adaptados pro público de futevôlei. Estilizados com os tokens do projeto.
10. **Bônus** — "Comprando hoje, você ganha R$ 111,00 em bônus GRÁTIS": os 3 bônus atuais com selo GRÁTIS, valor riscado e imagem gerada pra cada um.
11. **Caixa de oferta final** — mockup + preço + CTA + parcelamento e formas de pagamento.
12. **Garantia de 7 dias** — faixa com selo e texto de risco zero.
13. **FAQ** — as 7 perguntas atuais.
14. **Rodapé** — igual ao atual.

## Detalhes técnicos

- Tudo em `src/routes/index.tsx`, quebrado em componentes de seção dentro de `src/components/landing/` pra manter o arquivo legível.
- Contador: hook `useCountdown` client-side com guarda de hidratação (SSR seguro).
- Carrossel de depoimentos com o `carousel` do shadcn (adiciona a dependência embla se não existir).
- 3 imagens novas geradas para os cards de bônus + 1 mockup do produto para a caixa de oferta.
- Sem alteração no design system: apenas tokens já definidos em `src/styles.css`.
- Todos os CTAs continuam apontando para `/checkout`.
- Metadados de SEO da rota atualizados para refletir a nova headline.

## Fora do escopo

Nenhuma mudança no checkout nem em backend/pagamento.
