# api_sadmag

#COMIDA: /comida

Definição:
comida_id -> identificador do alimento, passado como UUID e reservado como binário
carb -> todo tipo de carboidrato
protl -> proteína de baixo valor biológico, majoritariamente encontrado em vegetais
proth -> proteína de alto valor biológico, encontrado em carnes, ovos, suplementos proteicos, leite e derivados
fat -> todo tipo de gordura
img -> link da imagem

TABELA COMIDA
comida_id: BINARY(16) NOT NULL,
nome: VARCHAR(100) NOT NULL,
carb: FLOAT NOT NULL,
protl: FLOAT NOT NULL,
proth: FLOAT NOT NULL,
fat: FLOAT NOT NULL,
img: VARCHAR(255) NOT NULL

GET_ALL:
Retorna a lista de alimentos registrados

Url: localhost:8080/comida

GET_ONE: /{comida_id}
Retorna um alimento específico passando como parâmetro "comida_id"

Exemplo de url: localhost:8080/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9

POST:
Adiciona um item a tabela pelo formato JSON.
Em "quantidade" será passado um valor em gramas, que dividirão carb, protl, proth e fat. Por exemplo, se a cada 100 gramas de um alimento, ele contém 10 gramas de carboidrato, a quantidade deve ser passada como 100, e o "carb" como 10, e no banco de dados, o "carb" estará como 0.1, equivalendo a 0.1g de carboidrato a cada grama do alimento.
Valores nutricionais (carb, protl, proth, fat) se não passados, serão considerados como 0.

Template: {
    "nome": String,
    "quantidade": Inteiro,
    "carb": Real,
    "protl": Real,
    "proth": Real,
    "fat": Real,
    "img": String
}

comida_id: será passado sozinho
nome: obrigatório
quantidade: obrigatório
carb: valor padrão 0
protl: valor padrão 0
proth: valor padrão 0
fat: valor padrão 0
img: valor padrão ""


Exemplo: {
    "nome": "Leite",
    "quantidade": 100,
    "carb": 4.52,
    "protl": 0,
    "proth": 3.2199,
    "fat": 3.25,
    "img": "https://s2.glbimg.com/d4rnbnuodTxCmEUjTIgOz9YNkEY=/0x0:1200x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/N/m/aQXLbLRrulZz0VJa4ZZA/foto2.jpg"
}

Url: localhost:8080/comida


PUT: /{comida_id}
Altera os valores do alimentos já inserido, só é necessário enviar o que deseja alterar pelo formato JSON, o alimento será identificado pelo "comida_id".
Sempre que um dado valor nutricional (carb, protl, proth, fat) for passado, deve ser acompanhado de "quantidade", que deve ser diferente de 0.
Exemplo: {
    "quantidade": 100,
    "carb": 5.2,
    "protl": 3.1
}

Exemplo de url: localhost:8080/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9

DELETE: /{comida_id}
Deleta um item da tabela passando o "comida_id".

Exemplo de url: localhost:8080/comida/3e7051ea-9e3d-11ed-982e-1cb72c8ac6b9

#PROGRESS: /progress

Definição:
progress -> momento de um exato dia e hora, especificado por ano, mes, dia, hora, minuto e segundo.
progress_id -> identificador de progress, passado como UUID e reservado como binário

TABELA PROGRESS
progress_id: BINARY(16) NOT NULL PRIMARY KEY,
nome: VARCHAR(255) NOT NULL,
ano: INT NOT NULL,
mes: INT NOT NULL,
dia: INT NOT NULL,
hora: INT NOT NULL,
minuto: INT NOT NULL,
segundo: INT NOT NULL


GET_ALL:
Retorna uma lista de progress registrados

Url: localhost:8080/progress

GET_ONE: /{progress_id}
Retorna um progress específico passando como parâmetro "progress_id"

Exemplo de url: localhost:8080/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9

POST:
Adiciona um item a tabela pelo formato JSON.
Hora, minuto e segundo serão considerados como 0, caso não tenham um valor inserido.

Template: {
    "nome": String,
    "ano": Integer,
    "mes": Integer,
    "dia": Integer,
    "hora": Integer,
    "minuto": Integer,
    "segundo": Integer
}

progress_id: será passado sozinho
nome: obrigatório
ano: obrigatório
mes: obrigatório
dia: obrigatório
hora: valor padrão 0
minuto: valor padrão 0
segundo: valor padrão 0

Exemplo: {
    "nome": "attempt 1",
    "ano": 2023,
    "mes": 4,
    "dia": 1,
    "hora": 12,
    "minuto": 47,
    "segundo": 0
}

Url: localhost:8080/progress

PUT: /{progress_id}
Altera os valores do progress já inserido, só é necessário enviar o que deseja alterar pelo formato JSON, o  progress será identificado pelo "progress_id".
Exemplo: {
    ano: 2019,
    mes: 12,
    dia: 24
}

Url: localhost:8080/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9

DELETE: /{progress_id}
Deleta um item da tabela passando o "progress_id".

Exemplo de Url: localhost:8080/progress/296a4172-d66d-11ed-8c84-7eae77e2dcf9
