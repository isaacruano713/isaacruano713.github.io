## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-+9dzNYaLHp3OPspFCOJGrEwfiOV3yqeD/atUDYVt9zKUJ8IW2QxffCT2LfmGfwfW /es/languages/css.js
sha384-G44u1/pUATC8754FIKYqkCxCl9AQYnspnFxzuR3RB1YVnTvqOEofqvZNQMUWcY/1 /es/languages/css.min.js
sha384-GCE+Z+7whzNpvoxg0r99r82QVQGunpGBsYcvS4vpuqEdyPseQRPnh6LTf1WSl3Gb /es/languages/excel.js
sha384-uMMeKU6xBWD301AZB6o7aBYDWroG+K8OUYDrA+cXf286lrDcciS6wBjzUnXFp1fS /es/languages/excel.min.js
sha384-oQpcUGMBf+VDTHOLQ1uhPp1FgNBo0OZc9gbXGuVFwAogHlkh/Iw6cvKKgcgCQkmV /es/languages/javascript.js
sha384-3T8DJ91yCa1//uY9h8Bo4QLrgEtbz4ILN2x9kSM4QWX9/1kKu6UXC3RAbVQV85UQ /es/languages/javascript.min.js
sha384-+k7Urw58KtesMajdnc5oFyHaVKkQpQuV2GseJ4oGD2nqLfkMa/SAceTDT1xxxpvL /es/languages/mathematica.js
sha384-NrQRnRP+ItgqOqxjc5lml+y913cYS5pG+mKH2P0J342fuZ21EcABNNJf547J+Cg1 /es/languages/mathematica.min.js
sha384-Tdx2DY9ZTHx3KhVXYqOVKx3q1zOboDGlTTv8sgMlER8y4WETtqL+C4VQ7B4A0OGq /es/languages/xml.js
sha384-n9ZezaAVj8pK1BIFZQxmC1BM9yGuBNRgvsOxHMHPCXzqYd1gSYIu9KjgGEm8K57w /es/languages/xml.min.js
sha384-h6xPJgkyvp13tIs697wZHjCH20tW1aJOrvnAKiZZiATSWZp0lyLB4bAdsEhWUSze /languages/css.js
sha384-+MO3D3y/aZzZq7QMAAA5KiuAcqBZivJHFmVUXfwdBoLxEXeGTeQGsNMll4fpnegg /languages/css.min.js
sha384-ZSZDNiVxP+4Q4FlDjBkKXq39vsfluRPm3E3REXxtNNsHe3HrDYn2Abs8q3jJtAp7 /languages/excel.js
sha384-cE562Xij2Xk4SxySz0GKZX6CH4pFe4wSgZgEyKEzTYRhiORoEnlvzFeW/2ZINZ6z /languages/excel.min.js
sha384-p/utwvqrRVOLlz0BjJ0BCGCb2liTDipfz47/QmGXz9hoPIjCKYEgmYUC30VmGgZy /languages/javascript.js
sha384-L/XmDiyusXomLRGcRmcBpPlboRFjpQNV747OJvg+sEOpgGYvUsNwcC4JLNQ2dI6O /languages/javascript.min.js
sha384-cv2WQeu41sqIpfVh/UMjGK1yFTFZ4wCxaGbFIzi0+KvJG6lHtSQYcJccQvHu14iR /languages/mathematica.js
sha384-1WyRNxnxiRASoImr/x5teZlt2xlwOotnfkJAj33imuGcVgndwsuCeyHAIke2RKmN /languages/mathematica.min.js
sha384-QAL2h4IMgQaJUJjUy0dSWdAut7o/A272ai8qOsJ8SSm9KMxkdLgH7oGfLGft/EJ0 /languages/xml.js
sha384-CN3No+n1UZXCFYyl+ge5yAPGTNGuH23BdIsFJxntDmEYL94AmoZlNBHGSdjVSjKG /languages/xml.min.js
sha384-js5WlYZlPIYksXDM78i2JGBIlffxqXs79k7QV698/Z/qTesgJniXtanU6s6n4aZs /highlight.js
sha384-YFUJwVQWluRLc8fcjSlU4afHyQUlPJKziHydo3UEQPQqo3LfdR3x+vX+t0HrD96E /highlight.min.js
```

