# gso-criptografia

Trabalho realizado para a disciplina de Gestão de Sistemas Operacionais, cuja proposta era criar uma criptografia.

## Como funciona?

![](https://upload.wikimedia.org/wikipedia/commons/9/9a/Vigen%C3%A8re_square_shading.svg)

A criptografia criada funciona da seguinte forma: seguindo a tabela acima, a key de uma letra será a letra seguinte na string. Espaços são apenas pulados e não traduzidos. A última letra da string será cruzada com a key inserida pelo usuário.

Para fazer a descriptografia, a string é invertida, e traduzida a partir da key do usuário.

Nessa primeira versão, ela funciona apenas para letras minúsculas e espaços.

## Exemplo

Criptografando a palavra "code" com a key "m"
c X o = q
o X d = r
d X e = h
e X m = q

"code" ==> "qrhq"
