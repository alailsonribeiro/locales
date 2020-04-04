```
 * @ Author: **Aailson Barbosa Ribeiro**
 * @ Create Time: 2020-03-27 15:57:49
 * @ Modified by: ribeiro@alailson.com.br
 * @ Modified time: 2020-04-04 12:12:38
 ```
+info: [https://alailson.com.br/barbosa-ribeiro-about-sobre](https://alailson.com.br/barbosa-ribeiro-about-sobre)

### Locales 1.0.1

# JSON Locales files with WORLD countries with constant local sets(params) to use in multilingual apps.
_(JSON Arquivos locais com valores constantes de locais (parâmetros) de países do MUNDO para usar em aplicativos multilíngues)_
## Multilingual locales JSON files.

The files include the existing **svg/base64** flags to use directly in **<img src=**
_(Os arquivos incluem as bandeiras existentes em **svg/base64** para usar direto no **<img src=** )_

## Sample JSON
The files is in tow directories **code** and **ietf** name format like:
_(Os arquivos estão em dois diretorios **code** e **ietf** com nomes em formato como:)_
```
./locales/code/pt_BR.json

./locales/ietf/pt-BR.json
```

```
{
    "_id": {
      "$oid": "5cd9fe8308053b28c9037856"
   },
   "code": "ar_BH",
   "ietf": "ar-BH",
   "name": "Arabic (Bahrain)",
   "language_name": "العربية (البحرين)",
   "language_code": null,
   "language_flag": "bh",
   "iso": "BH",
   "iso3": "BHR",
   "country": "BAHRAIN",
   "country_code": "48",
   "country_name": "Bahrain",
   "countries_translation": "{\"AD\":\"Andorra\",\"AE\":\"United Arab Emirates\",\"AF\":\"Afghanistan\",\"AG\":\"Antigua and Barbuda\",\"AI\":\"Anguilla\",\"AL\":\"Albania\",\"AM\":\"Armenia\",\"AO\":\"Angola\",\"AR\":\"Argentina\",\"AS\":\"American Samoa\",\"AT\":\"Austria\",\"AU\":\"Australia\",\"AW\":\"Aruba\",\"AZ\":\"Azerbaijan\",\"BA\":\"Bosnia and Herzegovina\",\"BB\":\"Barbados\",\"BD\":\"Bangladesh\",\"BE\":\"Belgium\",\"BF\":\"Burkina Faso\",\"BG\":\"Bulgaria\",\"BH\":\"Bahrain\",\"BI\":\"Burundi\",\"BJ\":\"Benin\",\"BM\":\"Bermuda\",\"BN\":\"Brunei Darussalam\",\"BO\":\"Bolivia\",\"BR\":\"Brasil\",\"BS\":\"Bahamas\",\"BT\":\"Bhutan\",\"BW\":\"Botswana\",\"BY\":\"Belarus\",\"BZ\":\"Belize\",\"CA\":\"Canada\",\"CC\":\"Cocos (Keeling) Islands\",\"CD\":\"Congo, the Democratic Republic of the\",\"CF\":\"Central African Republic\",\"CG\":\"Congo\",\"CH\":\"Switzerland\",\"CI\":\"Cote D'Ivoire\",\"CK\":\"Cook Islands\",\"CL\":\"Chile\",\"CM\":\"Cameroon\",\"CN\":\"China\",\"CO\":\"Colombia\",\"CR\":\"Costa Rica\",\"CU\":\"Cuba\",\"CV\":\"Cape Verde\",\"CX\":\"Christmas Island\",\"CY\":\"Cyprus\",\"CZ\":\"Czech Republic\",\"DE\":\"Germany\",\"DJ\":\"Djibouti\",\"DK\":\"Denmark\",\"DM\":\"Dominica\",\"DO\":\"Dominican Republic\",\"DZ\":\"Algeria\",\"EC\":\"Ecuador\",\"EE\":\"Estonia\",\"EG\":\"Egypt\",\"EH\":\"Western Sahara\",\"EN\":\"Global\",\"ER\":\"Eritrea\",\"ES\":\"Spain\",\"ET\":\"Ethiopia\",\"FI\":\"Finland\",\"FJ\":\"Fiji\",\"FK\":\"Falkland Islands (Malvinas)\",\"FM\":\"Micronesia, Federated States of\",\"FO\":\"Faroe Islands\",\"FR\":\"France\",\"GA\":\"Gabon\",\"GB\":\"United Kingdom\",\"GD\":\"Grenada\",\"GE\":\"Georgia\",\"GF\":\"French Guiana\",\"GH\":\"Ghana\",\"GI\":\"Gibraltar\",\"GL\":\"Greenland\",\"GM\":\"Gambia\",\"GN\":\"Guinea\",\"GP\":\"Guadeloupe\",\"GQ\":\"Equatorial Guinea\",\"GR\":\"Greece\",\"GT\":\"Guatemala\",\"GU\":\"Guam\",\"GW\":\"Guinea-Bissau\",\"GY\":\"Guyana\",\"HK\":\"Hong Kong\",\"HN\":\"Honduras\",\"HR\":\"Croatia\",\"HT\":\"Haiti\",\"HU\":\"Hungary\",\"ID\":\"Indonesia\",\"IE\":\"Ireland\",\"IL\":\"Israel\",\"IN\":\"India\",\"IO\":\"British Indian Ocean Territory\",\"IQ\":\"Iraq\",\"IR\":\"Iran, Islamic Republic of\",\"IS\":\"Iceland\",\"IT\":\"Italy\",\"JM\":\"Jamaica\",\"JO\":\"Jordan\",\"JP\":\"Japan\",\"KE\":\"Kenya\",\"KG\":\"Kyrgyzstan\",\"KH\":\"Cambodia\",\"KI\":\"Kiribati\",\"KM\":\"Comoros\",\"KN\":\"Saint Kitts and Nevis\",\"KP\":\"Korea, Democratic People's Republic of\",\"KR\":\"Korea, Republic of\",\"KW\":\"Kuwait\",\"KY\":\"Cayman Islands\",\"KZ\":\"Kazakhstan\",\"LA\":\"Lao People's Democratic Republic\",\"LB\":\"Lebanon\",\"LC\":\"Saint Lucia\",\"LI\":\"Liechtenstein\",\"LK\":\"Sri Lanka\",\"LR\":\"Liberia\",\"LS\":\"Lesotho\",\"LT\":\"Lithuania\",\"LU\":\"Luxembourg\",\"LV\":\"Latvia\",\"LY\":\"Libyan Arab Jamahiriya\",\"MA\":\"Morocco\",\"MC\":\"Monaco\",\"MD\":\"Moldova, Republic of\",\"MG\":\"Madagascar\",\"MH\":\"Marshall Islands\",\"MK\":\"Macedonia, the Former Yugoslav Republic of\",\"ML\":\"Mali\",\"MM\":\"Myanmar\",\"MN\":\"Mongolia\",\"MO\":\"Macao\",\"MP\":\"Northern Mariana Islands\",\"MQ\":\"Martinique\",\"MR\":\"Mauritania\",\"MS\":\"Montserrat\",\"MT\":\"Malta\",\"MU\":\"Mauritius\",\"MW\":\"Malawi\",\"MX\":\"Mexico\",\"MY\":\"Malaysia\",\"MZ\":\"Mozambique\",\"NA\":\"Namibia\",\"NC\":\"New Caledonia\",\"NE\":\"Niger\",\"NF\":\"Norfolk Island\",\"NG\":\"Nigeria\",\"NI\":\"Nicaragua\",\"NL\":\"Netherlands\",\"NO\":\"Norway\",\"NP\":\"Nepal\",\"NR\":\"Nauru\",\"NU\":\"Niue\",\"NZ\":\"New Zealand\",\"OM\":\"Oman\",\"PA\":\"Panama\",\"PE\":\"Peru\",\"PF\":\"French Polynesia\",\"PG\":\"Papua New Guinea\",\"PH\":\"Philippines\",\"PK\":\"Pakistan\",\"PL\":\"Poland\",\"PM\":\"Saint Pierre and Miquelon\",\"PN\":\"Pitcairn\",\"PR\":\"Puerto Rico\",\"PS\":\"Palestinian Territory, Occupied\",\"PT\":\"Portugal\",\"PW\":\"Palau\",\"PY\":\"Paraguay\",\"QA\":\"Qatar\",\"RE\":\"Reunion\",\"RO\":\"Romania\",\"RU\":\"Russian Federation\",\"RW\":\"Rwanda\",\"SA\":\"Saudi Arabia\",\"SB\":\"Solomon Islands\",\"SC\":\"Seychelles\",\"SD\":\"Sudan\",\"SE\":\"Sweden\",\"SG\":\"Singapore\",\"SH\":\"Saint Helena\",\"SI\":\"Slovenia\",\"SJ\":\"Svalbard and Jan Mayen\",\"SK\":\"Slovakia\",\"SL\":\"Sierra Leone\",\"SM\":\"San Marino\",\"SN\":\"Senegal\",\"SO\":\"Somalia\",\"SR\":\"Suriname\",\"ST\":\"Sao Tome and Principe\",\"SV\":\"El Salvador\",\"SY\":\"Syrian Arab Republic\",\"SZ\":\"Swaziland\",\"TC\":\"Turks and Caicos Islands\",\"TD\":\"Chad\",\"TG\":\"Togo\",\"TH\":\"Thailand\",\"TK\":\"Tokelau\",\"TL\":\"Timor-Leste\",\"TN\":\"Tunisia\",\"TO\":\"Tonga\",\"TR\":\"Turkey\",\"TT\":\"Trinidad and Tobago\",\"TV\":\"Tuvalu\",\"TW\":\"Taiwan, Province of China\",\"TZ\":\"Tanzania, United Republic of\",\"UA\":\"Ukraine\",\"UG\":\"Uganda\",\"UM\":\"United States Minor Outlying Islands\",\"US\":\"United States\",\"UY\":\"Uruguay\",\"UZ\":\"Uzbekistan\",\"VC\":\"Saint Vincent and the Grenadines\",\"VE\":\"Venezuela\",\"VG\":\"Virgin Islands, British\",\"VI\":\"Virgin Islands, U.s.\",\"VN\":\"Viet Nam\",\"VU\":\"Vanuatu\",\"WF\":\"Wallis and Futuna\",\"WS\":\"Samoa\",\"YE\":\"Yemen\",\"YT\":\"Mayotte\",\"ZA\":\"South Africa\",\"ZM\":\"Zambia\",\"ZW\":\"Zimbabwe\"}",
   "languages": "ar-BH,en,fa,ur",
   "is_eu": {
      "$numberInt": "0"
   },
   "phone_code": {
      "$numberInt": "973"
   },
   "currency": "",
   "currency_code": "BHD",
   "currency_symbol": "",
   "population": {
      "$numberInt": "738004"
   },
   "fips_code": "BA",
   "north": "26.3308150010001",
   "south": "25.790910001",
   "east": "50.720622",
   "west": "50.3158550000001",
   "capital": "Manama",
   "timezone_json": "{\"Asia\\/Bahrain\":{\"country_code\"...",
   "continent": "AS",
   "continent_name": "Asia",
   "continents_translation": "{\"AF\":\"Africa\",\"AS\":\"...",
   "area_km2": {
      "$numberInt": "665"
   },
   "geo_name": "BHR",
   "terms_and_conditions": null,
   "privacy_policy": null,
   "flag1x1": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaH...",
   "flag4x3": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaH..."
}

```
## See after editing with include your translations:
_(Veja após a edição incluir suas traduções:)_

```
{
   "_id": {
      "$oid": "5cd9fe8308053b28c90379f8"
   },
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
   "countries_translation": "{\"AD\":\"Andorra\",\"AE\":\"...",
   "languages": "pt-BR,es,en,fr",
   "is_eu": {
      "$numberInt": "0"
   },
   "phone_code": {
      "$numberInt": "55"
   },
   "currency": "Reais",
   "currency_code": "BRL",
   "currency_symbol": "R$",
   "population": {
      "$numberInt": "201103330"
   },
   "fips_code": "BR",
   "north": "5.264877",
   "south": "-33.750706",
   "east": "-32.392998",
   "west": "-73.985535",
   "capital": "Brasília",
   "countries_translation": "{\"AD\":\"Andorra\",\"AE\":\"...",
   "timezone_json": "{\"America\\/Araguaina\":{\"country_c...",
   "continent": "SA",
   "continent_name": "South America",
   "continents_translation": "{\"AF\": \"África\", \"AS\":...",
   "area_km2": {
      "$numberInt": "8511965"
   },
   "geo_name": "BRA",
   "terms_and_conditions": "Termos e Condições\r\n\r\nBem ...",
   "flag1x1": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0ia...",
   "flag4x3": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0ia..."
}
```
