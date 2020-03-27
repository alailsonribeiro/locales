/**
 * @ Author: **Aailson Barbosa Ribeiro**
 * @ Create Time: 2020-03-27 15:57:49
 * @ Modified by: @alailsonribeiro
 * @ Modified time: 2020-03-27 20:39:30
 * @ Description: +info: [https://alailson.com.br/barbosa-ribeiro-about-sobre](https://alailson.com.br/barbosa-ribeiro-about-sobre)

# JSON Locales files with WORLD countries local sets(params) to use in multilingual apps.
_(JSON Arquivos locais com conjuntos locais (parâmetros) de países do MUNDO para usar em aplicativos multilíngues)_
### Multilingual locales JSON files.

The files is in directory estructure like:
_(Os arquivos estão na estrutura de diretórios como:)_

```
./locales/<langcode>/<countrycode>/[localcode]/lang.json
```

## Example / Exemplo 
to pt_BR or pt-BR iso locate in:
_(para pt_BR ou pt-BR iso, localize em:)_

```
./locales/pt/BR/lang.json
```
### Sample JSON

```
{
   "Author of this method": "Alailson Barbosa Ribeiro <ribeiro@alailson.com.br> (c)2020",
   "Arabic": "عربى",
   "ar": "عربى",
   "LocalSets": {
      "code": "ar",
      "ietf": "ar",
      "name": "Arabic",
      "language_name": "عربى",
      "language_code": null,
      "language_flag": "",
      "iso": "",
      "iso3": "",
      "country": "",
      "country_code": "",
      "country_name": "",
      "languages": null,
      "is_eu": "0",
      "phone_code": null,
      "currency": "",
      "currency_code": "",
      "currency_symbol": "",
      "population": null,
      "fips_code": null,
      "north": null,
      "south": null,
      "east": null,
      "west": null,
      "capital": null,
      "continent": null,
      "continent_name": null,
      "area_km2": null,
      "geo_name": null
   },
   "To translate include lines like these in this file in your language": "",
   "in english here": "in your language here",
   "": "",
   "Country ": "Country "
}

```
## See after editing with include your translations:
_(Veja após a edição incluir suas traduções:)_

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
