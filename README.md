# Pegasus — Inteligência Contábil | Protótipo Plano Ouro

Protótipo web navegável para a Kryvan | Tecnologia Digital, construído com Next.js, TypeScript e Tailwind CSS.

## Requisitos
- Node.js 18.17+ (recomendado Node.js 20 LTS)
- npm

## Executar localmente
1. Extraia o arquivo ZIP.
2. Abra um terminal dentro da pasta `pegasus-inteligencia-contabil`.
3. Execute:

```bash
npm install
npm run dev
```

4. Acesse http://localhost:3000

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## O que já funciona neste protótipo
- Navegação entre visão geral, aprovações, clientes, Contador IA, documentos, solicitações internas e planos.
- Fluxo demonstrativo de aprovação: preparar → rejeitar com justificativa → simular correção → aprovar.
- Cadastro local de clientes e solicitações.
- Registro local de documentos e consulta de detalhes.
- Conversa demonstrativa com respostas predefinidas da IA.
- Seleção demonstrativa de plano comercial.
- Persistência local das alterações no navegador (localStorage).

## Limites importantes
Este é um protótipo funcional com dados fictícios e persistência local no navegador. Não inclui servidor, autenticação real, banco de dados compartilhado, isolamento multiempresa validado, IA conectada a um modelo, cálculos tributários oficiais, transmissão ao governo, integrações contábeis, assinatura eletrônica real ou certificação de segurança. Não usar para processar dados reais de clientes ou tomar decisões fiscais, trabalhistas ou jurídicas. Essas capacidades exigem serviços, credenciais, validação técnica e revisão profissional.


## Cenário Plano Ouro

Esta edição abre com o **Plano Ouro** selecionado e destaca esse plano como cenário principal para apresentação. Os recursos avançados são representados por fluxos e dados demonstrativos; isto não significa que IA real, auditoria de produção, integrações, autenticação robusta, assinatura eletrônica ou transmissão fiscal estejam implementadas.

### Limites importantes
- Dados são fictícios e ficam no armazenamento local do navegador.
- Não use dados reais de clientes, funcionários, documentos ou tributos.
- Preços, limites comerciais e recursos definitivos ainda precisam ser especificados.
- Antes de operação real, será necessário desenvolver backend, banco seguro, autenticação e autorização, isolamento entre clientes, trilhas de auditoria, integrações e testes técnicos/jurídicos.
