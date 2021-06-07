import json
f = open('./data.json','r', encoding='utf8')
data = json.load(f)
templateFile = open("./template.html", encoding='utf8')
html = templateFile.read()
forchuinhau =data["vanmau"]["baytocamxuc"]
print(html)
i = 1
out = open('./out.html','w', encoding='utf8')
for cc in forchuinhau:
    tem = html.replace("idforwhat", f'baytocamxuc{i}')
    i = i + 1
    tem = tem.replace("useforwhat", cc["header"])
    tem = tem.replace("thiscontent", cc["content"])
    out.write(tem)


