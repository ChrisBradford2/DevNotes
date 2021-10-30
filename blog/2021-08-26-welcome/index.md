---
slug: introducing-docusaurus
title: Introducing DevNotes
description: This is my first post on DevNotes.
authors: [Nicolas, Alexandre]
hide_table_of_contents: false
tags: [devnotes, release, documentation]
---

# Introducing DevNotes

Nous sommes très heureux de vous présenter [DevNotes](https://github.com/ChrisBradford2/DevNotes/) pour vous aider à mieux comprendre les cours grâce aux notes d'élèves centralisés.

Nous avons créé **DevNotes** pour les raisons suivantes :

1. Faciliter l'entraide entre les élèves,
2. Avoir une meilleure compréhension des cours et un approfondissement des modules.

<!--truncate-->

<!--Docusaurus est un outil conçu pour permettre aux équipes de publier facilement des sites Web de documentation sans avoir à se soucier de l'infrastructure et des détails de conception. À la base, tout ce qu'un utilisateur doit fournir, ce sont des fichiers de documentation écrits en markdown, la personnalisation d'une page d'accueil fournie écrite en React, et quelques modifications de configuration. Docusaurus s'occupe du reste en fournissant des styles par défaut, le formatage du site et une navigation simple dans les documents. La mise en route est facile, car les utilisateurs peuvent l'installer à l'aide de `npm` ou de `yarn` via un script d'initialisation simple qui crée un site Web d'exemple fonctionnel dès la sortie de la boîte.

Docusaurus fournit également des fonctionnalités de base pour les sites Web et la documentation, notamment la prise en charge des blogs, l'internationalisation, la recherche et la gestion des versions. Bien que certains projets ne requièrent aucune de ces fonctionnalités, il suffit généralement de mettre à jour les options de configuration pour les activer, au lieu de devoir ajouter l'infrastructure depuis le début. Au fur et à mesure que de nouvelles fonctionnalités sont ajoutées à Docusaurus, les utilisateurs peuvent facilement mettre à jour la dernière version. Pour ce faire, il suffit d'exécuter `npm` ou `yarn update` et de mettre à jour les options de configuration. Les utilisateurs ou les équipes n'auront plus besoin de retravailler manuellement toute l'infrastructure de leur site Web à chaque fois qu'une nouvelle fonctionnalité est ajoutée.-->

## La naissance de DevNotes

Lorsque les cours en B3 INGLOG à Paris Ynov Campus ont débuté, c'était la pagaille : des cours confus, des intervenants pas très clairs... Certains élèves finissaient même leurs journées avec le sentiment de ne rien avoir appris.

DevNotes est donc né d'une volonté de partager les connaissances de cours entre les élèves grâce à des support de cours, directement sur une plateforme web.

## Comment fonctionne DevNotes ?

DevNotes à été créé à l'aide du framework Docusaurus.

```
root-of-repo
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
├── website
│   ├── blog
│   │   ├── 2016-03-11-blog-post.md
│   │   └── 2017-04-10-blog-post-two.md
│   ├── core
│   │   └── Footer.js
│   ├── node_modules
│   ├── package.json
│   ├── pages
│   ├── sidebars.json
│   ├── siteConfig.js
│   └── static
```

## Les élèves peuvent-il créer leurs cours et les envoyer sur le site ?

Bien évidemment ! Il faut juste faire un [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) du projet et écrire le cours en `markdown`.
Toutes les informations sont décrites dans la page [Contribution](https://chrisbradford2.github.io/DevNotes/contrib).

## Contribution

![logo](../../static/img/devnotes.png)

Vos [contributions](https://chrisbradford2.github.io/DevNotes/contrib) à DevNotes sont les bienvenues, que ce soit pour ajouter une fonctionnalité, un cours, un arcticle de blog ou simplement poser des questions.