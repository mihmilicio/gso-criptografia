# gso-criptografia

Trabalho realizado para a disciplina de Gestão de Sistemas Operacionais, cuja proposta era criar uma criptografia. Foi desenvolvida utilizando Javascript, com uma interface básica para os dados em HTML5.

## Como funciona?

![](https://upload.wikimedia.org/wikipedia/commons/9/9a/Vigen%C3%A8re_square_shading.svg)

A criptografia criada funciona da seguinte forma: seguindo a tabela acima, a key de uma letra será a letra seguinte na string. Espaços são apenas pulados e não traduzidos. A última letra da string será cruzada com a key inserida pelo usuário.

Para fazer a descriptografia, a string é invertida, e traduzida a partir da key do usuário.

Nessa primeira versão, ela funciona apenas para letras minúsculas e espaços.

## Exemplo - algoritmo

Criptografando a palavra "code" com a key "m"
```
c X o = q
o X d = r
d X e = h
e X m = q
```
"code" ==> "qrhq"

Descriptografando a string "qrhq" com a key "m"
Inverteremos a string, e usaremos a key do usuário por primeiro.
O esquema de busca na tabela também é invertido: olharemos na coluna da primeira letra, procurando a segunda, para descobrir a letra-resposta (linha).
```
m X q = e
e X h = d
d X r = o
o X q = c
```
Para concluir, invertemos a palavra de volta, para voltá-la ao normal.

"qrhq" ==> "code"

## Evidências

![](https://i.imgur.com/gVuxBQv.png)
![](https://i.imgur.com/Ioz4pNx.png)
![](https://i.imgur.com/5pN1b2U.png)
