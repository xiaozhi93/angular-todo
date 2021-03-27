## 问题

1. 数据双向绑定必须在模块中引入FormsModule

2. 如何实现类似Vue中computed和watch？
   1. 比如计算所有todos中已经完成的todos列表？
   2. 类似vue中computed中get和set实现
   
   ```typescript
     get name(): string { return this._name; }
     set name(name: string) {
       this._name = (name && name.trim())
     }
    private _name = '';
   ```
   
   
