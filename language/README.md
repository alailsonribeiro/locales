```
 * @ Author: **Aailson Barbosa Ribeiro**
 * @ Create Time: 2020-03-27 15:57:49
 * @ Modified by: ribeiro@alailson.com.br
 * @ Modified time: 2020-04-02 15:59:27
 * @ Description: +info: [https://alailson.com.br/barbosa-ribeiro-about-sobre](https://alailson.com.br/barbosa-ribeiro-about-sobre)
 * @ Inspiration in: [https://gist.github.com/ksol/62b489572944ca70b4ba](https://gist.github.com/ksol/62b489572944ca70b4ba)
 * @ Thanks to: @trainline-eu [Ksol](https://gist.github.com/ksol)
```

**Use in JS**
```
const language = require('./language/detect')

console.log(language())
```


**Sample of return in Chrome**
`
{ 
    detected: "pt-BR",  
    available: ["pt-BR", "pt", "en-US", "en"] 
}
 `

**Sample of return in Safari 10**
`
{ 
    detected: "pt-BR",  
    available: ["pt-BR"] 
}
 `

**Sample of return in Safari 8**
ALERT: here country show in lower case
`
{ 
    detected: "pt-br",  
    available: ["pt-br"] 
}
 `


**Direct in JS**
```
let lg = {
  a: navigator.language,
  b: navigator.languages,
  c: navigator.userLanguage,
  d: navigator.browserLanguage,
  e: navigator.systemLanguage
},   language =  {
    detected: lg.a || lg.c || lg.d || lg.e || lg.b[0],
    available: lg.b || [lg.a] || [lg.c] || [lg.d] || [lg.e]
  }
```
**Direct in Browser**
```
let lg = {
  a: window.navigator.language,
  b: window.navigator.languages,
  c: window.navigator.userLanguage,
  d: window.navigator.browserLanguage,
  e: window.navigator.systemLanguage
},   language =  {
    detected: lg.a || lg.c || lg.d || lg.e || lg.b[0],
    available: lg.b || [lg.a] || [lg.c] || [lg.d] || [lg.e]
  }
```
