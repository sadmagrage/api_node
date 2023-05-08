# api_node

## COMIDA: /comida

Definição:<br>
comida_id -> identificador do alimento, passado como UUID e reservado como binário<br>
carb -> todo tipo de carboidrato<br>
protl -> proteína de baixo valor biológico, majoritariamente encontrado em vegetais<br>
proth -> proteína de alto valor biológico, encontrado em carnes, ovos, suplementos proteicos, leite e derivados<br>
fat -> todo tipo de gordura<br>
img -> link da imagem<br>
<br>
TABELA COMIDA<br>
comida_id: BINARY(16) NOT NULL,<br>
nome: VARCHAR(100) NOT NULL,<br>
carb: FLOAT NOT NULL,<br>
protl: FLOAT NOT NULL,<br>
proth: FLOAT NOT NULL,<br>
fat: FLOAT NOT NULL,<br>
img: VARCHAR(255) NOT NULL<br>
<br>
### GET_ALL:
Retorna a lista de alimentos registrados<br>
<br>
Url: localhost:3000/comida<br>
<br>
### GET_ONE: /{comida_id}
Retorna um alimento específico passando como parâmetro "comida_id"<br>
<br>
Exemplo de url: localhost:3000/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9<br>
<br>
### POST:
Adiciona um item a tabela pelo formato JSON.<br>
Em "quantidade" será passado um valor em gramas, que dividirão carb, protl, proth e fat. Por exemplo, se a cada 100 gramas de um alimento, ele contém 10 gramas de carboidrato, a quantidade deve ser passada como 100, e o "carb" como 10, e no banco de dados, o "carb" estará como 0.1, equivalendo a 0.1g de carboidrato a cada grama do alimento.<br>
Valores nutricionais (carb, protl, proth, fat) se não passados, serão considerados como 0.<br>
<br>
Template: {<br>
    "nome": String,<br>
    "quantidade": Inteiro,<br>
    "carb": Real,<br>
    "protl": Real,<br>
    "proth": Real,<br>
    "fat": Real,<br>
    "img": String<br>
}<br>
<br>
comida_id: será passado sozinho<br>
nome: obrigatório<br>
quantidade: obrigatório<br>
carb: valor padrão 0<br>
protl: valor padrão 0<br>
proth: valor padrão 0<br>
fat: valor padrão 0<br>
img: valor padrão ""<br>
<br>
Exemplo: {<br>
    "nome": "Leite",<br>
    "quantidade": 100,<br>
    "carb": 4.52,<br>
    "protl": 0,<br>
    "proth": 3.2199,<br>
    "fat": 3.25,<br>
    "img": "https://s2.glbimg.com/d4rnbnuodTxCmEUjTIgOz9YNkEY=/0x0:1200x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/N/m/aQXLbLRrulZz0VJa4ZZA/foto2.jpg"<br>
}<br>
<br>
Url: localhost:3000/comida<br>
<br>
<br>
### PUT: /{comida_id}
Altera os valores do alimentos já inserido, só é necessário enviar o que deseja alterar pelo formato JSON, o alimento será identificado pelo "comida_id".<br>
Sempre que um dado valor nutricional (carb, protl, proth, fat) for passado, deve ser acompanhado de "quantidade", que deve ser diferente de 0.<br>
Exemplo: {<br>
    "quantidade": 100,<br>
    "carb": 5.2,<br>
    "protl": 3.1<br>
}<br>
<br>
Exemplo de url: localhost:3000/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9<br>
<br>
### DELETE: /{comida_id}
Deleta um item da tabela passando o "comida_id".<br>
<br>
Exemplo de url: localhost:3000/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9<br>
<br>
## PROGRESS: /progress
<br>
Definição:<br>
progress -> momento de um exato dia e hora, especificado por ano, mes, dia, hora, minuto e segundo.<br>
progress_id -> identificador de progress, passado como UUID e reservado como char<br>
<br>
TABELA PROGRESS<br>
progress_id: CHAR(36) NOT NULL PRIMARY KEY,<br>
nome: VARCHAR(255) NOT NULL,<br>
ano: INT NOT NULL,<br>
mes: INT NOT NULL,<br>
dia: INT NOT NULL,<br>
hora: INT NOT NULL,<br>
minuto: INT NOT NULL,<br>
segundo: INT NOT NULL<br>
<br><br>

### GET_ALL:
Retorna uma lista de progress registrados<br>
<br>
Url: localhost:3000/progress<br><br>

### GET_ONE: /{progress_id}
Retorna um progress específico passando como parâmetro "progress_id"<br>
<br>
Exemplo de url: localhost:3000/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9<br><br>

### POST:
Adiciona um item a tabela pelo formato JSON.<br>
Hora, minuto e segundo serão considerados como 0, caso não tenham um valor inserido.<br>
<br>
Template: {<br>
    "nome": String,<br>
    "ano": Integer,<br>
    "mes": Integer,<br>
    "dia": Integer,<br>
    "hora": Integer,<br>
    "minuto": Integer,<br>
    "segundo": Integer<br>
}<br>
<br>
progress_id: será passado sozinho<br>
nome: obrigatório<br>
ano: obrigatório<br>
mes: obrigatório<br>
dia: obrigatório<br>
hora: valor padrão 0<br>
minuto: valor padrão 0<br>
segundo: valor padrão 0<br>
<br>
Exemplo: {<br>
    "nome": "attempt 1",<br>
    "ano": 2023,<br>
    "mes": 4,<br>
    "dia": 1,<br>
    "hora": 12,<br>
    "minuto": 47,<br>
    "segundo": 0<br>
}<br>
<br>
Url: localhost:3000/progress<br><br>

### PUT: /{progress_id}
Altera os valores do progress já inserido, só é necessário enviar o que deseja alterar pelo formato JSON, o  progress será identificado pelo "progress_id".<br>
Exemplo: {<br>
    ano: 2019,<br>
    mes: 12,<br>
    dia: 24<br>
}<br>
<br>
Url: localhost:3000/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9<br><br>

### DELETE: /{progress_id}
Deleta um item da tabela passando o "progress_id".<br>
<br>
Exemplo de Url: localhost:3000/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9<br>

