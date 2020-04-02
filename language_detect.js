/**
 * @ Author: Aailson Barbosa Ribeiro
 * @ Create Time: 2020-03-30 13:20:41
 * @ Modified by: ribeiro@alailson.com.br
 * @ Modified time: 2020-04-02 15:37:06
 * @ Description: +info: https://alailson.com.br/barbosa-ribeiro-about-sobre
 */

module.exports = () => {
    let lg = {
        a: navigator.language,
        b: navigator.languages,
        c: navigator.userLanguage,
        d: navigator.browserLanguage,
        e: navigator.systemLanguage
    }
    return {
        detected: lg.a || lg.c || lg.d || lg.e || lg.b[0],
        available: lg.b || [lg.a] || [lg.c] || [lg.d] || [lg.e]
    }
}