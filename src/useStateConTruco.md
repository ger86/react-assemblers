# Render 1 App()

count = 1;

Pintamos -> Contador: 1

😁 El usuario pincha -> se ejecuta callback() -> Cuenta atrás #1 de 3 segundos

😁 El usuario pincha -> se ejecuta callback() -> Cuenta atrás #2 de 3 segundos

😁 El usuario pincha -> se ejecuta callback() -> Cuenta atrás #3 de 3 segundos

⏰ Pasan 3 segundos

## Callback #1

setCount(count + 1); -> setCount(2);

## Callback #2

setCount(count + 1); -> setCount(2);

## Callback #3

setCount(count + 1); -> setCount(2);

## Render 2 App()

count = 2

Pintamos -> Contador: 2

## Render 3 App()

count = 2

Pintamos -> Contador: 2

## Render 4 App()

count = 2

Pintamos -> Contador: 2
