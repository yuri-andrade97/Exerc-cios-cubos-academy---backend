![](https://i.imgur.com/xG74tOh.png)

# Exercício de casa 🏡

## Temporizador de jogos

Num determinado jogo, cada rodada dura 10 segundos. Faça um programa que imprima o nome de cada jogador em seu devido momento.

Para saber quanto tempo cada jogador terá para jogar, basta saber quantos jogadores participarão e dividir o tempo de cada rodada pela quantidade de jogadores, que no caso desse jogo é 10.

Exemplo:

```javascript
const jogadores = ["Guido", "Dina", "Léo", "Nanda", "Juninho"]
```

Digamos que 5 pessoas estão participando dessa rodada, conforme o array acima. Nesse caso `10 / 5 = 2`, então, a cada dois segundos será exibido o nome de um jogador.

Ao final da rodada, o programa deverá imprimir a mensagem: `A rodada terminou!`

Faça o teste com outros exemplos.

Faça commit do resultado.

<details>
  <summary>Dicas</summary>
  <ul>
    <li>Utilizar a função <code>setInterval()</code></li>
  </ul>
</details>

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
-   [ ] Realizar o pull request

###### tags: `backend` `lógica` `exercício de casa` `nodeJS` `JavaScript`
