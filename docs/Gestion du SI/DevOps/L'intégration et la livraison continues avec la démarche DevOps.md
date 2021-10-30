---
id: lintegration-et-la-livraison-continues-avec-la-demarche-devops
title: L'intégration et la livraison continues avec la démarche DevOps
description: My document description
slug: /lintegration-et-la-livraison-continues-avec-la-demarche-devops
---

# L'intégration et la livraison continues avec la démarche DevOps

## Qu'est-ce que l'intégration continue ?

> **L'intégration et la livraison continues**, ou en anglais _**Continuous Integration and Continuous Delivery (CI/CD)**_ permettent de :
> - **accélérer le _Time-to-Market_** (le temps de développement et de mise en production d'une fonctionnalité) ;
> - **réduire les erreurs** lors des livraisons ;
> - assurer une **continuité de service** des applications.

**L'intégration continue** est un ensemble de pratiques utilisées en génie logiciel, consistant à vérifier, à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l'application développée.

Le principe de l'intégration continue est justement de détecter ces problèmes d'intégration au plus tôt dans le cycle de développement.

> L'intégration continue va se faire en 5 étapes :
> 1. Planifiez votre développement.
> 2. Compilez et intégrez votre code.
> 3. Testez votre code.
> 4. Mesurez la qualité de votre code.
> 5. Gérez les livrables de votre application.

Toutes les étapes se feront sur GitLab. Les étapes 2 à 4 seront lancées automatiquement grâce à GitLab CI :

![Étapes de l'intégration continue sur GitLab](https://user.oc-static.com/upload/2019/05/23/15586109893555_1c3_illus_WHITEBG%20%280-00-17-23%29_4.png)

### Étape 1 : Planifiez votre développement

Afin de **savoir quoi développer**, il est nécessaire d'avoir à disposition un outil permettant la collaboration entre les développeurs. Cet outil permettra notamment de gérer les différentes releases et toutes les fonctionnalités, de garantir la priorité du backlog, etc.

Intervenant tout au long du projet, la collaboration de toute l'équipe est nécessaire pour assurer la planification du projet. Cette planification est étroitement liée à la méthodologie Scrum. Elle a pour but de découper le projet en petites tâches à réaliser par toute l'équipe.

> Pour collaborer avec vos équipes, vous pourrez utiliser **Jira**, **GitLab**, **Confluence**, **ALM Octane** ou encore **Pivotal Tracker**.

### Étape 2 : Compilez et intégrez votre code

#### Le contrôle de code source

Le code source se doit d'être disponible à chaque instant sur un dépôt central. Chaque développement doit faire l'objet d'un suivi de révision. Le code doit être compilable à partir d'une récupération fraîche, et ne faire l'objet d'aucune dépendance externe. Même s'il existe des notions de branche, la création d'une branche doit être évitée le plus possible, privilégiant le développement sur la branche principale ; cela évite de maintenir plusieurs versions en parallèle. Ce genre de pratique est appelé *trunk-based development*.

> Pour faire du contrôle de source, vous retrouverez les outils **Git**, **Subversion**, **GitHub**, **GitLab**, **Perforce** ou bien **Bitbucket**.

#### L'orchestrateur

Ensuite, toutes les étapes doivent être automatisées par un **orchestrateur**, qui saura reproduire ces étapes et gérer les dépendances entre elles. De plus, l'utilisation d'un orchestrateur permet de donner accès à tous, et à tout moment, à un tableau de bord qui donnera l'état de santé des étapes d'intégration continue. Ainsi, les développeurs ont au plus tôt la boucle de feedback nécessaire, afin de garantir que l'application soit prête à tout moment. De plus, l'orchestrateur permettra d'aller plus loin dans la livraison continue.

> L'orchestration des étapes de votre intégration continue peut se faire grâce à des outils comme **Jenkins**, **TeamCity**, **Azure DevOps**, **GitLab CI**, **Concours CI**, **Travis CI** ou **Bamboo**.

La première étape, et celle qui paraît la plus évidente, est de compiler le code de manière continue. En effet, sans cette étape, le code est compilé manuellement sur le poste du développeur, afin que ce dernier s'assure que son code compile.

Malheureusement, comme dit précédemment, le développeur ne s'assure pas que son code permet de bien compiler avec tous les autres développements faits par l'équipe. À la prochaine livraison, un développeur intègre alors manuellement toutes les modifications, une opération qui produit beaucoup de peine et de souffrance.

La mise en place d'une première étape de compilation dans un processus d'intégration continue permet justement de ne plus se soucier si des modifications de code cassent la compilation. Le développeur doit alors s'assurer de bien envoyer son code source sur le dépôt central. En faisant cela, il déclenche une première étape de compilation, avec toutes les modifications des autres développeurs. Si la compilation ne se fait pas, le code est alors rejeté, et le développeur doit corriger ses erreurs.

Après cette première étape, le code devient plus sûr, et le dépôt de code source garantit qu'à chaque instant, un développeur récupère un code qui compile. Dans cette étape, les tests ne sont pas encore exécutés. Le code peut donc être de mauvaise qualité.

> Vous pourrez compiler votre code avec **Maven**, **Ant**, **Gradle**, **MSBuild**, **NAnt**, **Gulp** ou encore **Grunt**.

### Étape 3 : Testez votre code

#### Les tests unitaires

Dans cette étape, **l'orchestrateur se charge de lancer les tests unitaires à la suite de la compilation**. Ces tests unitaires, généralement avec un framework associé, garantissent que le code respecte un certain niveau de qualité.

> Les tests unitaires permettent de vérifier le bon fonctionnement d'une partie précise d'un logiciel ou d'une portion d'un programme.

Plus il y a de tests unitaires, plus le code est garanti sûr. Évidemment, l'orchestrateur ne peut lancer que les tests qui ont été codés par les développeurs, et ne peut pas inventer de nouveaux cas de tests.

Ces tests doivent s'exécuter **de la manière la plus rapide possible**, afin d'avoir un feedback le plus rapide lui aussi. Pour arriver à ce niveau, **il est nécessaire que les tests unitaires n'aient aucune dépendance** vis-à-vis de systèmes externes, comme par exemple une base de données, ou même le système de fichiers de la machine.

Les tests unitaires apportent 3 atouts à la production :
- **trouver les erreurs plus facilement**. Les tests sont exécutés durant tout le développement, permettant de visualiser si le code fraîchement écrit correspond au besoin ;
- **sécuriser la maintenance**. Lors d'une modification d'un programme, les tests unitaires signalent les éventuelles régressions. En effet, certains tests peuvent échouer à la suite d'une modification, il faut donc soit réécrire le test pour le faire correspondre aux nouvelles attentes, soit corriger l'erreur se situant dans le code ;
- **documenter le code**. Les tests unitaires peuvent servir de complément à la documentation ; il est très utile de lire les tests pour comprendre comment s'utilise une méthode. De plus, il est possible que la documentation ne soit plus à jour, mais les tests, eux, correspondent à la réalité de l'application.

**L'ensemble des tests unitaires doivent être relancés après une modification** du code, afin de vérifier qu'il n'y ait pas de régressions (l'apparition de nouveaux dysfonctionnements). 

La multiplicité des test unitaires oblige à les **maintenir** dans le temps, au fur et à mesure que le développement avance.

> Pour implémenter et exécuter vos tests unitaires, vous retrouverez des outils comme **JUnit**, **NUnit** ou encore **XUnit**.

### Étape 4 : Mesurez la qualité de votre code

Maintenant que les tests unitaires sont écrits et exécutés, nous commençons à avoir une meilleure qualité de code, et à être rassurés sur la fiabilité et la robustesse de l'application. Grâce à la compilation et aux tests unitaires, nous pouvons maintenant **mesurer la qualité du code**. Tout ceci permet aux développeurs de **maintenir** dans le temps un code de très bonne qualité, alertant l'équipe en cas de dérive des bonnes pratiques de tests.

> L'étape de qualité de code est différente de l'étape de test, car cette étape de **qualité** assure que le code sera **maintenable** et **évolutif** au fur et à mesure de son cycle de vie, alors que les **tests** servent à garantir que le code **implémente bien les fonctionnalités** demandées, et ne contient pas (ou peu) de **bugs**.

Lors de l'étape de qualité de code, nous cherchons à assurer la plus petite **dette technique** possible de notre application. La dette technique est le temps nécessaire à la correction de bugs ou à l'ajout de nouvelles fonctionnalités, lorsque nous ne respectons pas les règles de coding. La dette est exprimée en **heures de correction**. Plus cette dette est élevée, plus le code sera difficile à maintenir et à faire évoluer.

L'étape de qualité de code mesure aussi d'autres métriques, comme le nombre de vulnérabilités au sein du code, la couverture de test, mais aussi les [*code smells*](https://fr.wikipedia.org/wiki/Code_smell) (qui sont des mauvaises pratiques à ne pas implémenter), la [complexité cyclomatique](https://fr.wikipedia.org/wiki/Nombre_cyclomatique) (complexité du code applicatif) ou la duplication de code. C'est le rôle du développeur de respecter les normes définies et de corriger au fur et à mesure son code.

Afin de renforcer la qualité du code et de ne pas autoriser le déploiement d'un code de mauvaise qualité, nous pouvons implémenter un **arrêt complet du pipeline d'intégration continue, si le code n'atteint pas la qualité requise**.

> **Les outils** : la qualité du code peut être évaluée grâce à **SonarQube**, **Cast** ou **GitLab Code Quality**.

### Étape 5 : Gérez les livrables de votre application

Le code, une fois compilé, doit être déployé dans un dépôt de livrables, et versionné. Les binaires produits sont appelés **_artefacts_**. Ces artefacts doivent être accessibles à toutes les parties prenantes de l'application, afin de pouvoir les déployer et lancer les tests autres qu'unitaires (test de performance, test de bout en bout, etc.). Ces artefacts sont disponibles dans un stockage, centralisé et organisé, de données. Ce peut être une ou plusieurs bases de données où les artefacts sont localisés en vue de leur distribution sur le réseau, ou bien un endroit directement accessible aux utilisateurs.

> La mise à disposition des artefacts peut être faite par **Nexus**, **Artifactory**, **GitLab repository**, **Quay**, **Docker Hub**.

### Utilisez GitLab pour mettre en place un pipeline CI/CD

Dans la suite de ce cours, nous ferons le choix de GitLab. Cet outil a l'avantage d'avoir toutes les briques nécessaires à la mise en place de l'intégration continue, sans rentrer dans des étapes complexes de mise en place des outils, ainsi que les connexions associées.

Afin de pouvoir illustrer l'intégration continue, nous allons travailler sur un projet open source : la mise en place du site web d'une clinique vétérinaire via Spring Boot. Toutes les étapes de mise en place de l'intégration continue seront entièrement détaillées dans la suite de cette partie.

> Vous n'avez pas besoin de connaître Spring Boot, ni d'être calé en développement Java. Tout le code vous sera fourni, vous lui ferez passer toutes les étapes du pipeline CI/CD.

## Planifiez votre développement

> La méthodologie DevOps emprunte de nombreux concepts à **Scrum**. Afin de bien suivre la suite de ce chapitre, il vous sera donc nécessaire d'avoir des connaissances du vocabulaire et de la méthodologie Scrum. Il vous faudra notamment connaître les termes *epic*, *user story*, *task*, *bug*, *sprint*, *Product Backlog*, *board*,*burndown chart*, *Definition of Done*, *Definition of Ready*, tels que définis par la méthodologie Scrum.

Dans GitLab, l'**issue** est la notion centrale pour définir n'importe quoi : que ce soit une epic, une feature ou même un bug. La distinction se fait via des labels, que l'on positionne sur l'issue.

Il est temps de définir notre premier **backlog**, c'est-à-dire l'ensemble des tâches à réaliser sur notre projet.

### Créez votre projet GitLab

Dans un premier temps, nous allons **créer un projet dans GitLab**. Pour cela, nous allons utiliser la plateforme [https://gitlab.com/](https://gitlab.com/), afin d'éviter d'installer notre propre plateforme GitLab en local.

Si vous n'avez pas encore de compte sur GitLab, je vous invite à vous en créer un, puis à vous connecter.

Une fois connecté, vous arrivez sur une page listant tous vos projets. Si vous venez de créer le compte, normalement cette page sera vide.

> Comme expliqué dans le premier chapitre, nous allons nous baser sur le projet **PetClinic** tout au long du cours. Dans ce chapitre, nous allons commencer à planifier le développement de fonctionnalités pour ce projet.

Pour **créer un nouveau projet dans GitLab**, une fois connecté, cliquez sur le bouton `New Project`. Sur la nouvelle page, il faut entrer un nouveau nom de projet. Dans le champ Project Name, nous allons entrer le nom **spring-petclinic-microservices**. Notez au passage que GitLab remplit automatiquement le champ Project Slug. Il est impératif de passer le projet en **Public** afin de bénéficier de toutes les fonctionnalités abordées dans ce cours. Une fois tous les champs remplis, l'écran devrait ressembler à cela :

![Création d'un projet sur Gitlab](https://user.oc-static.com/upload/2019/05/23/15586242595092_new-project-detail.png)

Appuyez maintenant sur le bouton *Create Project*. Vous arrivez alors sur la page du projet fraîchement créé. Avant de récupérer le code source de l'application, et de l'intégrer dans GitLab, nous allons mettre en place les différentes briques nécessaires au bon déroulement du projet. Tout d'abord, nous allons naviguer dans la partie Issues, afin d'ajouter les colonnes nécessaires à notre projet. Pour ce faire, il suffit d'aller sur le menu à gauche, survoler le menu Issues, et cliquer sur le lien Boards. Sur cette page, GitLab nous propose d'ajouter les listes par défaut via le bouton Add default lists. GitLab crée alors deux nouvelles colonnes, To Do et Doing :

![Votre board sur GitLab](https://user.oc-static.com/upload/2019/05/23/15586243172078_boards-new.png)

Ce **board** sera notre board par défaut durant tout notre projet, afin de voir son avancement. Nous allons ensuite **créer les différents labels** que nous avons vus précédemment, afin de pouvoir créer et catégoriser les issues que nous allons ouvrir. Pour ce faire, nous allons aller dans le sous-menu Labels du menu Issues. Sur la nouvelle page, il faut alors cliquer sur le bouton **New Label** pour créer une nouvelle catégorie d'issue. Notez que GitLab a déjà créé les deux labels To Do et Doing pour nous.

Sur la page de création de nouveaux labels, nous allons ajouter tous les labels nécessaires à la catégorisation des issues :

![Création d'un nouveau label](https://user.oc-static.com/upload/2019/05/23/15586244055298_label-new.png)

> **Les catégories à créer sont** : Epic, User Story, Bug, Ready, Rejected, High, Medium, Low, In Review. Une fois les labels créés, la liste devrait ressembler à ceci :

![Tous vos labels sont prêts !](https://user.oc-static.com/upload/2019/05/23/15586244563257_labels-list.png)

Vous noterez la création de plusieurs labels que je n'ai pas détaillés : High, Medium, Low, Ready, Rejected et In Review. Ces labels sont utilisés pour catégoriser plusieurs issues et pour créer un nouveau board, que nous allons appeler **Product Backlog**. Pour ce faire, il faut retourner dans le menu Board. Tout d'abord, dans la page courante, cliquez sur Add List et sélectionnez le label In Review pour ajouter une nouvelle colonne dans le board courant. Le nouveau board doit ressembler à cela (pour des questions de lisibilité, j'ai replié les colonnes Open et Closed dans la capture d'écran suivante) :

![Nouvelle colonne sur votre board de développement](https://user.oc-static.com/upload/2019/05/23/15586245146433_development-board.png)

Ensuite, sur la page, en haut à gauche, il y a une liste déroulante contenant tous les boards créés. Pour l'instant, il n'y en a qu'un seul, celui de développement qui est actuellement affiché.

Dans cette liste déroulante, sélectionnez **Create New Board**, puis donnez-lui le nom de **Product**. Ce board sera notre **Product Backlog** qui listera toutes les epics, ainsi que les user stories associées et leurs états respectifs :

![Créez votre Product Backlog](https://user.oc-static.com/upload/2019/05/23/1558624642716_new-board.png)

Sur la nouvelle page, après avoir cliqué sur le bouton Create Board, il faut maintenant ajouter les colonnes Low, Medium, High et Rejected afin de pouvoir classifier les epics sur ce board. Pour ce faire, il faut cliquer sur la liste déroulante Add List, et ajouter les labels correspondants.

Votre board devrait ressembler maintenant à cela :

![Votre Product Backlog](https://user.oc-static.com/upload/2019/05/23/15586246843437_product-board-detail.png)

Nous avons maintenant tous les outils nécessaires afin de commencer notre travail sur le projet. Le workflow de développement se déroule comme suit :

1. Le product owner travaille avec les utilisateurs finaux afin de définir un **Product Backlog**. Ce Product Backlog est constitué de différentes **epics**.
2. Ces **epics** doivent faire apparaître plusieurs critères, comme par exemple des wireframes ou autres écrans définissant l'application. Une epic en high passe en sprint backlog lorsque son périmètre est délimité avec un label **Ready**, et le développement est confirmé avec le client. Ce n’est qu’à ce moment que l’epic est discutée avec l’équipe et décomposée en user stories, décrivant la feature à développer.
3. Les **user stories** doivent respecter la Definition of Ready définie plus tôt, lors du cycle de développement. Une user story n'est ready que si elle a bien été écrite, et contient tous les éléments nécessaires à son développement durant le sprint.
4. Une fois que le sprint backlog a été décomposé en user stories, nous pouvons alors commencer la planification du sprint backlog.

Pour ce cours, nous allons créer **deux issues** :
- **une epic** ;
- **une user story**.

### Créez votre première epic

Pour créer une **epic**, le plus simple est d'aller dans le sous-menu List du menu Issues, et de cliquer sur le bouton **New Issue**.

Sur la nouvelle page, il faut alors renseigner les champs nécessaires. Commençons par renseigner le titre, ainsi que la description de l'issue :

**Titre de l'issue :**

```
[EPIC] Gestion des vétérinaires
```

**Description de l'issue :**

```
Dans le projet *PetClinic*, il faut ajouter la gestion des vétérinaires.
Implémentation de :
- Création des vétérinaires
- Recherche des vétérinaires
- Mise à jour des vétérinaires
- Suppression des vétérinaires

Tâches à faire :
- [x] Création des vétérinaires
- [x] Recherche des vétérinaires
- [x] Mise à jour des vétérinaires
- [ ] Suppression des vétérinaires
- [ ] Supprimer les vétérinaires
- [x] Suppression de la base de données
```

Ajoutez-lui le label Epic :

![Créez votre première epic](https://user.oc-static.com/upload/2019/05/23/15586247348176_new-epic.png)

Et enregistrez en cliquant sur le bouton Submit Issue.

### Créez votre première user story

La deuxième issue sera de type user story. Ajoutez une nouvelle issue en cliquant sur le bouton New Issue :

**Titre de l'issue :**

```
[User story] Suppression du vétérinaire
```

**Description de l'issue :**

```
En tant qu'administrateur, je dois pouvoir supprimer un vétérinaire afin que celui-ci ne s'affiche plus dans l'application
```

Et enregistrez-la.

Si vous revenez sur la liste des issues, vous avez maintenant deux issues créées :

![Vos 2 issues créées](https://user.oc-static.com/upload/2019/05/23/15586248070332_list-issues.png)

### Organisez votre backlog

Nous allons maintenant **associer la user story** fraîchement créée à l'epic que l'on a créée auparavant. Pour ce faire, il suffit d'aller sur la description de l'epic, de cliquer sur le bouton +, au niveau du menu Related Issues, d'ajouter le numéro de la user story (dans mon cas, #5), et de cliquer sur Add.

Si nous retournons maintenant sur le menu Boards, nous allons voir que sur les deux boards créés (Development et Product), dans la partie Open, nous avons nos deux issues créées précédemment :

![Votre user story associée à votre epic](https://user.oc-static.com/upload/2019/05/23/15586248607207_board-not-filtered.png)

Cependant, nous ne voulons voir ici que les issues associées à chacun des boards (user stories pour le board Development, et epic pour le board Product). Pour ce faire, il suffit de cliquer sur le bouton Edit Board, et d'ajouter uniquement les labels qui nous intéressent :

![Configurez vos boards](https://user.oc-static.com/upload/2019/05/23/15586249458233_edit-board-development.png)

En modifiant les boards, nous nous retrouvons bien avec les issues qui nous intéressent sur chacun des boards.

En déplaçant nos issues sur chacun des boards, nous pouvons jouer sur la priorisation des epics, ou l'avancement des user stories.

![Priorisez vos epics](https://user.oc-static.com/upload/2019/05/23/15586250482371_priorizing-product.png)

La dernière chose à faire est de créer un sprint, et de voir le burndown chart associé. Pour ce faire, il faut aller dans le menu Milestones, et cliquer sur le bouton New Milestone.

Ensuite, il suffit de remplir les informations du sprint, et de cliquer sur le bouton Create Milestone :

![Créez une milestone](https://user.oc-static.com/upload/2019/05/23/15586251686628_new-milestone-detail.png)

Nous avons maintenant accès au burndown chart du sprint en cours :

![Votre burndown chart](https://user.oc-static.com/upload/2019/05/23/15586252007218_burndown-chart.png)

Afin **d'associer des issues au sprint en cours**, il suffit d'aller sur chacune des issues que l'on souhaite associer au sprint, et de modifier leur propriété sur le menu à droite. Dans cet exemple, j'ai modifié le milestone, le time tracking (en commentant l'issue avec les commandes /estimate et /spend), la due date, le weight, et je me suis assigné l'issue :

![Timeline d'évolution des boards](https://user.oc-static.com/upload/2019/05/23/15586252464075_edit-issue.png)

Dorénavant, toute l'équipe pourra suivre l'avancement du burndown chart facilement :

![Burndown chart accessible à toute l'équipe !](https://user.oc-static.com/upload/2019/05/23/15586252982251_burndown-chart-complete.png)

## Intégrez votre code en continu

### Clonez le projet sur votre poste

Pour pouvoir commencer à travailler sur le projet, afin de récupérer le code source, nous allons dans un premier temps **cloner le repository Git**. Pour ce faire, retournez sur la **page d'accueil du projet** où se trouvent toutes les instructions nécessaires au clonage du projet.

Cliquez en haut à droite sur le bouton bleu **Clone**, et copiez la deuxième ligne de la pop-up **Clone with HTTPS**.

Prenez ensuite une console d'ordinateur, représentant votre poste de développeur, et clonez le repository en tapant la commande suivante :

```
git clone https://gitlab.com/[votre-nom-d-utilisateur]/spring-petclinic-microservices.git
cd spring-petclinic-microservices
```

Une fois le clone fait, nous nous retrouvons avec un dossier vide où la branche `master` est associée à notre repository GitLab. Nous allons **ajouter une branche** `upstream` sur GitHub et puller les dernières modifications GitHub. Les commandes à taper sont les suivantes :

```
git remote add upstream https://github.com/spring-petclinic/spring-petclinic-microservices.git
git pull upstream master
git push origin master
```

Normalement, si les commandes précédentes ont été exécutées, le dossier Git devrait contenir le code source du projet PetClinic, ainsi que toutes les modifications associées.

![Votre projet GitLab une fois le code cloné](https://user.oc-static.com/upload/2019/05/27/15589768409364_gitlab.png)

### Activez l'intégration continue sur votre projet avec GitLab

Nous allons maintenant ajouter un **pipeline d'intégration continue**, afin d'implémenter les différentes étapes que nous avons vues précédemment. Les étapes de ce pipeline seront lancées successivement, lors de chaque nouveau push du code sur le repo. Voici à quoi ressemblera le pipeline :

![Les étapes que nous allons mettre en place](https://user.oc-static.com/upload/2019/05/29/15591251962731_1c3_illus_WHITEBG%20%280-00-17-23%29_0.png)

Pour **activer l'intégration continue sur GitLab**, le plus simple est de cliquer sur le bouton Set up CI/CD sur la page d'accueil du projet. Cette commande va créer le fichier `gitlab-ci.yml` dans votre projet. C'est sur ce fichier que vous décrirez tout votre pipeline CI/CD avec la syntaxe YAML.

Et d'ajouter les lignes suivantes dans le fichier :
```yml
stages:
  - build
  - test

cache:
  paths:
    - .m2/repository
  key: "$CI_JOB_NAME"

build_job:
  stage: build
  script:
    - ./mvnw compile
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine

test_job:
  stage: test
  script:
    - ./mvnw test
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine
```

Ce fichier est la pierre angulaire de l'implémentation d'un pipeline dans GitLab. Ce fichier s'appelle `.gitlab-ci.yml`, et c'est ici que nous allons définir notre pipeline. Dans cet exemple, nous avons implémenté **deux étapes** :
- l'étape de compilation avec la tâche `build_job` ;
- l'étape des tests avec la tâche `test_job`.

**Découvrons le fichier bloc par bloc !**

#### Définissez les étapes du pipeline

Dans un premier temps, je définis les **étapes** de mon pipeline avec le mot clé `stages`. Ce mot clé permet de définir l'ordre des étapes. Ici, la première étape va être le `build`, et ensuite les `tests`. 

Ça veut dire que les **tâches** (ou *jobs* en anglais) associées à **l'étape** `build` (ici `build_job`) vont s'exécuter en premier, puis les tâches de l'étape `test` (ici `test_job`).

#### Accélérez les étapes avec le cache

Le deuxième bloc, avec le mot clé `cache`, est ici utilisé pour accélérer toutes nos étapes. Effectivement, dans le cas d'une compilation Java avec Maven (notre cas), cette compilation récupère beaucoup de dépendances et de librairies externes. Ces librairies sont stockées dans le répertoire `.m2`.

Grâce à l'utilisation du mot clé `cache` et de la variable prédéfinie de GitLab `$CI_JOB_NAME`, ce répertoire est commun à tous les jobs du pipeline.

#### Définissez les jobs à effectuer

Ensuite, je déclare deux jobs, correspondant chacun à une des étapes de notre pipeline d'intégration continue. Dans ces deux jobs, nous voyons que nous avons trois différentes lignes. Découvrons à quoi ces lignes correspondent :
- `stage` : c'est le nom de l'étape qui va apparaître dans notre pipeline d'intégration continue. Cela correspond aussi au `stage` auquel sera exécuté le job ;
- `script` : ce sont les lignes de script à lancer afin d'exécuter l'étape. Ici, nous lançons le script Maven suivant son lifecycle. Dans la partie - `build`, nous lançons la compilation ; et dans la partie `test`, nous lançons les tests de l'application. D'autres options sont définies afin d'accélérer le temps de traitement de ces lignes. Le `script` va alors télécharger Maven, l’outil de compilation, toutes les dépendances de l’application, et lancer la compilation du projet ;
- `image` : c'est l'image Docker qui va être lancée par GitLab afin d'exécuter les lignes de script que nous avons définies. Ici, l'image `openjdk:8-alpine`, qui contient déjà Java 8, va être lancée afin de pouvoir compiler le projet. Une fois le fichier sauvegardé, le pipeline de build se lance, et vous devriez voir les différentes étapes se lancer (ici, l'étape de build et l'étape de test).

Lors de l'étape de `test`, le pipeline va exécuter les tests unitaires déjà présents au sein du projet. L'objectif de cette étape est de s'assurer de lancer les tests écrits par les développeurs. **Si un seul de ces tests échoue, le pipeline s'arrête**.

### Lancez votre pipeline CI/CD

Pour voir le pipeline complet, il suffit de cliquer sur le sous-menu Pipelines dans le menu CI/CD.

![La page Pipeline avec toutes les exécutions du pipeline](https://user.oc-static.com/upload/2019/05/27/15589772375269_pipeline.png)

En cliquant sur le statut *running* du pipeline, nous avons plus de détails sur ce pipeline, les jobs associés ainsi que leurs statuts.

![Détail d'exécution du pipeline](https://user.oc-static.com/upload/2019/05/27/15589773076171_pipeline-detail.png)

### Et si l'application contient un bug ?

#### Lancez votre pipeline avec un bug

> Afin de démontrer un workflow typique de CI/CD, nous allons **introduire un bug dans l'application**. 🐛 Ainsi, nous verrons comment le pipeline de CI/CD le détecte, et le corrige. Dans un premier temps, nous allons récupérer le fichier que nous venons de créer :

```
git pull
```

Le dossier courant devrait avoir le nouveau fichier `.gitlab-ci.yml`. Nous allons éditer un fichier afin d'introduire un bug. Dans un premier temps, créez une nouvelle branche qui va accueillir nos modifications :

```
git checkout -b refactor-customers
```

Ensuite, **éditez le fichier** Java "*spring-petclinic-customers-service/src/main/java/org/springframework/samples/petclinic/customers/CustomersServiceApplication.java*" Supprimez par exemple le " **;** " situé à la fin de la ligne `package org.springframework.samples.petclinic.customers` et commitez les changements dans Git :
```
git add spring-petclinic-customers-service/src/main/java/org/springframework/samples/petclinic/customers/CustomersServiceApplication.java
git commit -m "Refactorisation du code des clients"
git push origin refactor-customers
```

Vous devriez maintenant avoir deux branches visibles sur la page d'accueil du projet.

**Puisque vous avez introduit un bug, le pipeline de build est maintenant en échec :**

![Pipeline en échec](https://user.oc-static.com/upload/2019/05/27/15589774662327_build-failed.png)


En cliquant sur la croix rouge dans la colonne Stage, nous avons le détail de l'erreur (ici, le bug que nous avons introduit) :

![Détail de l'erreur d'exécution du pipeline](https://user.oc-static.com/upload/2019/05/27/155897750423_build-failed-detail.png)

#### Gérez le fix du bug sur GitLab

Pour enregistrer le bug, nous pouvons créer un nouveau Bug directement en cliquant sur le bouton New Issue. Il faut alors remplir les champs adéquats comme l'assignee, le milestone, les labels (Bug et User Story) ou la due date :

![Création d'une nouvelle issue Bug dans GitLab](https://user.oc-static.com/upload/2019/05/27/15589775778674_new-bug.png)

Une fois l'issue complétée, nous avons tous les détails du bug à corriger et le job en échec est automatiquement récupéré :

![Nouveau bug créé](https://user.oc-static.com/upload/2019/05/27/15589777460194_new-bug-created.png)

Si nous revenons sur le board Development, nous nous apercevons que l'issue créée apparaît dans la colonne Open. Nous pouvons alors la déplacer dans la colonne Doing, car nous allons la corriger.

Pour corriger ce bug automatiquement, nous allons créer une merge request, c'est-à-dire demander à commiter les changements sur notre branche dans la branche principale `master`. Pour ce faire, il faut aller dans le menu Merge Requests et cliquer sur New Merge Request.

Dans la nouvelle page, il faut choisir la branche que nous voulons merger dans la branche principale (ici, la branche `monbug`) et cliquer sur "Compare branches and continue" :

![Comparaison des branches Master et Monbug](https://user.oc-static.com/upload/2019/05/27/15589789051477_compare-branches.png)

Au prochain écran, il faut remplir les champs de façon adéquate, et cliquer sur Submit Merge Request. Pour le champ Description, la syntaxe est "Closes" et le numéro du bug, ici, le 6 :
- Title : *WIP: Mon premier bug* ;
- Description : *Closes #6* ;
- Assignee : *Assign to me* ;
- Milestone : *Sprint 1*.

![Description de mon bug](https://user.oc-static.com/upload/2019/05/27/15589790588121_submit-merge-request.png)

Une fois la merge request créée, nous avons tous les détails de celle-ci :

![Description de mon bug](https://user.oc-static.com/upload/2019/05/27/15589790991082_merge-request-detail.png)

#### Corrigez votre bug

l est temps de corriger notre bug. Nous allons éditer le fichier que nous avons modifié. Pour cela, nous allons réintroduire le " **;** " manquant, puis commiter le code corrigé sur la branche `monbug`.

```
git add spring-petclinic-customers-service/src/main/java/org/springframework/samples/petclinic/customers/CustomersServiceApplication.java
git commit -m "Correction du bug clients"
git push origin monbug
```

Vous allez constater qu'une fois le code pushé sur la branche `monbug`, le pipeline de build se lance afin de vérifier que le code que nous avons envoyé fonctionne.

Une fois que le pipeline s'est terminé en succès, nous pouvons alors enlever le statut Work in progress en cliquant sur le bouton Resolve WIP status, pour ensuite cliquer sur le bouton Merge :

![Bug résolu, mergez les branches !](https://user.oc-static.com/upload/2019/05/27/15589794618626_merge-branches.png)

Le pipeline se lance alors une dernière fois pour vérifier que le code mergé ne casse pas la compilation.

Enfin, si nous revenons sur le board Development, nous voyons que le bug est automatiquement fermé, suite à notre merge request.

![Les 2 premières étapes du pipeline sont fonctionnelles ✅](https://user.oc-static.com/upload/2019/05/29/15591253758662_1c3_illus_WHITEBG%20%280-00-17-23%29_2.png)

> Nous avons donc rempli les 3 premières étapes de l'intégration continue :
> 1. ✅Planifiez votre développement.
> 2. ✅Compilez et intégrez votre code.
> 3. ✅Testez votre code.
> 4.  Mesurez la qualité de votre code.
> 5. Gérez les livrables de votre application.

## Garantissez la qualité de votre code

### Mesurez la qualité de votre code

Commençons par **l'analyse de code statique**, afin de contrôler la **qualité du code**.

Nous allons donc modifier le pipeline de code, afin d'ajouter cette analyse de code. Il faut alors modifier le fichier `.gitlab-ci.yml` afin qu'il ressemble à ceci :
```yml
stages:
  - build
  - test
  - quality

cache:
  paths:
    - .m2/repository
  key: "$CI_JOB_NAME"

build_job:
  stage: build
  script:
    - ./mvnw compile
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine

test_job:
  stage: test
  script:
    - ./mvnw test
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine

code_quality_job:
  stage: quality
  image: docker:stable
  allow_failure: true
  services:
    - docker:stable-dind
  script:
    - mkdir codequality-results
    - docker run
        --env CODECLIMATE_CODE="$PWD"
        --volume "$PWD":/code
        --volume /var/run/docker.sock:/var/run/docker.sock
        --volume /tmp/cc:/tmp/cc
        codeclimate/codeclimate analyze -f html > ./codequality-results/index.html
  artifacts:
    paths:
      - codequality-results/
```

> Ici, j'ai ajouté une étape supplémentaire de qualité de code. L'étape (*le stage*) `quality` est défini dans le bloc `stages`. Cela veut dire que le pipeline va ajouter un job de qualité à la suite de la compilation et des tests. Ce job, je l'ajoute à la fin du fichier et il est appelé `code_quality_job`.

Dans ce job, nous retrouvons les 3 lignes des étapes précédentes, plus d'autres lignes :
- `allow_failure` : cette ligne **autorise l'échec de l'étape de qualité**. Comme ce n'est pas une étape critique, nous nous permettons d'autoriser l'échec et de laisser le pipeline continuer ;
- `services` : ce nouveau mot clé de GitLab permet de **démarrer un démon Docker**, pour que l’exécution de notre programme d’analyse de code puisse se faire. Cette ligne nous permet d'exécuter Docker au sein de l'image, afin d'exécuter l'analyse de code ;
- `script` : cette ligne est un peu plus compliquée que les lignes de script précédentes. La première ligne va créer un dossier  `codequality-results/` qui contiendra le résultat de l'analyse de code. La deuxième ligne monte le code à l'intérieur d'une image Docker via le dossier `/code`, et lance l'analyse via le programme `codequality`. Le résultat sera exporté dans le dossier `codequality-results` ;
- `artifact` : cette ligne est un prérequis de GitLab si nous voulons voir notre évolution de qualité. Le dossier `codequality-results/` sera stocké **au sein de GitLab** afin de pouvoir voir le résultat de l'analyse du scan. Ce résultat sera disponible et visible au sein du job `code_quality_job`.

Tout le script est exécuté au sein de l'image `docker:stable`. Cette image permet de démarrer le programme d’analyse de code.

Une fois le fichier commité sous Git et envoyé sur GitLab via les commandes suivantes, le pipeline d'intégration continue va alors se mettre à jour et lancer une compilation, suivie d'une analyse statique du code.

Le code est alors **analysé par GitLab**, et le rapport généré stocké au niveau des artefacts. Pour voir le résultat de l'analyse de code, il suffit de naviguer dans le job `code_quality_job`, puis de cliquer sur Browse. Vous aurez alors accès au dossier contenant le résultat de l'analyse de code, et pourrez naviguer au sein de ce fichier, afin de voir les améliorations à apporter au code.

Ça y est, l'étape de qualité est implémentée !

![L'étape de qualité est implémentée ✅](https://user.oc-static.com/upload/2019/05/29/15591255853183_1c3_illus_WHITEBG%20%280-00-17-23%29_3.png)

> D'autres outils existent pour voir la qualité d'un code de développement. Le plus connu est **SonarQube**, qui permet d'afficher des rapports de qualité, l'évolution de ceux-ci, ainsi qu'une détection partielle des erreurs. 

### Packagez votre application pour la déployer

La prochaine étape après la qualité du code est le **packaging** de l'application, afin de pouvoir la déployer plus facilement. Pour ce projet, nous allons choisir **Docker** comme programme de packaging.

> Si vous n'êtes pas à l'aise avec les conteneurs Docker, ils seront expliqués plus en détail **dans la seconde partie de ce cours**, quand nous verrons la livraison continue.

GitLab vient avec une registry Docker incluse, ce qui nous permet de stocker ces images au sein de GitLab. Pour pouvoir packager nos images Docker, il est nécessaire d'ajouter une nouvelle étape à notre pipeline d'intégration continue. Nous allons une nouvelle fois modifier le fichier `.gitlab-ci.yml` pour ajouter cette nouvelle étape. Le fichier final ressemblera alors à ceci :

```yml
stages:
  - build
  - test
  - quality
  - package

cache:
  paths:
    - .m2/repository
  key: "$CI_JOB_NAME"

build_job:
  stage: build
  script:
    - ./mvnw compile
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine

test_job:
  stage: test
  script:
    - ./mvnw test
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine

code_quality_job:
  stage: quality
  image: docker:stable
  allow_failure: true
  services:
    - docker:stable-dind
  script:
    - mkdir codequality-results
    - docker run
        --env CODECLIMATE_CODE="$PWD"
        --volume "$PWD":/code
        --volume /var/run/docker.sock:/var/run/docker.sock
        --volume /tmp/cc:/tmp/cc
        codeclimate/codeclimate analyze -f html > ./codequality-results/index.html
  artifacts:
    paths:
      - codequality-results/

package_job:
  stage: package
  services:
    - docker:stable-dind
  variables:
    DOCKER_HOST: tcp://docker:2375
  script:
    - apk add --no-cache docker
    - docker login -u gitlab-ci-token -p $CI_JOB_TOKEN $CI_REGISTRY
    - ./mvnw install -PbuildDocker -DskipTests=true -DpushImage
      -Dhttps.protocols=TLSv1.2
      -Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository
      -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN
      -Dorg.slf4j.simpleLogger.showDateTime=true
      -Djava.awt.headless=true
      --batch-mode --errors --fail-at-end --show-version -DinstallAtEnd=true -DdeployAtEnd=true
  image: openjdk:8-alpine
```

> J'ajoute dans le fichier la dernière étape de mon pipeline d'intégration continue, l'étape (le *stage*) `package`, qui s'exécutera à la suite de l'étape `quality`. J'ajoute ensuite le job `package_job` associé à cette étape de qualité.

Ce job supplémentaire compile le projet et **l'encapsule dans un conteneur**. Il est ensuite poussé sur la registry de GitLab. Nous retrouvons toutes les lignes que nous avons vues précédemment. La partie `script` lance cependant quelques commandes supplémentaires :
- tout d'abord, nous **installons le client Docker** dans l'image `openjdk:8-alpine` afin de pouvoir lancer les commandes propres à Docker ;
- ensuite, nous **nous connectons sur la registry interne de GitLab** afin de pouvoir pousser les images Docker de façon sécurisée ;
- enfin, nous **lançons la commande Maven** de création de l'image Docker.

Ce processus nous permettra, dans la livraison continue, de pouvoir **déployer facilement** le même code sur différents environnements. Il sert aussi à figer le code compilé dans un **package immuable**. De ce fait, nous pouvons facilement redéployer le même code compilé sur n'importe quel autre environnement. Cela assure que le code ne soit pas modifié entre deux environnements, et qu'un code testé soit **déployé partout de la même façon**. Les images Docker ainsi packagées se retrouvent sur la page de la registry :

![Registry GitLab de votre projet, avec les packages du pipeline](https://user.oc-static.com/upload/2019/05/27/15589802871223_registry.png)

Nous avons maintenant toutes les étapes nécessaires pour l'intégration continue. Comme prévu, notre code est **compilé** en continu, **testé**, **analysé** puis **packagé**, prêt à être déployé sur de nouveaux environnements.

![Toutes les étapes de l'intégration continue sont implémentées ✅](https://user.oc-static.com/upload/2019/05/29/1559125627351_1c3_illus_WHITEBG%20%280-00-17-23%29_4.png)

### Les autres outils de l'intégration continue

Vous avez donc vu tout au long de cette partie comment mettre en place **l'intégration continue avec GitLab**, mais sachez qu'il existe d'autres outils reprenant les mêmes concepts. Le plus connu et le plus utilisé d'entre eux est [Jenkins](https://jenkins.io/). Avec cet outil, vous pouvez implémenter toutes les étapes précédemment vues. De plus, Jenkins utilise maintenant un fichier de description comme GitLab, qui s'appelle [Jenkinsfile](https://jenkins.io/doc/book/pipeline/jenkinsfile/).

Le principe est strictement le même que **GitLab** : il s'agit d'un **fichier de description du pipeline** d'intégration continue qui va contenir toutes les étapes à lancer, afin de garantir que le code compile et soit de qualité à tout moment. Cependant, il est nécessaire d'installer Jenkins dans votre entreprise, de le configurer, de le maintenir et de le mettre à jour, ce qui peut s'avérer **long et fastidieux**.

Pour ceux qui ne voudraient pas passer leur temps à maintenir ce genre d'outils, il existe aussi d'autres outils en mode **Software-as-a-Service** (SaaS), où la maintenance et l'évolution sont garanties par le fournisseur. Ces outils peuvent être mieux adaptés pour mettre en place rapidement et sans effort un pipeline d'intégration continue. Les outils les plus connus dans cet écosystème sont [Travis CI](https://travis-ci.org/) et [CircleCI](https://circleci.com/).

Le gros avantage de ces outils est que la **maintenance** n'est pas à la charge de l'équipe, mais du **fournisseur**. De plus, ces outils peuvent se connecter automatiquement sur Github.com pour la plupart, ce qui évite aussi les configurations longues et fastidieuses des différents outils.

Enfin, GitHub a sorti une beta de son nouveau service à destination des développeurs, afin de pouvoir implémenter rapidement des pipelines d'intégration continue : **GitHub Actions**. Le principe est toujours le même : un fichier `.workflow` permet de créer un pipeline, afin de compiler et déployer du code sur n'importe quelle plateforme. L'avantage principal de GitHub Actions est que ce dernier est directement intégré dans GitHub.

> Nous avons donc rempli les deux dernières étapes de l'intégration continue :
> 1. ✅Planifiez votre développement.
> 2. ✅Compilez et intégrez votre code.
> 3. ✅Testez votre code.
> 4. ✅Mesurez la qualité de votre code.
> 5. ✅Gérez les livrables de votre application.

Et voilà ! Vous avez mis en place toutes les étapes de l'intégration continue ! 👏🎉

**Dans la prochaine partie**, nous mettrons en place la livraison continue, du déploiement à la supervision, en passant par les tests en production.

## Exercice ! Mettez en place le pipeline CI de votre application avec GitLab

Vous êtes le nouvel **ingénieur DevOps** de l'entreprise **PetClinic**. L’équipe de développement se repose sur un serveur afin de compiler l’application avant la livraison. Cependant, aucun test unitaire n’est exécuté, et les clients se plaignent de la mauvaise qualité de l’application.

Votre première mission est de mettre en place un pipeline d’intégration continue automatisé afin de compiler l’application, de lancer les tests unitaires associés, et de stocker les livrables sur un serveur afin de préparer le déploiement.

### Description

#### Objectif

L’objectif de cette activité est **d’écrire le pipeline d’intégration continue** nécessaire à l’intégration du projet. Pour cette activité, nous utiliserons le projet exemple Java **PetClinic** comme vu dans ce cours, mais dans sa version non microservice.

#### Données

Les données sont le [repository GitHub du projet Petclinic](https://github.com/spring-projects/spring-petclinic). Ce repository contient tous les éléments nécessaires au fonctionnement de l’application. Ces éléments sont :
- le code source ;
- les tests unitaires ;
- la documentation.

#### Instructions

Clonez le repository dans votre repository GitLab, et mettez en place un pipeline d’intégration continue contenant chacune des étapes nécessaires à sa bonne exécution.

Comme vu dans ce cours, ces étapes sont les 4 étapes de l’intégration continue : **compilation**, **test**, **qualité** et gestion des **livrables** (package + deploy).

Afin de pouvoir livrer l’application et la stocker sous GitLab, vous aurez besoin de modifier le fichier pom.xml et d'ajouter un fichier ci-settings.xml à la racine de votre projet. Pour vous aider, voici les fichiers :
- le [pom.xml](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/2035736/activit%C3%A9/pom.xml), vous pouvez directement remplacer votre pom.xml par celui-ci ;
- le [ci-settings.xml](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/2035736/activit%C3%A9/ci-settings.xml) à ajouter à la racine de votre projet.

Ces fichiers doivent contenir le nécessaire afin de pouvoir s’authentifier auprès du repository de GitLab, ainsi qu’avoir les droits nécessaires pour envoyer le livrable généré. Pour ceci, vous pouvez vous inspirer de [la page officielle de GitLab](https://docs.gitlab.com/ee/user/project/packages/maven_repository.html).

Une image Docker a été préparée pour vous afin de faciliter toutes les étapes de l'intégration continue, et contenant tous les outils nécessaires au bon déroulement des étapes.

Une fois toutes les étapes validées, **une phrase sera affichée** dans les logs de l'étape de déploiement. C'est en voyant cette phrase que vous saurez que vous avez réussi cette mission !

Le nom de l'image à utiliser dans le `.gitlab-ci.yml` est l'image `laurentgrangeau/oc-devops:latest`

### Question

Quelle est la phrase affichée lors de l'étape de déploiement ?

### Réponse

<details>
    <summary>Voir la réponse</summary>
    Something small enough to escape casual notice.
</details>

---

## Qu'est-ce que la livraison continue ?

**La livraison continue** est la suite logique de l'intégration continue. Dans l'intégration continue, nous cherchons à ce que le code **compile** bien, mais aussi qu'il soit **fonctionnel** en production et de **qualité**, en lançant le plus régulièrement possible les **tests unitaires**. Mais il existe d'autres **types** de tests, tout aussi importants, pour garantir la qualité du code. Ces tests ne peuvent cependant pas être lancés sans avoir un environnement déployé.

> Attention, la **livraison continue** ne doit pas être confondue avec le **déploiement continu**, qui est la suite logique de la livraison continue. Ces deux disciplines ont comme objectif de déployer une application en production. La différence se trouve dans l'automatisation du déploiement en production. La livraison continue s'arrête avant la production, et la mise en production reste un acte manuel (que ce soit avec un outil, ou automatisé via un clic de bouton, ou bien manuellement). La mise en production est soumise alors à la **validation d'un être humain**. <br/><br/>
> Le **déploiement continu**, quant à lui, est l'extension de la livraison continue : le déploiement se fait de manière **automatisée** par un pipeline. Toutes les étapes de compilation, tests unitaires et autres tests automatisés doivent être alors au vert avant de procéder au déploiement.

La **livraison continue** est une discipline où l'application est construite de manière à pouvoir être mise en production à n'importe quel moment.

Pour atteindre la mise en oeuvre de la livraison continue sur une application, il est nécessaire de mettre en place plusieurs étapes supplémentaires au sein de notre pipeline.

> Pour mettre en place la **livraison continue**, vous devez mettre en place **5 étapes** :
> 1. La codification de l'infrastructure avec l'**Infrastructure-as-Code**.
> 2. Le **déploiement** de votre application.
> 3. Le **test** de votre application en environnement de test.
> 4. La **supervision** de l'application.
> 5. La mise en place de **notifications** d'alerte.

### Étape 1 : Codifiez votre infrastructure avec l'Infrastructure-as-Code

> L'**Infrastructure-as-Code** est une pratique qui consiste à **décrire une infrastructure avec du code**. Ce code est alors stocké avec le code de l'application, et fait partie intégrante de cette dernière.

Les avantages sont nombreux :

- possibilité de créer des environnements **à la demande** ;
- **création d'environnement en quelques minutes**, contre plusieurs semaines dans une entreprise classique ;
- **pilotage de l'infrastructure** grâce au pipeline de livraison continue ;
- **connaissance des logiciels** installés sur la plateforme, grâce à l'outillage ;
- **montée de version** des environnements automatisés.

> Les outils principaux de l'Infrastructure-as-Code sont **Docker**, **Chef**, **Puppet**, **Ansible** et **Terraform**.

### Étape 2 : Déployez votre application

L'étape la plus importante de la livraison continue est le **déploiement du package** que nous avons précédemment créé lors de l'intégration continue. Les avantages d'utiliser un outil pour **automatiser le déploiement** de l'application sont nombreux :
- cela permet à l'équipe de **se concentrer sur le développement**, là où elle a sa valeur à ajouter ;
- n'importe qui dans l'équipe peut déployer des logiciels ;
- les déploiements deviennent beaucoup moins sujets aux **erreurs** et beaucoup plus **reproductibles** ;
- déployer sur un **nouvel environnement** est facile ;
- les déploiements peuvent être **très fréquents**.

> Pour pouvoir déployer les artefacts précédemment créés, vous pourrez utiliser **Spinnaker**, **XLDeploy** ou **UrbanCode**.

### Étape 3 : Testez votre application

C'est dans cette étape que nous allons ajouter **d'autres types de tests**, plus pertinents et plus fonctionnels, afin de garantir que l'application **fonctionne comme nous l'avons estimé**.

L'avantage de tester à ce stade du pipeline est que l'application tourne sur un environnement de test, **presque identique à celui de la production**. Son comportement sera donc le plus fidèle possible à celui qu'elle aura en production.

Ces tests peuvent être de différents types :

#### Test d'acceptance

Les **tests d'acceptance** sont des tests formels exécutés pour vérifier si un système satisfait à ses exigences opérationnelles. Ils exigent que l'application entière soit opérationnelle et se concentrent sur la réplication des comportements des utilisateurs. Mais ils peuvent aussi aller plus loin en mesurant la performance du système, et rejeter les changements si certains objectifs ne sont pas atteints.

Ces tests peuvent être **automatisés**, mais aussi **manuels**, avec une équipe de test dédiée qui regardera si le logiciel correspond au besoin.

> Pour lancer des tests d'acceptance, vous pourrez utiliser **Confluence**, **FitNesse** ou **Ranorex**.

#### Test de performance

Les **tests de performance** vérifient le comportement du système lorsqu'il est soumis à une charge importante. Ces tests ne sont pas fonctionnels et peuvent prendre différentes formes pour comprendre la fiabilité, la stabilité et la disponibilité de la plateforme. Par exemple, il peut s'agir d'observer les temps de réponse lors de l'exécution d'un grand nombre de requêtes, ou de voir comment le système se comporte avec une quantité importante de données.

Les tests de performance sont par nature assez coûteux à mettre en œuvre et à exécuter, mais ils peuvent vous aider à comprendre si de nouveaux changements vont dégrader votre système.

> Pour faire des tests de performance, vous pourrez utiliser **JMeter**, **Apache Bench** ou **Gatling**.

#### Smoke test

Les **smoke tests** sont des tests de base qui vérifient les fonctionnalités de base de l'application. Ils sont conçus pour être rapides à exécuter, et leur but est de vous donner l'assurance que les **principales caractéristiques de votre système fonctionnent comme prévu**. Ils peuvent être utiles juste après une nouvelle build, pour décider si vous pouvez ou non exécuter des tests plus coûteux, ou juste après un déploiement pour s'assurer que l'application fonctionne correctement dans le nouvel environnement déployé.

Par exemple, les smoke tests peuvent s'assurer que la base de données répond et est correctement configurée, mais aussi que les différents composants sont présents et envoient des données correctes, comme des API qui devraient répondre un code HTTP 200, ou une page web qui devrait s'afficher.

> Pour s'assurer du bon fonctionnement de l'application, vous pourrez utiliser **Selenium**, **SoapUI** ou **Cypress**.

### Étape 4 : Supervisez le comportement de votre application

Le **monitoring**, ou ***supervision***, intervient une fois que notre application est déployée sur un environnement, que ce soit un environnement de **staging**, de **test**, de **démonstration** ou bien l'environnement de **production** lui-même.

Le principe est de **récupérer certaines métriques** qui ont du sens pour ceux qui interviennent sur l'application. Cela peut être par exemple le nombre de connexions HTTP, le nombre de requêtes à la base de données, le temps de réponse de certaines pages ; mais aussi des métriques plus orientées métier, comme le chiffre d'affaires généré, ou le nombre de personnes inscrites sur l'application.

> Pour avoir un monitoring de vos applications, vous pourrez utiliser la suite **Elastic**, **Prometheus** ou **Graylog**.

Les métriques peuvent être aussi sur la partie livraison en elle-même, ou sur le processus de développement. Par exemple, l'équipe peut mesurer le nombre de déploiements qu'elle effectue par jour, ou encore deux autres indicateurs qui sont importants afin de voir la performance de l'équipe sur la correction d'erreurs qui peuvent survenir en production :

#### Le Mean-Time-Between-Failure

Le **Mean-Time-Between-Failure** (ou MTBF) est le temps moyen qui sépare deux erreurs en production. Plus ce temps est élevé, plus le système est stable et fiable, notamment du fait de la qualité des tests qui sont joués lors de la livraison continue.

#### Le Mean-Time-To-Recover

Le **Mean-Time-To-Recover** (ou MTTR) est le temps moyen de correction entre deux erreurs de production. Plus ce temps est faible, plus l'équipe est apte à détecter des erreurs et à les corriger rapidement.

> Des outils comme **Dynatrace**, **Sysdig** ou **New Relic** permettent d'avoir ces métriques.

### Étape 5 : Mettez en place des notifications d'alertes

La première version d'une nouvelle fonctionnalité ou d'un nouveau produit ne couvre souvent pas entièrement les besoins des clients. Même lorsque l'équipe passe des semaines ou des mois à construire quelque chose, le produit final est souvent voué à manquer des fonctionnalités importantes. C'est le principe du **Minimum Viable Product** (MVP) en Agile.

Il arrive donc très souvent de livrer des logiciels **incomplets ou buggés**, si l'équipe veut aller assez vite. Au lieu de vouloir éviter cela, il est nécessaire d'adopter l'idée de **livrer des petites pièces de valeur**.

En livrant **plus vite**, nous pouvons réparer les bugs **tant que les livraisons restent petites**, et que nous savons ce qui a été modifié dans l'application. Quand les développements grossissent, ils deviennent plus difficiles à gérer et à remanier. Un feedback rapide, grâce aux **tests en production** et au **monitoring**, permet d'intervenir et de corriger le problème dès que possible. Il nous permet d'apprendre des clients, et des erreurs, au bon moment.

Une fois le déploiement fini et les différents tests effectués, il est nécessaire d'avoir un feedback rapide de l'utilisation du logiciel. En effet, si le déploiement de la nouvelle version du logiciel apporte des bugs malgré les différents tests effectués, il faut alors les détecter le plus rapidement possible, afin de pouvoir proposer une nouvelle correction au logiciel.

> Pour avoir un feedback rapide de vos déploiements, vous pourrez tout simplement utiliser **Slack**, **Trello** ou **Twitter**. 

## Codifiez votre infrastructure

### Construisez les images de votre application avec Docker

Notre application PetClinic est construite à partir de fichiers, nommés `dockerfiles`, déjà présents dans le contrôle de code source. Ces `dockerfiles` sont présents dans le répertoire `Docker` du projet et contiennent les lignes suivantes :
```Dockerfile
FROM openjdk:8-jre-alpine

VOLUME /tmp

ARG DOCKERIZE_VERSION
ARG ARTIFACT_NAME
ARG EXPOSED_PORT

ENV SPRING_PROFILES_ACTIVE docker

ADD https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-alpine-linux-amd64-${DOCKERIZE_VERSION}.tar.gz dockerize.tar.gz
RUN tar xzf dockerize.tar.gz
RUN chmod +x dockerize

ADD ${ARTIFACT_NAME}.jar /app.jar

RUN touch /app.jar

EXPOSE ${EXPOSED_PORT}

ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
```

Ce `dockerfile` part d'une image qui contient déjà **la version 8 de Java** et copie tous les .jar des différents projets, afin de construire les différentes images associées. Enfin, la dernière étape de ce `dockerfile` est de lancer la commande `Java` avec le jar associé.

Dans cette partie du cours, vous allez modifier le `dockerfile` pour voir l'impact de l'Infrastructure-as-Code sur votre pipeline de déploiement. Pour ce faire, ouvrez le fichier `Dockerfile` présent dans le dossier Docker, afin de modifier la version du runtime de Java en version `openjdk:13-alpine` :

![Changez la version de l'openjdk dans le dockerfile](https://user.oc-static.com/upload/2019/05/23/15586191895254_change-openjdk.png)

Avant de pousser ce fichier sur Git, vous allez modifier la version de release de chaque `pom.xml` présent dans le projet, pour incrémenter le numéro de version des images Docker créées, et ainsi ne pas écraser les versions précédemment buildées :

![Changez la version des images Docker créées dans les fichiers pom.xml](https://user.oc-static.com/upload/2019/05/23/15586192536832_modify-pom.png)

**Il y a plusieurs `pom.xml` où il faut ajouter le bon numéro de version !**

Une fois ces modifications faites, poussez les fichiers sur Git :
```bash
git add .
git commit -m "Modification de la version de Java et incrémentation du numéro de version"
git push origin master
```

Le pipeline d'intégration continue devrait se lancer :

![Le pipeline se lance à nouveau](https://user.oc-static.com/upload/2019/05/23/15586193101822_pipeline-launch.png)

Et la registry Docker devrait contenir les nouvelles images buildées grâce au pipeline.

Vous venez de voir à quel point l'**Infrastructure-as-Code** est pratique pour tester rapidement le changement de version d'un framework, ou le changement de version d'un middleware comme Apache ou IIS. En ne changeant que quelques lignes, nous pouvons alors relancer tout le pipeline, afin de voir s'il y a un impact sur le code applicatif.

### Déployez votre application avec Docker Compose

L'Infrastructure-as-Code ne s'arrête pas là. Dans le cas de Docker, toute l'application peut être déployée grâce au fichier `docker-compose.yml` qui contient toute la définition de l'application, la relation entre les images Docker et le sens de démarrage de celles-ci.

Le fichier `docker-compose.yml` présent dans le repository Git définit des images en dur. Vous allez **remplacer le nom des images par les nouvelles images que vous venez de créer**.

Remplacez alors toutes les lignes contenant `mszarlinski/` par votre nom de registry (chez moi, `registry.gitlab.com/laurentgrangeau/`). De plus, ajoutez aussi en bout de ligne le numéro de version de l'image que vous venez de créer `:2.0.7`

Le fichier `docker-compose.yml` devrait ressembler à ceci (le fichier est volontairement tronqué) :

```yml
version: '2'

volumes:
  graf-data:

services:
  config-server:
    image: registry.gitlab.com/laurentgrangeau/spring-petclinic-microservices/spring-petclinic-config-server:2.0.7
    container_name: config-server
    mem_limit: 512M
    ports:
     - 8888:8888

  discovery-server:
    image: registry.gitlab.com/laurentgrangeau/spring-petclinic-microservices/spring-petclinic-discovery-server:2.0.7
    container_name: discovery-server
    mem_limit: 512M
    depends_on:
      - config-server
    entrypoint: ["./dockerize","-wait=tcp://config-server:8888","-timeout=120s","--","java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
    ports:
     - 8761:8761

...
```

Et voilà, vos fichiers Docker et Docker Compose sont prêts à être lancés par votre pipeline de livraison continue.

> Nous avons donc rempli la première étape de la livraison continue : 
> 1. ✅La codification de l'infrastructure avec l'**Infrastructure-as-Code**.
> 2. Le **déploiement** de votre application.
> 3. Le **test** de votre application en environnement de test.
> 4. La **supervision** de l'application.
> 5. La mise en place de **notifications** d'alerte.

## Déployez et testez votre code sur différents environnements

### Préparez votre environnement de travail

Afin de vous faciliter la tâche et de ne pas installer des dépendances inutiles, je vous conseille de créer un environnement sur le site [Play-With-Docker](https://labs.play-with-docker.com/). Ce site va vous permettre de créer une infrastructure Docker rapidement. Rendez-vous sur le site, et connectez-vous avec vos identifiants Docker Hub.

Une fois connecté, une session de 4 heures est créée afin de vous permettre de déployer vos images. Sur la page d'accueil, cliquez sur l'icône 🔧 et sélectionnez le template **3 Managers and 2 Workers**.

Cela va vous créer un cluster Docker Swarm, nécessaire au déploiement des images. Une fois le cluster créé, vous allez récupérer l'URL de l'environnement. Il suffit de copier l'URL présente dans la case SSH.

![Copiez l'URL SSH de votre Docker Swarm sur le Play-With-Docker](https://user.oc-static.com/upload/2019/05/23/15586194362038_pwd-ssh.png)

Cette URL sera utilisée pour configurer l'environnement de déploiement dans le fichier `.gitlab-ci.yml`. Maintenant, modifiez ce fichier pour ajouter deux nouvelles lignes. La première ligne à ajouter est au niveau de `variables`. Cette nouvelle variable va contenir l'URL copiée précédemment (`ip172-18-0-51-bihm1906chi000b37l6g` chez moi) :

```yml
PWD: ip172-18-0-51-bihm1906chi000b37l6g
```

La deuxième ligne est à ajouter juste après l'étape `package`. Cette étape supplémentaire sera le déploiement des images sur un environnement de staging :

```yml
deploy_staging_job:
  stage: deploy
  image: docker:stable
  script:
    - apk add --no-cache openssh-client py-pip python-dev libffi-dev openssl-dev gcc libc-dev make
    - pip install docker-compose
    - export DOCKER_HOST=tcp://$PLAYWD.direct.labs.play-with-docker.com:2375
    - docker-compose down
    - docker-compose up -d
  environment:
    name: staging
    url: http://$PLAYWD-8080.direct.labs.play-with-docker.com
```

La syntaxe est la même que les précédentes étapes. Dans la partie script, nous avons ajouté la copie du fichier `docker-compose.yml`, ainsi que le dossier `docker`. Enfin, nous démarrons le projet grâce à Docker Compose.

Si tout s'est bien passé, vous devriez voir apparaître dans vos environnements (*Opérations > Environnements*), le nouvel environnement **Staging**.

![Votre nouvel environnement de staging](https://user.oc-static.com/upload/2019/05/23/15586195611102_env-staging.png)

Vous pouvez alors cliquer sur le lien "*Open live environment*" sur la droite de cet environnement, afin de voir l'application déployée.

![Votre application déployée](https://user.oc-static.com/upload/2019/05/23/15586196079905_petclinic.png)

Maintenant que l'environnement **Staging** est déployé, il est possible de lancer des tests impossibles à lancer lors de la phase d'intégration continue. Dans ce cours, nous allons lancer un test de performance, afin de mesurer les temps de réponse de l'application. Pour ce faire, vous allez utiliser Apache Benchmark pour simuler de la charge sur le serveur.

Il faut alors ajouter de nouvelles lignes dans le fichier `.gitlab-ci.yml`, afin de lancer les tests de performance sur le nouvel environnement :

```yml
performance_job:
  stage: performance
  image: docker:git
  variables:
    URL: http://$PLAYWD-8080.direct.labs.play-with-docker.com/
  services:
    - docker:stable-dind
  script:
    - apk add --no-cache curl
    - x=1; while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' http://$PLAYWD-8080.direct.labs.play-with-docker.com/)" != "200" || $x -le 60 ]]; do sleep 5; echo $(( x++ )); done || false
    - mkdir gitlab-exporter
    - wget -O ./gitlab-exporter/index.js https://gitlab.com/gitlab-org/gl-performance/raw/master/index.js
    - mkdir sitespeed-results
    - docker run --shm-size=1g --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:6.3.1 --plugins.add ./gitlab-exporter --outputFolder sitespeed-results $URL
    - mv sitespeed-results/data/performance.json performance.json
  artifacts:
    paths:
      - sitespeed-results/
    reports:
      performance: performance.json
```

Dans ce nouveau bloc, la syntaxe reste la même. Nous récupérons dans un premier temps l'utilitaire de test de performance dans le bloc `script`. Nous lançons ensuite une application qui va se charger de tester notre site et d'en extraire des métriques de performance. Ces métriques sont ensuite uploadées sur GitLab afin d'être accessibles.

Ensuite, modifiez aussi le début du fichier afin d'ajouter une nouvelle ligne dans le bloc `stages` :

```yml
stages:
  - build
  - test
  - quality
  - package
  - deploy
  - performance
```

Enfin, une fois l'environnement de staging déployé et testé, il ne reste plus qu'à déployer l'application sur l'environnement de production. Pour cela, vous allez une nouvelle fois modifier le fichier `.gitlab-ci.yml` afin d'ajouter l'étape de mise en production :

```yml
deploy_prod_job:
  stage: deploy
  image: docker:stable
  script:
    - apk add --no-cache openssh-client py-pip python-dev libffi-dev openssl-dev gcc libc-dev make
    - pip install docker-compose
    - export DOCKER_HOST=tcp://$PLAYWD.direct.labs.play-with-docker.com:2375
    - docker-compose down
    - docker-compose up -d
  environment:
    name: prod
    url: http://$PLAYWD-8080.direct.labs.play-with-docker.com
  when: manual
```

Dans cette étape, nous ajoutons le mot clé `when: manual` afin de ne déployer en production qu'avec l'intervention d'un être humain. La validation est requise afin de savoir s'il existe des erreurs lors du déploiement sur **staging**. Si des erreurs existent, il n'y aura alors pas de mise en production.

Sur votre pipeline de livraison continue, le déploiement manuel est symbolisé par l'icône ▶️ à côté de l'étape `deploy_prod` :

![Le déploiement manuel sur GitLab CI](https://user.oc-static.com/upload/2019/05/23/15586196445312_manual-deploy.png)

Ces erreurs seront analysées lors de la prochaine étape : le **monitoring**.

Enfin, une technique largement utilisée lors de l'utilisation de la livraison continue est le **Canary Release**. Le principe du **Canary Release** est le même que dans les mines de charbon. À l'époque, les mineurs de charbon qui descendait à la mine plaçaient un canari devant eux, au bout d'une perche dans une cage. Si le canari mourait, cela voulait dire que l'air était non respirable et les mineurs avaient le temps de rebrousser chemin afin d'éviter un sort fatal.

Le principe est le même dans le déploiement : une partie seulement des utilisateurs vont être redirigés vers la nouvelle version de production, et si quelque chose se passe mal, il n'y aura uniquement qu'une petite partie des utilisateurs qui sera impactée. Pour le mettre en place sur notre projet, modifiez le fichier `.gitlab-ci.yml` en ajoutant un nouveau bloc `canary` :

```yml
canary_job:
  stage: canary
  image: docker:stable
  script:
    - apk add --no-cache openssh-client py-pip python-dev libffi-dev openssl-dev gcc libc-dev make
    - pip install docker-compose
    - export DOCKER_HOST=tcp://$PLAYWD.direct.labs.play-with-docker.com:2375
    - docker-compose down
    - docker-compose up -d
  environment:
    name: prod
    url: http://$PLAYWD-8080.direct.labs.play-with-docker.com
  when: manual
  only:
    - master
```

Le principe ici est exactement le même que la production, la différence étant que le déploiement en canary est décorrélé de la production.

Ensuite, modifiez le début du fichier afin que dans le bloc `stages` soit ajoutée l'étape `canary` :

```yml
stages:
  - build
  - test
  - quality
  - package
  - canary
  - deploy
  - performance
```

Nous avons maintenant un environnement qui se déploie en parallèle de la production, et qui contient uniquement une sous-partie des utilisateurs. Cet environnement sera très utile afin de faire des analyses en temps réel du comportement de l'application, et voir s'il n'y a pas d'erreurs.

Nous avons maintenant un pipeline complet de livraison continue, de la compilation du projet au déploiement sur un environnement de **staging**, une possibilité de déploiement en production via l'intervention d'une personne de l'équipe d'ops, par exemple, et un environnement Canary qui contient un sous-ensemble des utilisateurs, afin de voir comment se comporte l'application.

> Nous avons donc rempli les étapes 2 et 3 de la livraison continue :  
> 1. ✅La codification de l'infrastructure avec l'**Infrastructure-as-Code**.
> 2. ✅Le **déploiement** de votre application.
> 3. ✅Le **test** de votre application en environnement de test.
> 4. La **supervision** de l'application.
> 5. La mise en place de **notifications** d'alerte.

## Monitorez votre application

Afin de savoir si le déploiement d'un système s'est bien déroulé, il est nécessaire de le monitorer, ou le **superviser**. Cela permet de **prendre des décisions** plus rapides, comme le rollback automatique d'une application si celle-ci ne fonctionne pas.

**Les deux dernières étapes** de notre pipeline de livraison continue sont donc le **monitoring** de l'application, afin de savoir si celle-ci fonctionne correctement, ou présente des erreurs, ainsi que l'activation de notifications en cas de problème, pour avoir un **feedback rapide**.

### Supervisez votre application avec Prometheus

Dans cette section, vous allez ajouter dans GitLab la récupération des métriques de l'application. Lors du déploiement de l'application, des métriques sont exposées par **Prometheus**, qui est un des composants de notre stack technique.

Le serveur Prometheus est accessible sur le port 9091, auquel vous pouvez accéder en cliquant sur le numéro de port 9091 qui est apparu sur le site Play-with-Docker :

![Accédez à Prometheus via le Play-with-Docker](https://user.oc-static.com/upload/2019/05/23/15586223806345_pwd-prometheus.png)

Ce serveur Prothemeus récupère énormément de métriques de l'application, des systèmes sous-jacents, ainsi que des images Docker, comme le nombre de connexions par seconde, le nombre de connexions total, etc. Il expose aussi des métriques applicatives, comme le nombre d'animaux créés ou mis à jour.

Pour récupérer ces métriques dans GitLab, il suffit d'aller dans le menu **Settings**, **Integrations**, puis **Prometheus**.

Ensuite, il faut activer l'intégration avec Prometheus, et le configurer. Cochez la case **Active**, renseignez l'URL du serveur Prometheus ; dans mon cas : `http://ip172-18-0-8-biiabu86chi000em9j9g-9091.direct.labs.play-with-docker.com/`et sauvegardez :

![Configurez Prometheus](https://user.oc-static.com/upload/2019/05/23/15586225480542_prometheus.png)

Nous allons ensuite définir une métrique que nous allons suivre, afin de voir si l'application à un problème. Cliquez alors sur **New Metric** et ajoutez les informations suivantes :

![Configurez une nouvelle métrique sur Prometheus](https://user.oc-static.com/upload/2019/05/23/15586226004055_new-metric.png)

GitLab va alors récupérer la métrique `http_server_requests_seconds_count` depuis le serveur Prometheus, et l'ajouter dans sa base de données interne. Suite à cela, nous pouvons alors voir les graphes de ces métriques dans le menu **Operations**, puis **Metrics** où nous avons l'évolution des connexions HTTP au fur et à mesure du temps :

![Observez vos métriques](https://user.oc-static.com/upload/2019/05/23/1558622656011_metrics.png)

Ces métriques sont très utiles pour prendre des décisions sur le déploiement en production. Ici, nous voyons que les connexions HTTP se font bien, et nous sommes donc confiants sur la mise en production.

D'autres types de métriques sont aussi accessibles via GitLab, afin de prendre des décisions et voir la productivité de l'équipe.

Par exemple, lors du précédent chapitre, vous avez déployé un environnement Canary afin d'analyser le comportement de l'application. Pour voir comment cet environnement se comporte et si celui-ci est viable, allez dans le menu **Operations**, puis **Environments**. Vous devriez voir votre nouvel environnement `canary` et voir les métriques associées :

![Les métriques associées à Canary](https://user.oc-static.com/upload/2019/05/23/15586227065086_canary.png)

Pour voir la performance et la productivité de l'équipe, GitLab intègre aussi des métriques concernant le code, les issues, ou encore le temps d'exécution des tests. Ces différentes métriques sont disponibles dans le menu Project, sous-menu Cycle Analytics.

Les métriques les plus intéressantes sont celles qui fournissent des indicateurs sur la vélocité et la productivité de l'équipe. Par exemple, il est possible de voir **le temps entre la création d'une issue et sa résolution** dans la rubrique Review.

Il est possible de voir aussi le temps de déploiement sur les différents environnements. Plus cette valeur est petite, plus il est facile de déployer sur les environnements. Par exemple, dans l'exemple ci-dessous, le temps de déploiement sur l'environnement de Staging est de 3 minutes en moyenne. Avec un temps de déploiement aussi court, il est facile de déployer une correction en production assez rapidement.

![Métrique sur le temps de déploiement](https://user.oc-static.com/upload/2019/05/23/1558622961915_metrics-staging.png)

Il y a aussi d'autres métriques qui existent, concernant le code. Par exemple, vous pouvez voir le nombre de commits, ainsi que les différents contributeurs dans le menu Repository, sous-menu Contributors.

![Métriques sur les contributeurs](https://user.oc-static.com/upload/2019/05/23/15586230184054_commiters.png)

Il est aussi intéressant de voir le nombre de commits par jours, pour évaluer le temps de travail de chaque développeur. Cette métrique est disponible dans le même menu, sous-menu Charts.

### Mettez en place des notifications Slack

La dernière étape est l'étape de **feedback rapide**. Cette étape est celle qui va nous permettre de faire le lien entre la **production** (ops), et les **développeurs** (dev). C'est une étape qui donne de la visibilité aux développeurs sur des problèmes qu'il peut y avoir en production. **Plus rapide est la détection des problèmes, plus rapide est leur correction**. 

Cette étape est le lien final qui permet d'avoir notre amélioration continue durant tout le cycle de vie de l'application. GitLab permet l'intégration avec beaucoup d'applications tierces. L'intégration la plus simple est l'intégration email. Afin d'intégrer GitLab avec l'email, allez dans le menu Settings, sous-menu Integrations. Dans ce menu, choisissez "Email on push". Sur le prochain écran, cochez la case Active, renseignez votre mail et cliquez sur "Test settings and save changes".

![Activez les notifications](https://user.oc-static.com/upload/2019/05/23/15586230769625_integration-mail.png)

Vous allez maintenant être alerté des différents commits qu'il pourrait y avoir sur le contrôle de code source. Mais l'intégration n'est que partielle avec l'email. Le mieux est d'intégrer un outil comme Slack qui prendra toutes les notifications de GitLab, et les affichera dans un channel dédié à votre application. Pour intégrer Slack, il suffit d'aller dans le menu Integrations, et de choisir Slack Notifications.

![Activez les notifications Slack](https://user.oc-static.com/upload/2019/05/23/15586231586449_integration-slack.png)

De cette page, vous allez être invité à créer un webhook Slack afin de l'intégrer dans votre repository GitLab.

Choisissez un channel dédié à votre application afin de recevoir tous les messages associés. Attention, les messages sont nombreux. Je vous conseille de ne pas l'ajouter dans le channel Général.

![Configurez le channel Slack où recevoir les notifications](https://user.oc-static.com/upload/2019/05/23/15586232034197_slack-integration.png)

Une fois le webhook créé, copiez l'URL délivrée par Slack afin de la coller dans GitLab.

Lorsque l'intégration avec Slack est finie, vous recevrez tous les messages des événements GitLab dans le channel associé.

![Slack avec vos notifications de GitLab](https://user.oc-static.com/upload/2019/05/23/15586232703011_slack.png)


> Nous avons donc rempli les deux dernières étapes de la livraison continue : 
> 1. ✅La codification de l'infrastructure avec l'**Infrastructure-as-Code**.
> 2. ✅Le **déploiement** de votre application.
> 3. ✅Le **test** de votre application en environnement de test.
> 4. ✅La **supervision** de l'application.
> 5. ✅La mise en place de **notifications** d'alerte.

---

## Annexes

- [Mettez en place l'intégration et la livraison continues avec la démarche DevOps - OpenClassroom](https://openclassrooms.com/fr/courses/2035736-mettez-en-place-lintegration-et-la-livraison-continues-avec-la-demarche-devops) ;
- [Devenir expert / experte en DevOps - LinkedIn Learning ](https://www.linkedin.com/learning/paths/devenir-expert-experte-en-devops?u=56745737) ;
- [Continuous integration vs. continuous delivery vs. continuous deployment - Atlasian](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- [DevOps In 5 Minutes | What Is DevOps? - Simplilearn (Youtube)](https://www.youtube.com/watch?v=Xrgk023l4lI)

***

_Réalisé en Markdown avec [Dillinger](https://dillinger.io/) - Par [Nicolas Barbarisi](https://www.nicolas-barbarisi.com)_