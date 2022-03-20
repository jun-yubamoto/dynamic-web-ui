# DynamicWebUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/dynamic`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Overview

insタグ内にscriptとして入力済みにしたいデータがjsonとして定義されている前提。
dynamic-example.component.ts.ngOnInit()内でタグ内のjsonを取得して、データバインド対象のフィールドに代入することで実現。

```html:index.html
〜前略〜
<body>
  <!-- リクエストのデータを挿入するタグとしてinsを使用(目印になればなんでも良い) -->
  <ins>
  <script>
  var json = {
    "alias_name": "ccc",
    "alias_age": 22
  }
  </script>
  </ins>
  <app-root></app-root>
```

