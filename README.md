Site Pessoal & Portfólio - Rafael Holder
Este é o repositório do meu site pessoal, que serve como currículo, portfólio de projetos e blog. Foi desenvolvido para apresentar minhas habilidades, experiências e conhecimentos como Desenvolvedor SAP ABAP.

➡️ [Acesse a versão ao vivo aqui](https://rafaelholder.github.io/)

🚀 Sobre o Projeto
Este site foi criado para ser um hub central das minhas informações profissionais. O design usa o azul SAP como cor de destaque e uma assinatura (a fonte Herr Von Muellerhoff convertida em SVG) no cabeçalho, no lugar da foto e no rodapé. As iniciais RH no mesmo estilo (assets/logo.svg) são o ícone do site.

✨ Funcionalidades
Totalmente Responsivo: Design adaptável para uma ótima experiência em desktops, tablets e celulares.

Português e Inglês: Botão PT/EN no topo. O idioma também pode ser escolhido pelo link, com ?lang=en ou ?lang=pt.

Tema Claro e Escuro: Botão no topo; sem escolha salva, o site segue o tema do sistema.

Single-Page Application (SPA): Navegação fluida com rolagem suave entre as seções.

Seções Detalhadas:

Sobre Mim: Uma introdução à minha jornada profissional.

Experiência: Uma linha do tempo com minhas principais posições.

Habilidades: Destaque para as tecnologias e frameworks que domino.

Portfólio: Galeria para exibir meus projetos mais relevantes.

Blog: Espaço para compartilhar artigos e insights sobre segurança.

Contato: Links diretos para e-mail e redes sociais profissionais.

🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias web modernas e focadas em performance e design:

HTML5: Para a estrutura semântica do conteúdo.

Tailwind CSS: Para a estilização rápida e responsiva através de classes utilitárias, compilado em assets/css/style.css.

JavaScript (Vanilla): Para interatividade, como o menu mobile, os efeitos de scroll, a troca de idioma e de tema (assets/js/main.js).

Lucide Icons: Para os ícones vetoriais, garantindo leveza e nitidez.

Google Fonts: Para a tipografia (famílias 'Inter' e 'JetBrains Mono').

🎨 Como recompilar o CSS
O CSS sai de src/input.css e tailwind.config.js. Depois de mudar classes no index.html ou no main.js, rode (precisa do Node.js):

npm run build

Use npm run watch para recompilar sozinho enquanto edita. O assets/css/style.css gerado vai junto no commit, porque o GitHub Pages não roda o build.

🔧 Como Utilizar e Customizar
Você pode clonar este repositório para usar como base para o seu próprio site.

Clone o repositório:

git clone https://github.com/rafaelholder/rafaelholder.github.io.git

Abra o arquivo index.html em um editor de código de sua preferência (como o VS Code).

Personalize o conteúdo:

Textos: Altere diretamente no HTML os textos em português das seções Sobre, Experiência, etc. As versões em inglês ficam em assets/js/main.js, com a mesma chave do atributo data-i18n.

Imagem de Perfil: Na seção #sobre, troque o <svg> da assinatura dentro de .signature-frame por uma <img> com a sua foto.

Links: Atualize os href das tags <a> com seus links do LinkedIn, GitHub e e-mail.

Projetos e Blog: Modifique as seções #portfolio e #blog para adicionar seus próprios projetos e artigos.

Abra no navegador: Você pode abrir o arquivo index.html diretamente no seu navegador para visualizar as alterações localmente.

Feito com 💙 por Holder.
