import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-example',
  templateUrl: './dynamic-example.component.html',
  styleUrls: ['./dynamic-example.component.css']
})
export class DynamicExampleComponent implements OnInit {
  public name: string = 'aaa' ;
  public age: Number  = 0 ;
  public email: string = 'aaa@aaa.aaa' ;

  constructor(
    ) { }

  ngOnInit(): void {
    this.name = 'bbb';
    this.age = 1;
    this.email = 'bbb@bbb.bbb';
    // 足している数値は <ins> <script> など、取得の目印タグを除外するため
    var startScript: number = document.body.innerHTML.search('<ins>') + 5 + 12;
    // 引いている数値は </script> など、取得の目印タグを除外するため
    var endStcript: number = document.body.innerHTML.search('</ins>') - 12;
    var data = document.body.innerHTML.substring(startScript,endStcript);
    // JsonObjectとして不要な文字列を削除
    data = data.replace(/.+var.+{/,'{');
    const obj = JSON.parse(data);
    if ( obj.alias_name != undefined){
      this.name = obj.alias_name;
    }
    if ( obj.alias_age != undefined){
      this.age = obj.alias_age;
    }
    if ( obj.alias_email != undefined){
      this.email = obj.alias_email;
    }
  }

}
