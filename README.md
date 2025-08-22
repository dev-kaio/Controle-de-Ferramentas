# 🛠 Controle de Retirada e Devolução de Ferramentas

Aplicação web PWA leve e eficiente para gerenciar a retirada e devolução de ferramentas por alunos, com interface intuitiva, funcionamento offline e possibilidade de instalação como aplicativo.

---

## ℹ Sobre o Projeto

Este sistema foi desenvolvido como uma **PWA (Progressive Web App)** para facilitar o controle de empréstimo de ferramentas em ambientes educacionais, como oficinas técnicas ou laboratórios do SENAI. A interface permite registrar quem retirou determinada ferramenta, a quantidade, e acompanhar quais itens ainda não foram devolvidos — mesmo sem conexão com a internet.

---

## ⚙️ Funcionalidades

- ✅ Registro de retirada com campos para aluno, professor, ferramenta e quantidade.
- ✅ Tabela dinâmica exibindo todas as ferramentas que ainda não foram devolvidas.
- ✅ Interface simplificada, focada na agilidade e clareza das operações.
- ✅ Pode ser instalado como app no celular ou desktop.
- ✅ Funciona offline após o primeiro carregamento (graças ao cache da PWA).

---

## 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura da página e formulários.
- **JavaScript**: Lógica de registro, manipulação DOM e cache offline.
- **Service Worker**: Para funcionamento como PWA.
- **(Futuro)** Integração com backend (Node.js ou MySQL).

---

## 📝 Como Usar

1. Preencha os campos:
   - Aluno
   - Professor
   - Ferramenta
   - Quantidade
2. Clique em **Registrar Coleta**
3. Os dados serão adicionados à tabela de ferramentas não devolvidas.

---

## 🔧 Melhorias Futuras

- Histórico de transações
- Filtros por aluno, data ou ferramenta
- Responsividade total para dispositivos móveis

---
