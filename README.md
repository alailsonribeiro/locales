```
 * @ Author: **Aailson Barbosa Ribeiro**
 * @ Create Time: 2020-03-27 15:57:49
 * @ Modified by: ribeiro@alailson.com.br
 * @ Modified time: 2020-03-27 19:12:48
 * @ Description: +info: https://alailson.com.br/barbosa-ribeiro-about-sobre
```
# Locales files with WORLD coutries local sets(params) to use in multilingual apps.
### Multi Lingual locales json files.

The files is in directory estructure like:

```
./locales/<langcode>/<countrycode>/[localcode]/lang.json
```

## Exemplo 
to pt_BR or pt-BR iso locate in:
```
./locales/pt/BR/lang.json
```
### Sample JSON

```
{
   "Author of this method": "Alailson Barbosa Ribeiro <ribeiro@alailson.com.br> (c)2020",
   "Portuguese (Brazil)": "Português (Brasil)",
   "pt_BR": "Português (Brasil)",
   "pt-BR": "Português (Brasil)",
   "LocalSets": {
      "code": "pt_BR",
      "ietf": "pt-BR",
      "name": "Portuguese (Brazil)",
      "language_name": "Português (Brasil)",
      "language_code": "pt_BR",
      "language_flag": "br",
      "iso": "BR",
      "iso3": "BRA",
      "country": "BRAZIL",
      "country_code": "76",
      "country_name": "Brazil",
      "languages": "pt-BR,es,en,fr",
      "is_eu": "0",
      "phone_code": "55",
      "currency": "Reais",
      "currency_code": "BRL",
      "currency_symbol": "R$",
      "population": "201103330",
      "fips_code": "BR",
      "north": "5.264877",
      "south": "-33.750706",
      "east": "-32.392998",
      "west": "-73.985535",
      "capital": "Brasília",
      "continent": "SA",
      "continent_name": "South America",
      "area_km2": "8511965",
      "geo_name": "BRA"
   },

   "To translate include lines like these in this file in your language": "Para traduzir, inclua linhas como estas neste arquivo no seu idioma", 
   "in english here": "em seu idioma aqui", 
   "": "",
   "Country Brazil": "País Brasil"
}
```
## See after editing with inlude new translation:

```
{
   "Author of this method": "Alailson Barbosa Ribeiro <ribeiro@alailson.com.br> (c)2020",
   "Portuguese (Brazil)": "Português (Brasil)",
   "pt_BR": "Português (Brasil)",
   "pt-BR": "Português (Brasil)",
   "LocalSets": {
      "code": "pt_BR",
      "ietf": "pt-BR",
      "name": "Portuguese (Brazil)",
      "language_name": "Português (Brasil)",
      "language_code": "pt_BR",
      "language_flag": "br",
      "iso": "BR",
      "iso3": "BRA",
      "country": "BRAZIL",
      "country_code": "76",
      "country_name": "Brazil",
      "languages": "pt-BR,es,en,fr",
      "is_eu": "0",
      "phone_code": "55",
      "currency": "Reais",
      "currency_code": "BRL",
      "currency_symbol": "R$",
      "population": "201103330",
      "fips_code": "BR",
      "north": "5.264877",
      "south": "-33.750706",
      "east": "-32.392998",
      "west": "-73.985535",
      "capital": "Brasília",
      "continent": "SA",
      "continent_name": "South America",
      "area_km2": "8511965",
      "geo_name": "BRA"
   },
   "To translate include lines like these in this file in your language": "Para traduzir, inclua linhas como estas neste arquivo no seu idioma",
   "in english here": "em seu idioma aqui",
   
   "Asia": "Ásia", 
   "Europe": "Europa",
   "North America": "América do Norte",
   "Africa": "África",
   "Oceania": "Oceania",
    "South America": "América do Sul", 

   "Country Brazil": "País Brasil"
}
```
